import React from 'react'
import Page from '../components/pages'
import styled from 'styled-components';
import MembersOfParliamentButton from '../components/membersOfParliamentButton';
import MPList from '../components/MPList';
import PopulatedMPList from '../components/PopulatedMPList';
import Link from 'next/link'

const PageContainer = styled.div`
margin: 0 auto;
max-width: 60rem;
height: 10rem;
text-align: center;
`;


const PersonCard = props => (
  <li><Link href={`/{$props.name}`}>
    <a>
      <div>card should go here</div>
    </a>
  </Link></li>
)


const Index = () => (
  <Page>
    <PageContainer>
      <h1>Check out your politicians lol</h1>
      <p>waldo gives you all the deets on your politicians.</p>
      <p>lol come see what monies they have, what properties and assets they own and who they owe da monies to</p>
      <p>aaaa</p>

      <div>
        <h2>Helen Clark</h2>
        <p>2014-2018</p>
      </div>
      <div>
        <h2>Helen Clark</h2>
        <p>2014-2018</p>
      </div>
      <button variant='primary'>Primary</button>
      <button variant="flat" size="xxl">
        View Source
  </button>
      <MembersOfParliamentButton />
      <PopulatedMPList />
    </PageContainer>
  </Page>
)

export default Index
