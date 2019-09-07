import React, { Components } from 'react'
import { useRouter } from 'next/router'
import { Table } from 'evergreen-ui'
import styled from 'styled-components'
import Page from '../../components/pages'
import ExpensesComponent from '../../components/expensesComponent'
import CompanyDirectorShip from '../../components/CompanyDirectorShip'

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
  border-radius: 100%;
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

const InfoCard = styled.div`
  background: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 8rem;
`

const StatSection = styled.div``
const StatContainer = styled.div`
  margin-top: 1.5rem;
`
const StatHeading = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.33px;
  line-height: 16px;
  margin-top: 0.5rem;
`
const StatSubtitle = styled.div`
  margin-top: 0.2rem;
  color: #ffffff;
`

const StatIcon = styled.img`
  height: 2rem;
  width: 2rem;
  float: left;
  margin-right: 0.5rem;
`

const CardHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.53px;
  margin-bottom: 1rem;
`

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

export default class Post extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  async componentDidMount(){
    const response = await fetch('https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json')
    const data = await response.json()
    const { id: mpId } =  this.props.url.query
    const currentMP = data[mpId]
    this.setState({ data: {...currentMP}})
  }
  render(){
    const { data } = this.state
    const { Contact, Party, 'disclosure-costs': cost } = data
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
                  <PoliticianStatImage src='http://lorempixel.com/24/24/people/' />{' '}
                  <PoliticianStatText>{ Party ? Party : 'Freedom'}</PoliticianStatText>
                </PoliticianStat>
                <PoliticianStat>
                  <PoliticianStatImage src='http://lorempixel.com/24/24/people/' />{' '}
                  <PoliticianStatText>Auckland Central</PoliticianStatText>
                </PoliticianStat>
                <PoliticianStat>
                  <PoliticianStatImage src='http://lorempixel.com/24/24/people/' />{' '}
                  <PoliticianStatText>
                    2016 - Present ( 4 years, 12 months )
                  </PoliticianStatText>
                </PoliticianStat>{' '}
              </PoliticianStatContainer>
            </PoliticianContainer>
          </HeaderContainer>
        </Header>
        <BodyGrid>
          <ContentCard>
            <CardHeading>Available Data</CardHeading>
            <StatContainer>
              <StatIcon src='http://lorempixel.com/32/32/technics/' />
              <ItemLink href='#'>
                Company directorships and controlling interests
              </ItemLink>
            </StatContainer>
  
            <StatContainer>
              <StatIcon src='http://lorempixel.com/32/32/technics/' />
              <ItemLink href='#'>
                Company directorships and controlling interests
              </ItemLink>
            </StatContainer>
            <StatContainer>
              <StatIcon src='http://lorempixel.com/32/32/technics/' />
              <ItemLink href='#'>
                Company directorships and controlling interests
              </ItemLink>
            </StatContainer>
            <StatContainer>
              <StatIcon src='http://lorempixel.com/32/32/technics/' />
              <ItemLink href='#'>
                Company directorships and controlling interests
              </ItemLink>
            </StatContainer>
          </ContentCard>
          <StatSection>
            <InfoCard>
              <CardHeading>
                Company directorships and controlling interests
              </CardHeading>
              <StatContainer>
                <StatIcon src='http://lorempixel.com/32/32/technics/' />
                <StatHeading>Alliance Group Limited</StatHeading>
                <StatSubtitle>licensed meat exporters</StatSubtitle>
              </StatContainer>
              <StatContainer>
                <StatIcon src='http://lorempixel.com/32/32/technics/' />
                <StatHeading>Alliance Group Limited</StatHeading>
                <StatSubtitle>licensed meat exporters</StatSubtitle>
              </StatContainer>
            </InfoCard>
            <InfoCard>
              <CardHeading>Stat 2</CardHeading>
            </InfoCard>
  
            <AccountingColumns>
              <InfoCard>
                <CardHeading>Stat 2</CardHeading>
                <Table.Body>
                  <Table.Head>
                    <Table.TextCell flexBasis={240} flexGrow={0}>
                      <strong>Donor</strong>
                    </Table.TextCell>
                    <Table.TextCell rightView>
                      <strong> Flex me col 2</strong>
                    </Table.TextCell>
                 
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.TextCell flexBasis={240} flexGrow={0}>
                        Fixed width
                      </Table.TextCell >
                      <Table.TextCell rightView>Flex me col 2</Table.TextCell>
            
                    </Table.Row>
                  </Table.Body>
                </Table.Body>
              </InfoCard>
              <InfoCard>
                <CardHeading>Stat 2</CardHeading>
                <Table.Body>
                  <Table.Head>
                    <Table.TextCell flexBasis={240} flexGrow={0}>
                      <strong>Donor</strong>
                    </Table.TextCell>
                    <Table.TextCell rightView>
                      <strong> Flex me col 2</strong>
                    </Table.TextCell>
                 
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.TextCell flexBasis={240} flexGrow={0}>
                        Fixed width
                      </Table.TextCell >
                      <Table.TextCell rightView>Flex me col 2</Table.TextCell>
            
                    </Table.Row>
                  </Table.Body>
                </Table.Body>
              </InfoCard>
            </AccountingColumns>
            <InfoCard>
              <CardHeading>Stat 3</CardHeading>
            </InfoCard>
            <InfoCard>
              <CardHeading>Stat 4</CardHeading>
            </InfoCard>
          </StatSection>
        </BodyGrid>
        <ExpensesComponent />
        <CompanyDirectorShip parent={this.props}/>
      </Page>
    )
  }
}
