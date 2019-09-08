import React, { useState, useEffect } from "react";
import Page from "../components/pages";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  height: 10rem;
  text-align: center;
`;
const MainHero = styled.div`
  width: 100vw;
  height: 20rem;
  margin-bottom: 4rem;
  background-color: #3b4354;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
`;
const HeroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: block;
  top: 2rem;
  width: 100%;
  background-color: #3b4354;
`;
const HeroText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  background-color: inherit;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }
`;
const HeroSubtitle = styled.p`
  display: block;
  margin-top: 0rem;
  background-color: inherit;
  text-align: center;
`;

const About = () => {
  return (
    <Page>
      <MainHero>
        <HeroContainer>
          <HeroText>About us</HeroText>
          <HeroSubtitle>
            Why was Hello Politician created?
          </HeroSubtitle>
        </HeroContainer>
      </MainHero>
    </Page>
  );
};

export default About;