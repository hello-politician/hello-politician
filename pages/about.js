import React, { useState, useEffect } from "react";
import Page from "../components/pages";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  height: 10rem;
  text-align: left;

  p {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
  }

  img {
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 32px 0 rgba(255, 255, 255, 0.4);
  }

  iframe {
        padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 32px 0 rgba(255, 255, 255, 0.4);
  }
`;
const MainHero = styled.div`
  width: 100vw;
  height: 15rem;
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
  text-align: left;
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

const TextBlock = styled.div`
margin: 2rem auto;
`;

import Chart from '../assets/Chart.png'
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
      <PageContainer>
        <TextBlock>
          <p>A report from stats.govt.nz measured voter turnout in the 2014 New Zealand General Election and political participation using data from the 2016 General Society Survey. It shows that:</p><br />
          <li>85% of the eligible voting population voted in the 2014 General election</li>

          <li>70% of people aged 18-24 voted, compared with 94% of those aged 65 and over</li>
          <li>54% of non-voters said the reason for not voting was that they were disengaged. This includes people who ‘couldn’t be bothered’ and ‘didn’t get around to it’</li>
          <li>Of those aged 65 years and over, 15% rated their interest in politics as very high, compared with 7% of those aged 15 to 24. </li>
          <li>About 29% of the New Zealand population rated their trust in parliament as low.</li><br /><br />
          <img src={Chart} width="100%"></img>
        </TextBlock>

        <TextBlock>
          <br />
          <p>
            Our team was astonished by this report and with the 2020 election fast approaching, we set out to try to change these statistics. Our mission is to increase the percentage of the population who participate in voting, with a focus on those aged 18-24 and increase the level of engagement and trust in our MP’s. Our aim was to create a tool that would allow users to easily find members of parliament, and to increase transparency surrounding their political behaviours.
        </p>
          <br />
          <p>This map shows the electorates in New Zealand, the Member of Parliament elected for the electorate, and the voter turnout in the 2017 General Election.</p>
          <p><a href="https://elections.nz/democracy-in-nz/historical-events/2017-general-election/voter-turnout-statistics-for-the-2017-general-election">Source: New Zealand Electoral Commission (2017)</a></p>
          <iframe src="https://terrascura.github.io/nz-electorates/" width="100%" height="500px"></iframe>
          <p>
            With this in mind, Hello Politician was born. It was developed during the 2019 GovHack Hackathon, with a team of 8 awesome people, and lives on today at http://www.hellopolitician.com . All data was taken from publicly available resources listed below, and was not cherry picked to present a particular stance or position. Our goal is transparency for the public, not to push a political agenda.
        </p>
          <p>
            <a href="https://www.stats.govt.nz/assets/Reports/Voting-and-political-participation/voting-and-political-participation.pdf">Report source</a>
          </p>
          Dataset Sources
        <br />
          <a href="https://catalogue.data.govt.nz/dataset/members-of-parliament">Members of parliament basic information</a>
          <br />
          <a href="https://www.parliament.nz/en/mps-and-electorates/mps-expenses/">Members of parliament disclosed expenses</a>
          <br />
          <a href="https://www.parliament.nz/media/5566/summary-report-2019-final.pdf">Members of parliament pecuniary interests</a>
          <br />
          <a href="https://elections.nz/democracy-in-nz/historical-events/2017-general-election/candidate-expenses-and-donations-for-the-2017-general-election/">2017 Campaign donations and expenses</a>
          <br />
          <a href="https://infogram.com/election-2017-candidate-donations-1hd12yd9dyyl2km">2017 Campaign individual candidate donations</a>
        </TextBlock>
      </PageContainer>
    </Page>
  );
};

export default About;