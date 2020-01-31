import datetime

from django.shortcuts import render, HttpResponse, redirect
from django.utils import timezone
from django.core.cache import cache

from .models import Membership, Holiday

cache.set('holidays', Holiday.objects.all(), None)

def get_month_day(year, month):
    if month == 4 or month == 6 or month == 9 or month == 11:
        return 30
    elif month == 2:
        if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
            return 29
        else:
            return 28
    else:
        return 31

def get_total_day(year, month, day):
    year_days = (year-1)*365 + ((int((year-1)/4) - int((year-1)/100)) + int((year-1)/400))

    month_days = 0
    for i in range(1, month):
        month_days += get_month_day(year, i)
    
    return year_days + month_days + day

def get_weekday(day):
    day %= 7
    if day == 0:
        return 'SUN'
    if day == 1:
        return 'MON'
    if day == 2:
        return 'TUE'
    if day == 3:
        return 'WED'
    if day == 4:
        return 'THU'
    if day == 5:
        return 'FRI'
    if day == 6:
        return 'SAT'

def is_holiday(date, holidays):
    FIXED_HOLIDAY = (
        ( 1, 1 ),
        ( 3, 1 ),
        ( 4, 8 ),
        ( 5, 5 ),
        ( 6, 6 ),
        ( 8, 15),
        (10, 3 ),
        (10, 9 ),
        (12, 25),
    )
    if (date.month, date.day) in FIXED_HOLIDAY:
        return True
    
    if holidays.filter(date=date):
        return True
    
    return False

def members(request, weekday=None):
    members = None
    render_params = dict()

    if not weekday:
        if request.method == 'POST':
            new_member = Membership(
                name = request.POST['name'],
                created_date = request.POST['date'],
                event = request.POST['event'],
                dues = request.POST['dues'],
            )
            new_member.save()
        members = Membership.objects.all()
    
    if weekday:
        render_params['weekday'] = weekday
        weekday_num = int()
        if weekday == 'sun':
            weekday_num = 1
        if weekday == 'mon':
            weekday_num = 2
        if weekday == 'tue':
            weekday_num = 3
        if weekday == 'web':
            weekday_num = 4
        if weekday == 'thu':
            weekday_num = 5
        if weekday == 'fri':
            weekday_num = 6
        if weekday == 'sat':
            weekday_num = 7
        members = Membership.objects.filter(created_date__week_day=weekday_num)
    
    sort = str()
    if request.GET.get('sort'):
        sort = request.GET['sort']
        members = members.order_by(sort)
    
    render_params['members'] = members
    render_params['sort'] = sort
    
    return render(request, 'members.html', render_params)

def members_detail(request, pk):
    member = Membership.objects.get(pk=pk)

    if request.method == 'POST':
        member.name = request.POST['name']
        member.created_date = request.POST['date']
        member.event = request.POST['event']
        member.dues = request.POST['dues']
        member.save()
        return redirect('members_detail', pk=member.pk)
    
    page = 1
    if request.GET.get('page'):
        page = int(request.GET['page'])
    
    data = {
        'results': list(),
    }
    date = member.created_date
    study_days_counter = 0
    page_counter = 0

    holidays = cache.get('holidays')
    while page_counter < page * 100:
        date += datetime.timedelta(days=7)
        if not is_holiday(date, holidays):
            study_days_counter += 1
            if study_days_counter >= 8:
                study_days_counter = 0
                page_counter += 1
                if page_counter > page * 100 - 100:
                    data['results'].append({
                        'ep': page_counter,
                        'date': date,
                    })
    
    return render(request, 'members_detail.html', {'member': member, 'page': page, 'data': data})

def holiday(request, pk=None):
    if not pk:
        if request.method == 'POST':
            new_holiday = Holiday(
                name = request.POST['name'],
                date = request.POST['date'],
            )
            new_holiday.save()
            cache.set('holidays', Holiday.objects.all(), None)
            return redirect('holiday')
            
        holidays = cache.get('holidays')
            
        sort = str()
        if request.GET.get('sort'):
            sort = request.GET['sort']
            holidays = holidays.order_by(sort)
        return render(request, 'holiday.html', {'holidays': holidays, 'sort': sort})
    else:
        if request.method == 'DELETE':
            Holiday.objects.get(pk=pk).delete()
            cache.set('holidays', Holiday.objects.all(), None)
            return HttpResponse('DONE')