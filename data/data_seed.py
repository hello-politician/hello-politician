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
            fileStream.write(line + "\n")
            index +=1 
        else :
            if line.isdigit() or line.strip() == '' : 
                print("Removed page number")
            else:
                fileStream.write(line+ "\n")

    print('Done')

if __name__ == '__main__':
    main()