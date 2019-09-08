import styled from "styled-components";

import Search from "./Search";

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
const SearchContainer = styled.div`
  height: 5rem;
  width: 60rem;
  margin: 4rem auto 0 auto;
  background-color: purple;
`;

const Hero = ({getSearchResults}) => (
  <MainHero>
    <HeroContainer>
      <HeroText>Learn about your politicians.</HeroText>
      <HeroSubtitle>
        🥳 Polly shows you stuff about your politicians 🥳
      </HeroSubtitle>
    </HeroContainer>
    <SearchContainer>
      <Search getSearchResults={getSearchResults} />
    </SearchContainer>
  </MainHero>
);

export default Hero;
