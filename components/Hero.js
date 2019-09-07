import styled from 'styled-components'
import {SearchInput } from 'evergreen-ui'
 
const MainHero = styled.div`
width: 100vw;
height: 20rem;
margin-bottom: 5rem;
background-color: #3B4354;
box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);


`

const HeroContainer = styled.div`
position: relative;
margin: 0 auto;
display: block;
top: 2rem;
width: 80rem;
background-color: #3B4354;

`
const HeroText = styled.div`
font-size: 5rem;
font-weight: 700;
background-color: inherit;
text-align: center;
`

const HeroSubtitle = styled.p`
display: block;
margin-top: 0rem;

background-color: inherit;
text-align: center;
`
const SearchContainer = styled.div`
height: 5rem;
width: 60rem;
margin: 4rem auto 0 auto;
background-color: purple;
`



const Hero = () => ( 
    <MainHero>
        <HeroContainer>
    <HeroText>Learn about your politicians.</HeroText>
    <HeroSubtitle>Polly shows you stuff about your politicians  :D</HeroSubtitle>
        </HeroContainer>
        <SearchContainer><SearchInput style={{fontSize: '32px'}} placeholder="Try a name or location" width="100%" height="80px" /></SearchContainer>
</MainHero>

)

export default Hero