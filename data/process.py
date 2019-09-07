import json
import sys

catagory = [ '1 Company directorships and controlling interests', '2 Other companies and business entities', '3 Employment', '4 Beneficial interests in, and trusteeships of, trusts', '5 Organisations and trusts seeking Government funding','6 Real property','7 Superannuation schemes','8 Investment schemes','9 Debtors','10 Creditors','11 Overseas travel costs','12 Gifts','13 Discharged debts','14 Payments for activities']
# './disclosure-of-member-expenses/target/combined.json'
data = []
with open(sys.argv[1]) as data_file:    
    data.append(json.load(data_file))

def addNewField(content, currentIndex):
    currentCategoryName = ''
    end = len(content)
    for index in range(1,end):
        item = []
        if content[index] in catagory:
            currentCategoryName = content[index]
            for indexContent in range(index + 1,end):
                if content[indexContent] in catagory:
                    break
                else:
                    item.append(content[indexContent])
            data[0][currentIndex][currentCategoryName] = item
        
def mutateData(content):
    currentIndex = 0
    for MP in data[0]:
        if MP['Contact'] in content[0]:
            addNewField(content,currentIndex)
        currentIndex += 1

# print((data[0]))
for i in range(0,117):

    fileStream = open('%sMP-%i.txt'%(sys.argv[2],i),'r')
    content = fileStream.read().splitlines()
    mutateData(content)
    fileStream.close()
    # for line in content:

with open(sys.argv[3], 'w') as outfile:
    json.dump(data[0], outfile)