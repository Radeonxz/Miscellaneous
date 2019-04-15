# Remove pair of key value from object

outputString = ""
with open("inputSource.json", 'r') as jsonFile:
    for l in jsonFile:
        l = l[1:-2]
        lArray = l.split(',')
        lArray = lArray[1:]
        l = ', '.join(lArray)
        l = '{' + l + '}\n'
        outputString += l

ouputFile = open('output.json', 'w+')
ouputFile.write(outputString)
ouputFile.close()