import styled from "styled-components";
import Link from "next/link";
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
  top: 1rem;
  width: 100%;
  background-color: #3b4354;

  
`;
const HeroText = styled.div`
  font-size: 5rem;
  font-weight: 700;
  background-color: inherit;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  display: block;
  margin-top: 0rem;
  background-color: inherit;
  text-align: center;
  a:link {
    text-decoration: none;
    color: #ffbefd;
    background-color: #3b4354;
  }
  a:visited {
    text-decoration: none;
    color: #ffbefd;
    background-color: #3b4354;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }

  @media only screen and (max-width: 1280px) { 

font-size: 1rem !important;
margin-top: 1rem;
margin-bottom: 1rem;
line-height: 1;
  }

`;
const SearchContainer = styled.div`
  height: 5rem;
  width: 60rem;
  margin: 2rem auto 0 auto;
  background-color: purple;
  @media only screen and (max-width: 1280px) {
    width: 98vw;
  }
`;

const Hero = ({ getSearchResults }) => (
  <MainHero>
    <HeroContainer>
      <HeroText>Learn about your politicians.</HeroText>
      <HeroSubtitle>
        🤓Hello Politician informs you about your politicians🤓
      </HeroSubtitle>
      <HeroSubtitle>
        Learn more about us <Link href="/about">Here</Link>
      </HeroSubtitle>
    </HeroContainer>

    <SearchContainer>
      <Search getSearchResults={getSearchResults} />
    </SearchContainer>
  </MainHero>
);

export default Hero;
