import React from 'react'
import { Button } from 'react-bootstrap'
import Page from '../components/pages'
import styled from 'styled-components';


const PageContainer = styled.div`
margin: 0 auto;
width: 50rem;
height: 10rem;
text-align: center;
`;

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

    <Button variant='primary'>Primary</Button>
    <Button variant="flat" size="xxl">
    flat button
  </Button>
  </PageContainer>
  </Page>
)

export default Index
