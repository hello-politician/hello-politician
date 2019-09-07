import json
import codecs
import re

def readSeedFile():
    f = codecs.open("./read.txt","r", encoding="cp1252")
    content = f.read()
    f.close()
    return content

def main():
    content = readSeedFile()

    content = content.replace('REGISTER OF PECUNIARY AND OTHER SPECIFIED INTERESTS OF MEMBERS OF PARLIAMENT: SUMMARY OF','')
    content = content.replace('ANNUAL RETURNS J. 7','')
    
    # content = content.encode('utf-8').strip()
    content = content.replace("^Hon ","")
    content = content.replace(" * Interest rate payable in relation to the debt is less than the normal market interest rate","")
    content = content.replace("that applied at the time the debt was incurred or, if the terms of the debt have been","")
    content = content.replace("amended, at the time of that amendment.","")
    content = content.replace("^Dr ","")

    content = content.splitlines()
    index = 0
    fileStream = None
    for line in content:
        pattern = re.compile("(NZ First|National|Labour|ACT|Green),")
        match = pattern.search(line)
        if match is not None:
            if fileStream is not None: 
                fileStream.close()
            fileStream  = open('MP-%i.txt' % (index),'w')
            line = line.replace("Hon ","")
            line = line.replace("Dr ","")
            fileStream.write(line + "\n")
            index +=1 
        else :
            if line.isdigit() or line.strip() != '' : 
                fileStream.write(line+ "\n")
    fileStream.close()

    ## read in list of mps/ as json. 
    ## get the first element, swap the names and get rid of the comma.
    with open('member.json') as json_data:
        mpContacts = json.load(json_data)
        for mp in mpContacts:
            oldMp = mp['Contact'].split(",")
            newMp = reversed(oldMp)
            mp["Contact"] = " ".join(newMp)


    print('Done')

if __name__ == '__main__':
    main()
