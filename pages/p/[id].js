import React, { Components } from 'react'
import { Table } from 'evergreen-ui'
import styled from 'styled-components'
import Page from '../../components/pages'
import ExpenseDisclosureCard from '../../components/ExpenseDisclosureCard'
//import { InfoCard, CardHeading, StatSubtitle, StatContainer, StatHeading, StatIcon } from '../../components/styledComponents/cardStyles'
import CampaignDonationsCard from '../../components/CampaignDonationsCard'
import { AvailableData, dataCategory } from '../../components/AvailableData'
import PecuniaryCard from '../../components/PecuniaryCards'
import { StatCard } from '../../components/StatCard'
import OrgSVG from '../../static/images/org@2x.svg'
import LocationLogo from '../../assets/location.png'
import TimeLogo from '../../assets/time.png'

const Header = styled.header`
  width: 100vw;
  height: 208px;
  background-color: #3a3e47;
  padding-top: 4.5rem;
  margin: 0;
`
const HeaderContainer = styled.div`
  background-color: #3a3e47;
  width: 80rem;
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 1rem;
  margin: 0 auto;

  p {
    background-color: initial;
    font-size: 1.5rem;
  }
`
const PoliticianContainer = styled.div`
  background-color: #3a3e47;
`
const PoliticianImage = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  object-position: top;
  overflow: hidden;
`
const PoliticianStatContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;
  background-color: #3a3e47;
`
const PoliticianStat = styled.div`
  display: inline;
  background-color: #3a3e47;
`

const PoliticianStatImage = styled.img`
  display: inline;
  padding-top: -2px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`
const PoliticianStatText = styled.p`
  display: inline;
  margin-left: 4px;
  font-weight: 200;
`
const NameH1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0px;
  background-color: #3a3e47;
`

const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 58rem;
  gap: 2rem;
  width: 80rem;
  margin: 2rem auto;
`
const ContentCard = styled.div`
  background: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 1rem;
`

const StatSection = styled.div``

const ItemLink = styled.a`
  font-weight: 700;
  font-size: 1rem;
  display: block;
  color: #ded7ff;
  margin-bottom: 1rem;
`

const AccountingColumns = styled.div`
  display: grid;
  grid-template-columns: 28rem 28rem;
  gap: 2rem;
`

const partyLogos = [
  { party: "ACT New Zealand", fileName: "actSmall.jpg" },
  { party: "Green Party", fileName: "greenSmall.jpg" },
  { party: "Labour Party", fileName: "labourFern.svg" },
  { party: "National Party", fileName: "national.jpg" },
  { party: "NZ First", fileName: "nzFirstSmall.png" },
  { party: "Independent", fileName: "independent.png" }
];

const getImageName = arr => str => {
  if (str) {
    const result = arr.find(e => e.party.includes(str));
    return result ? result.fileName : 'indepentent.png'
  }
};

const getPartyLogoImageName = getImageName(partyLogos);

export default class Post extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
    const response = await fetch('https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json')
    const data = await response.json()
    const { id: mpId } = this.props.url.query
    const currentMP = data[mpId]
    this.setState({ data: { ...currentMP } })
  }
  render() {
    const { data } = this.state
    const { Contact, Party, 'disclosure-costs': cost, 'campaign-data-2017': rawCampaignData, Electorate } = data
    const pecuniaryDataKeys = [
      'Company directorships and controlling interests',
      'Other companies and business entities',
      'Employment',
      'Beneficial interests in, and trusteeships of, trusts',
      'Organisations and trusts seeking Government funding',
      'Real property',
      'Superannuation schemes',
      'Investment schemes',
      'Debtors',
      'Creditors',
      'Overseas travel costs',
      'Gifts',
      'Discharged debts',
      'Payments for activities',
    ]
    let pecuniaryData = {};
    for (let id in pecuniaryDataKeys) {
      let key = pecuniaryDataKeys[id]
      if (key in data) {
        pecuniaryData[key] = data[key]
      }
    }
    const campaignData = rawCampaignData ? rawCampaignData : { 'total-donations': 'Not Found', 'total-expenses': 'Not Found' }
    const costHeadings = cost ? Object.keys(cost) : ['Expense Disclosure Data']
    const costValues = cost ? Object.values(cost) : [{ 'accommodation-cost': 'Not Found', 'travel-cost': 'Not Found', 'total-cost': 'Not Found' }]
    const location = Electorate ? Electorate : 'List MP'
    const imageURL = Contact ? `/static/${Contact.replace(/\s/g, "")}.jpg` : 'http://lorempixel.com/120/120/people/'
    return (
      <Page>
        <Header>
          <HeaderContainer>
            <PoliticianImage src={imageURL} />
            <PoliticianContainer>
              <NameH1>{Contact ? Contact : 'Legitimate Name'}</NameH1>
              <PoliticianStatContainer>
                <PoliticianStat>
                  <PoliticianStatImage src={`/static/images/${getPartyLogoImageName(Party)}`} />{' '}
                  <PoliticianStatText>{Party ? Party : 'Freedom'}</PoliticianStatText>
                </PoliticianStat>
                <PoliticianStat>
                  <PoliticianStatImage src={LocationLogo} />{' '}
                  <PoliticianStatText>{location}</PoliticianStatText>
                </PoliticianStat>
                <PoliticianStat>
                  <PoliticianStatImage src={TimeLogo} />{' '}
                  <PoliticianStatText>
                    2016 - Present ( 4 years, 12 months )
                  </PoliticianStatText>
                </PoliticianStat>{' '}
              </PoliticianStatContainer>
            </PoliticianContainer>
          </HeaderContainer>
        </Header>
        <BodyGrid>
          <AvailableData currentMPData={this.state.data} />
          <StatSection>
            {
              Object.keys(pecuniaryData).map((key, index) => {
                return (
                  <PecuniaryCard
                    heading={key}
                    pecuniaryData={pecuniaryData[key]}
                    imgSrc={OrgSVG}
                  />
                )
              })
            }
            <AccountingColumns>

              <CampaignDonationsCard
                heading="2017 Campaign Data"
                totalDonations={campaignData["total-donations"]}
                totalExpenses={campaignData["total-expenses"]}
              />
              <ExpenseDisclosureCard
                heading={costHeadings[0]}
                accomodationCost={costValues[0]['accommodation-cost']}
                travelCost={costValues[0]['travel-cost']}
                totalCost={costValues[0]['total-cost']}
              />
            </AccountingColumns>
          </StatSection>
        </BodyGrid>
      </Page>
    )
  }
}
