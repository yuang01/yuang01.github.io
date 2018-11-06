---
title: 爬虫实战之selenium爬取新浪滚动新闻
date: 2018-11-06 21:42
categories: "python"
tags: 'python'
---
对于js渲染的页面，而且又难获取到请求地址的时候，使用`selenium`是最好的选择了，简单粗暴！
<!-- more -->
## 要爬取的页面如下
地址：https://news.sina.com.cn/roll/#pageid=153&lid=2509&k=&num=50&page=1
![在这里插入图片描述](/images/selenium.png)
## 准备工作
### 1. selenium安装方法
```python
pip3 install selenium
```
### 2. chromedriver安装方法
首先下载：http://chromedriver.storage.googleapis.com/index.html
注意：`下载版本要和自己的谷歌浏览器的版本对应`，例如

chromedriver版本|支持的Chrome版本
:---|:---
v2.41|v67-69
v2.40|v66-68
v2.39|v66-68
v2.38|v65-67
v2.37|v64-66
v2.36|v63-65
v2.35|v62-64
v2.34|v61-63
v2.33|v60-62
v2.32|v59-61
v2.31|v58-60
v2.30|v58-60
v2.29|v56-58
v2.28|v55-57
v2.27|v54-56
v2.26|v53-55
v2.25|v53-55
v2.24|v52-54
v2.23|v51-53
v2.22|v49-52
v2.21|v46-50
v2.20|v43-48
v2.19|v43-47
v2.18|v43-46

#### windows下安装：
1. 将下载好的文件解压
2. 将chromedriver.exe移到python安装目录的Script中即可(可以打开环境变量查看python的安装位置)

#### mac下安装
1. 打开终端
2. 输入cd /usr/bin
3. 输入open . 
4. 然后把下载解压好的chromedriver拖到打开的文件里面
5. 输入chromedriver --version检查一下
6. 加入环境变量 
     打开终端,输入： cd ~ 回车，会进入~文件夹 
     然后输入：touch .bash_profile，回车执行后， 
     再输入：open -e .bash_profile 回车
     会在TextEdit中打开这个文件（如果以前没有配置过环境变量，那么这应该是一个空白文档）。如果有内		 容，请在结束符前输入，如果没有内容，请直接输入如下语句：
     ```bash
     export PATH=$PATH:/usr/local/bin/ChromeDriver
     ```
     然后保存文件，就可以看到，已经装好了，接下来就可以爬取了

## 以下是爬取新浪滚动新闻页面的代码
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.common.exceptions import TimeoutException
from pyquery import PyQuery as pq

browser = webdriver.Chrome()
wait = WebDriverWait(browser, 10)
# 进入爬取页面
def search():
    try:
        url = 'https://news.sina.com.cn/roll/#pageid=153&lid=2509&k=&num=50&page=1'
        browser.get(url)
        wait.until(EC.presence_of_element_located((By.ID, 'pL_Main')))
        getDetail()
        total = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#d_list > div > span:nth-child(14) > a')))
        return total.text
    except TimeoutError:
        return search()
# 得到具体信息
def getDetail():
    html = pq(browser.page_source,parser="html")
    content = html.find('#d_list')
    uls = content.find('ul').items()
    for ul in uls:
        lis = ul('li').items()
        for li in lis:
            news = {
                'title': li.find('.c_tit a').text(),
                'href': li.find('.c_tit a').attr('href'),
                'time': li.find('.c_time').text()
            }
            print(news)
# 爬取下一页
def next_detail(page_number):
    try:
        nextBotton = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#d_list > div > span:last-child > a')))
        nextBotton.click()
        wait.until(EC.text_to_be_present_in_element((By.CSS_SELECTOR, '#d_list > div > span.pagebox_num_nonce'), str(page_number)))
        getDetail()
    except TimeoutException:
        next_detail(page_number)

def main():
    try:
        total = search()
        total = int(total)
        print(total)
        for i in range(2, total + 1):
            next_detail(i)
    except Exception:
        print(Exception)
    finally:
        browser.close()

if __name__ == '__main__':
    main()


```