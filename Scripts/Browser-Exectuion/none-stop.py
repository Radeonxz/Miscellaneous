import webbrowser
import time
import random

while True:
  sites = random.choice(['google.ca', 'youtube.com', 'facebook.com', 'twitter.com'])
  visit = 'http://{}'.format(sites)
  webbrowser.open(visit)
  seconds = random.randrange(1, 3)
  time.sleep(seconds)