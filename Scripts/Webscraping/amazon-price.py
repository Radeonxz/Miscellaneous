import requests
from bs4 import BeautifulSoup
import smtplib
import time

URL = 'https://www.amazon.ca/AMD-Ryzen-9-3900X-Processors/dp/B07SXMZLP9/ref=sr_1_1?keywords=ryzen+9+3900&qid=1562624744&s=gateway&sr=8-1'

headers = {"User-Agent": 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}


def check_price():
  page = requests.get(URL, headers=headers)
  soup = BeautifulSoup(page.content, 'html.parser')
  # print soup.prettify()

  title = soup.find(id='productTitle').get_text()
  title_prettify = title.strip()
  price = soup.find(id='priceblock_ourprice').get_text()
  converted_price = float(price[0:3])

  if converted_price < 600:
    send_mail()

def send_mail():
  server = smtplib.SMTP('smtp.gmail.ca', 587)
  server.ehlo()
  server.starttls()
  server.ehlo()

  server.login('GMAIL_USERNAME', 'GMAIL_PASSWORD')
  subject = 'Price for:' + title_prettify
  body = 'Check the amazon link:' + URL

  msg = f"Subject: {subject}\n\n{body}"

  server.sendmail(
    # from
    'GMAIL_USERNAME',
    # to
    'MAIL_RECIPIENT',
    msg
  )

  print 'Email has been sent...'
  server.quit()

while True:
  check_price()
  time.sleep(60 * 60)