import groovy.json.JsonOutput
import groovy.json.JsonSlurper

baseDataIn = args[0]
additionalDataIn = args[1]
combinedDataOut = args[2]

def slurper = new JsonSlurper()

baseData = slurper.parse(new File(baseDataIn))
additionalData = slurper.parse(new File(additionalDataIn))

additionalData.each { additionalCandidateData ->
    def firstName = additionalCandidateData.getAt('Contact').split('-')[0].trim()
    def lastName = additionalCandidateData.getAt('Contact').split('-')[1].trim()
    baseData.each { candidateData ->
        def contact = candidateData.getAt('Contact')
        if (contact.contains(firstName) && contact.contains(lastName)) {
			dateList = additionalCandidateData.get('Date')
			if (dateList.size() > 0) {
				candidateData.put('date-elected', dateList.get(0).trim())
			}
        }
    }
}



def json_str = JsonOutput.toJson(baseData)
def json_beauty = JsonOutput.prettyPrint(json_str)
println json_beauty
File file = new File(combinedDataOut)
file.write(json_beauty)

