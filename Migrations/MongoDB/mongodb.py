# for pymongo lib installation
# pip3 install pymongo

import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["apiprod"]
userCol = db["users"]
sectionCol = db['sections']

sections = []
for section in sectionCol.find():
  sections.append(section)

for user in userCol.find():
  for rA in user['requestArray']:
    requestId = rA['requestId']
    for s in rA['sections']:
      sectionId = s['sectionId']
      keys = s.keys()
      print(keys)
      if 'sectionName' in s.keys():
        if len(s['sectionName']) == 0:
          print(sectionId)
          print(requestId)
          sec = next((item for item in sections if item['sectionId'] == sectionId), None)
          print('sec is', sec['name'])
        else:
          print(s['sectionName'])

      else:
        print('nothing')
            
      print('************************************')
      # input("Press Enter to continue...")