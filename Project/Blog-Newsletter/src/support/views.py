from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse, Http404
from django.template.loader import render_to_string
from .models import *
from .forms import SubscriberForm
from django.core.mail import EmailMessage
from .consts import *

import datetime

def inner_subscribe(request):
    form = SubscriberForm()
    return render(request, 'subscribe.html', { 'subscribe_form': form })

def active_email(request, token):
    subscriber = get_object_or_404(Subscriber, token=token)
    subscriber.is_active = True
    subscriber.token = ''
    subscriber.save()
    return HttpResponse('<script>alert(\'인증이 완료되었습니다.\');close();</script>')

def block_email(request, email_hash):
    subscribers = Subscriber.objects.filter()
    for subscriber in subscribers:
        if str(baealex_hash(subscriber.email)) == email_hash:
            subscriber.delete()
            return HttpResponse('<script>alert(\'수신 거부되었습니다.\');close();</script>')
    return HttpResponse('<script>close();</script>')

@csrf_exempt
def subscribe(request):
    if request.method == 'GET':
        return JsonResponse({
            'result': 'Y',
            'count': str(len(Subscriber.objects.filter())),
        })
    if request.method == 'POST':
        form = SubscriberForm(request.POST)
        if form.is_valid():
            subscriber_info = form.save(commit=False)
            subscriber_info.token = randstr(64)
            subscriber_info.save()
            try:
                html_message = render_to_string('newsletter_template.html', {
                    'content': '<h3>메일을 인증해주세요!</h3><p><a href="'+ ACTIVE_URL + subscriber_info.token +'" target="_blank">인증하기</a></p>',
                    'blocking_url': BLOCK_URL + str(baealex_hash(subscriber_info.email))
                })
                email = EmailMessage('[BaeJino] ' + subscriber_info.name + '님! 메일을 인증해주세요!', html_message, to=[subscriber_info.email])
                email.content_subtype = 'html'
                email.send()
            except:
                return JsonResponse({'result':'E'})
            return JsonResponse({'result':'Y'})
        return JsonResponse({'result':'N'})

@csrf_exempt
def send_newsletter(request):
    if request.user.is_superuser:
        if request.method == 'GET':
            return render(request, 'newsletter_send.html', {})
        if request.method == 'POST':
            content = parsedown(request.POST['content'])
            subscribers = Subscriber.objects.filter()
            now_time = datetime.datetime.now()
            for subscriber in subscribers:
                if subscriber.is_active:
                    html_message = render_to_string('newsletter_template.html', {
                        'content': content,
                        'blocking_url': BLOCK_URL + str(baealex_hash(subscriber.email))
                    })
                    email = EmailMessage('[BaeJino] ' + subscriber.name + '님! ' + str(now_time.isocalendar()[1]) + '주차 정기 뉴스레터 입니다.', html_message, to=[subscriber.email])
                    email.content_subtype = 'html'
                    email.send()
                    subscriber.count += 1
                    subscriber.save()
            return HttpResponse('ALL DONE!')
    else:
        raise Http404()

@csrf_exempt
def send_newsletter_test(requests):
    pass