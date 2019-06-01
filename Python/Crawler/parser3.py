import requests
from bs4 import BeautifulSoup as bs

import private_infomation # Custom Lib

execpt_text = ['ipynb','zip','xlsx', 'youtube']

with requests.Session() as s:
    login_req = s.post(private_infomation.LOGIN_PAGE , data=private_infomation.LOGIN_INFO)
    print('Status Code : ' + str(login_req.status_code))

    if login_req.status_code != 200:
        raise Exception('Login Faild!')

    board = s.get(private_infomation.POST_LIST)
    soup = bs(board.text, 'html.parser')
    title_list = soup.select('tr > td > a')
    count = 0
    total = 0
    for title in title_list:
        if title.text.find(execpt_text[0]) != -1 or \
           title.text.find(execpt_text[1]) != -1 or \
           title.text.find(execpt_text[2]) != -1 or \
           title.get('href').find(execpt_text[3]) != -1 :
            continue
        total += 1
    for title in title_list:
        if title.text.find(execpt_text[0]) != -1 or \
           title.text.find(execpt_text[1]) != -1 or \
           title.text.find(execpt_text[2]) != -1 or \
           title.get('href').find(execpt_text[3]) != -1 :
            continue

        split_link = title.get('href').split('f_read('); link = split_link[1].split(')')

        post = s.get(private_infomation.READ_POST(link[0]))
        post_soup = bs(post.text, 'html.parser')
        post_soup_content = post_soup.select('table > tr')

        save_html = open('private_craw/'+ title.text + '.html', 'w')
        save_html.write(str(post_soup_content[1]))
        save_html.close()

        count += 1
        print('Progress... ' + str((count/total)*100))