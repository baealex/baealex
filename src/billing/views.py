import datetime

from django.shortcuts import render, HttpResponse
from django.utils import timezone

from .models import Membership
from .lunarsolar import Solar, LunarSolarConverter

def get_month_day(month):
    if month == 4 or month == 6 or month == 9 or month == 11:
        return 30
    elif month == 2:
        if today.year % 4 == 0 and today.year % 100 != 0 or today.year % 400 == 0:
            return 29
        else:
            return 28
    else:
        return 31

def get_total_day(year, month, day):
    year_days = year*365 + ((year/4 - year/100) + year/400)
    
    month_days = 0
    for i in range(month):
        month_days += get_month_day(i + 1)

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

def is_holiday(date):
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

    if date.weekday() == 6 or date.weekday() == 7:
        return True
    return False

def members(request):
    if request.method == 'POST':
        new_member = Membership(
            name = request.POST['name'],
            created_date = request.POST['date'],
            event = request.POST['event'],
            dues = request.POST['dues'],
        )
        new_member.save()
    
    members = Membership.objects.all()
    sort = str()
    if request.GET.get('sort'):
        sort = request.GET['sort']
        members = members.order_by(sort)
    return render(request, 'members.html', {'members': members, 'sort': sort})

def members_detail(request, pk):
    member = Membership.objects.get(pk=pk)
    page = 1
    if request.GET.get('page'):
        page = int(request.GET['page'])
    
    data = {
        'results': list(),
    }
    date = member.created_date
    study_days_counter = 0
    page_counter = 0
    while page_counter < page * 10:
        if not is_holiday(date):
            study_days_counter += 1
            if study_days_counter > 8:
                study_days_counter = 0
                page_counter += 1
                if page_counter > page * 10 - 10:
                    data['results'].append({
                        'ep': page_counter,
                        'date': date,
                    })
        date += datetime.timedelta(days=7)
    
    return render(request, 'members_detail.html', {'page': page, 'data': data})

def holiday(request):
    return HttpResponse('0')