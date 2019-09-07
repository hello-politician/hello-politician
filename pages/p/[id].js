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
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 1rem;
`
const PoliticianStat = styled.div`

`

const PoliticianStatImage = styled.img`
height: 100%;
`
const PoliticianStatText = styled.p`

`
const NameH1 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  letter-spacing: -1.33px;
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
                <PoliticianStatImage src='../assets/labour.png' /> <PoliticianStatText>aaaa</PoliticianStatText>
            </PoliticianStat>
            </PoliticianStatContainer>
          </PoliticianContainer>
        </HeaderContainer>
      </Header>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Page>
  )
}
