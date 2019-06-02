import requests
import urllib.request
from bs4 import BeautifulSoup as bs

from private_infomation import * # Custom Lib

Download_Resource = ['ipynb', 'zip', 'xlsx', 'csv']
Skip_Keyword = ['youtube']

with requests.Session() as s:
    login_req = s.post(LOGIN_PAGE , data=LOGIN_INFO)
    
    print('Status Code : ' + str(login_req.status_code))
    if login_req.status_code != 200:
        raise Exception('Login Faild!')

    board = s.get(POST_LIST)
    board_parser = bs(board.text, 'html.parser')
    
    post_list = board_parser.select('tr > td > a')

    total = 0
    for post in post_list:
        if post.text.find(Download_Resource[0]) != -1 or \
           post.text.find(Download_Resource[1]) != -1 or \
           post.text.find(Download_Resource[2]) != -1 or \
           post.text.find(Download_Resource[3]) != -1 :
            continue
        if post.get('href').find(Skip_Keyword[0]) != -1 :
            continue
        total += 1

    count = 0
    for post in post_list:
        if post.text.find(Download_Resource[0]) != -1 or \
           post.text.find(Download_Resource[1]) != -1 or \
           post.text.find(Download_Resource[2]) != -1 or \
           post.text.find(Download_Resource[3]) != -1 :
            res = s.get(ASSETS_URL + post.get('href'))
            save_dir = 'private_craw/resource/data/' + post.text.strip()
            with open(save_dir, 'wb') as f:
                f.write(res.content)
            continue
        elif post.get('href').find(Skip_Keyword[0]) != -1:
            continue
        else:
            get_resource_split_link = post.get('href').split('f_read(')[1]
            get_resource_link = get_resource_split_link.split(')')[0]

            contents = s.get(READ_POST(get_resource_link))
            contents_parser = bs(contents.text, 'html.parser')
            content = contents_parser.select('table > tr')

            save_dir = 'private_craw/' + post.text + '.html'
            save_html = open(save_dir, 'w')
            save_html.write(str(content[1]))
            save_html.close()

            img_count = 0
            apply_link = ''
            img_type = ''
            for img in content[1].select('img'):
                # src에 주소가 있으면
                if img.get('src').find(ASSETS_URL) != -1:
                    apply_link = img.get('src')
                # 관련 없는 이미지 건너뜀
                elif img.get('src').find('http') != -1:
                    continue
                # src에 주소가 없으면 주소 추가
                else:
                    apply_link = ASSETS_URL + img.get('src')

                if apply_link.find('jpg') != -1 or apply_link.find('jpg') != -1:
                    img_type = '.jpg'
                elif apply_link.find('gif') != -1 or apply_link.find('GIF') != -1:
                    img_type = '.gif'
                elif apply_link.find('png') != -1 or apply_link.find('PNG') != -1:
                    img_type = '.png'
                else:
                    img_type = '.unknown'
                
                res = s.get(apply_link)
                save_dir = 'private_craw/resource/img/' + str(count) + '-' + str(img_count) + img_type
                with open(save_dir, 'wb') as f:
                    f.write(res.content)
                img_count += 1

            count += 1
            print('Progress... ' + str((count/total)*100))