import requests
import urllib.request
from bs4 import BeautifulSoup as bs
from selenium import webdriver
import time
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('/home/baealex/GitHub/ProgramingRecord/Python/Crawler/chromedriver')
driver.implicitly_wait(3)

driver.get('http://URL')

driver.find_element_by_name('id').send_keys('ID')
driver.find_element_by_name('password').send_keys('PASS')

driver.find_element_by_class_name('btn_login').click()

driver.switch_to.frame('topFrame')
topbtn = driver.find_elements(By.XPATH, '//img')

#for i in btn:
#    i.click()

topbtn[4].click()

driver.switch_to.default_content()

driver.switch_to.frame('mainFrame')
driver.switch_to.frame('top1')
btn2 = driver.find_elements(By.XPATH, '//img')
btn2[0].click()
#for i in btn2:
#    print(count)
#    i.click()

driver.switch_to.default_content()

driver.switch_to.frame('mainFrame')
driver.switch_to.frame('center')
html = driver.page_source
print(html)