import json

catagory = [ '', 'Company directorships and controlling interests', 'Interests', 'Employment', 'Interests in trusts', 'Organisations and trusts seeking Government funding','Real property','Superannuation schemes','Managed investment schemes','Debtors','Creditors','Overseas travel','Gifts','Discharged debts','Payments for activities']

data = []
with open('memberinfo.json') as data_file:    
    data.append(json.load(data_file))

for i in range(0,117):
    fileStream = open('MP-%i.txt'%(i),'r')
    content = fileStream.read()
    
    fileStream.close()
    # for line in content:
