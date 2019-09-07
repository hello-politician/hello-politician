import groovy.io.FileType
import groovy.json.JsonOutput
import groovy.json.JsonSlurper

if (args.size() < 4) {
	println """
	Pass files as arguments
	args[0] - inFile (Src json for member disclosure items to be added to)
	args[1] - inDir (Directory containing member disclosure data files)
	args[2] - outFile (output json file to be written after member disclosure items have been added)
	args[3] - dataFormat (possible values: old, new)
	""".stripIndent()
	System.exit(1)
}

def inFile = args[0]
def inDir = args[1]
def outFile = args[2]
def dataFormat = args[3]

// Read base json to be added to
def slurper = new JsonSlurper()
baseMembersFile = new File(inFile)
data = slurper.parse(baseMembersFile)

def dir = new File(inDir)
dir.eachFileRecurse(FileType.FILES) { membersDisclosureFile ->
	def dataSet
	membersDisclosureFile.withReader { line ->
		dataSet =  line.readLine().split(',')
	}
	membersDisclosureFile.eachLine { line ->
		def splitLine = line.split(",(?=([^\"]*\"[^\"]*\")*[^\"]*\$)")

		if (splitLine.size() > 2 && splitLine[1] != "" && splitLine[1].contains(',')) {
			def firstName = splitLine[1].split(',')[0].replace('"', '')
			def lastName = splitLine[1].split(',')[1].replace('"', '')


			data.each { member ->
				def contact = member.get('Contact')

				if (contact != null) {
					if (contact.contains(firstName) && contact.contains(lastName)) {
						println "$dataSet  $firstName $lastName:"

						int accommodationCost = (splitLine[2].replace("-", "0").replace('"', '').replace(",", "") as Integer)
						+(splitLine[3].replace("-", "0").replace('"', '').replace(",", "") as Integer)
						println "Accomodation: $accommodationCost"

						int travelCost = (splitLine[4].replace("-", "0").replace('"', '').replace(",", "") as Integer)
						+(splitLine[5].replace("-", "0").replace('"', '').replace(",", "") as Integer)
						if (dataFormat == 'new') {
							+(splitLine[6].replace("-", "0").replace('"', '').replace(",", "") as Integer)

						}
						println "Travel: $travelCost"

						int totalCost = accommodationCost + travelCost

						if (member.get('disclosure-costs') == null) {
							member.putAt('disclosure-costs', new HashMap())
						}

						def costsMap = new HashMap()
						costsMap.put('accommodation-cost', accommodationCost)
						costsMap.put('travel-cost', travelCost)
						costsMap.put('total-cost', totalCost)
						def disclosureCostsMap = member.get('disclosure-costs')
						disclosureCostsMap.put(dataSet.toString().replace('"', ''), costsMap)


					}
				}
			}
		}
	}
}

def json_str = JsonOutput.toJson(data)
def json_beauty = JsonOutput.prettyPrint(json_str)
println json_beauty
File file = new File(outFile)
file.write(json_beauty)

