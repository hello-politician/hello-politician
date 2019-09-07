import { useRouter } from 'next/router'
import styled from 'styled-components'
import Page from '../../components/pages'

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

export default function Post () {
  const router = useRouter()

  return (
    <Page>
      <Header>
        <HeaderContainer>
          <PoliticianImage src='http://lorempixel.com/120/120/people/' />
          <PoliticianContainer>
            <NameH1>Legitimate Name</NameH1>
            <PoliticianStatContainer>
            <PoliticianStat>
                <PoliticianStatImage src='http://lorempixel.com/24/24/people/' /> <PoliticianStatText>Labour Party</PoliticianStatText>
            </PoliticianStat>

            <PoliticianStat>
                <PoliticianStatImage src='http://lorempixel.com/24/24/people/' /> <PoliticianStatText>Auckland Central</PoliticianStatText>
            </PoliticianStat>
            <PoliticianStat>
                <PoliticianStatImage src='http://lorempixel.com/24/24/people/' /> <PoliticianStatText>2016 - Present ( 4 years,  12 months )</PoliticianStatText>
            </PoliticianStat>            </PoliticianStatContainer>
          </PoliticianContainer>
        </HeaderContainer>
      </Header>
  
    </Page>
  )
}
