import json

with open('member.json') as data_file:    
    data = json.load(data_file)
    longest = 0
    name = ''
    for restaurant in data:
        if len(restaurant['Contact']) > longest:
            longest = len(restaurant['Contact'])
            name = restaurant['Contact']
    print(longest)
    print(name.replace(',',''))