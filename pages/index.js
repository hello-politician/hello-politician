import React from 'react'
import Page from '../components/pages'
import styled from 'styled-components'
import MembersOfParliamentButton from '../components/membersOfParliamentButton'
import MPList from '../components/MPList'
import PopulatedMPList from '../components/PopulatedMPList'
import Link from 'next/link'
import Hero from '../components/Hero'

const PageContainer = styled.div`
  margin: 0 auto;
  width: 60rem;
  height: 10rem;
  text-align: center;
`

const PersonCard = props => (
  <li><Link href={`/{$props.name}`}>
    <a>
      <div>card should go here</div>
    </a>
  </Link></li>
)

const Index = () => (
  <Page>
      <Hero />
    <PageContainer>

  

      <PopulatedMPList />
      <MembersOfParliamentButton />
    </PageContainer>
  </Page>
)

export default Index
