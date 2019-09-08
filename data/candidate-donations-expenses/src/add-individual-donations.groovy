import groovy.json.JsonOutput
import groovy.json.JsonSlurper

baseDataIn = args[0]
additionalDataIn = args[1]
combinedDataOut = args[2]

def slurper = new JsonSlurper()

baseData = slurper.parse(new File(baseDataIn))
additionalData = slurper.parse(new File(additionalDataIn))

additionalData.each { donationData ->
    def firstName = donationData.getAt('CANDIDATE').split(' ')[0].trim()
    def lastName = donationData.getAt('CANDIDATE').split(' ')[1].trim()
    baseData.each { candidateData ->
        def contact = candidateData.getAt('Contact')
        if (contact.contains(firstName) && contact.contains(lastName)) {
            def campaignData = candidateData.get('campaign-data-2017')
            def donorMap = campaignData.get('individual-donations')
            if (donorMap == null) {
                donorMap = new HashMap()
            }
            donorMap.put(donationData.get('DONOR'), donationData.get('AMOUNT'))
            campaignData.put('individual-donations', donorMap)
        }
    }
}



def json_str = JsonOutput.toJson(baseData)
def json_beauty = JsonOutput.prettyPrint(json_str)
println json_beauty
File file = new File(combinedDataOut)
file.write(json_beauty)

