import styled from "styled-components";
import Link from "next/link";
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: #2d3341;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.35);
  margin: 30px 0;

  :hover {
    box-shadow: 2px 2px 32px 0 rgba(0,0,0,0.5);
    transform: translateX(4px);
    transition: all 0.4s ease;
  }
`;

const MPName = styled.h2`
  text-align: left;
  min-width: 380px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
  margin-top: 15px;
  margin-left: 20px;
  @media (max-width: 1024px) {
    min-width: 240px;
    margin-top: 0px;
    margin-left: 5px;
    font-size: 1rem;
  }
`;

const Electorate = styled.h3`
  text-align: left;
  width: 149px;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 21px;
  margin: 0;
  margin-left: 20px;
  @media (max-width: 1024px) {
    margin-left: 5px;
  }
`;

const Party = styled.h3`
  height: 40px;
  width: 100px;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  margin-left: 10px;
  letter-spacing: -0.53px;
  line-height: 21px;
  padding-top: 12px;
  text-align: left;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  @media (max-width: 1024px) {
    min-width: 150px;
  }
`;

const TimeServed = styled.h3`
  width: 100px;
  color: #ffffff;
  text-align: left;
  font-size: 0.8rem;
  letter-spacing: -0.53px;
  line-height: 21px;
  padding-top: 3px;
  margin: 0px;
  margin-left: 10px;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const Icon = styled.div`
  background: ${({ image }) => `url(${image}) no-repeat`};
  background-size: cover;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const CardImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  margin: -8px 0;
`;

const partyLogos = [
  { party: "ACT New Zealand", fileName: "actSmall.jpg" },
  { party: "Green Party", fileName: "greenSmall.jpg" },
  { party: "Labour Party", fileName: "labourFern.svg" },
  { party: "National Party", fileName: "national.jpg" },
  { party: "NZ First", fileName: "nzFirstSmall.png" },
  { party: "Independent", fileName: "independent.png" }
];

const getImageName = arr => str => {
  if (str) {
    const result = arr.find(e => e.party.includes(str));
    return result ? result.fileName : "indepentent.png";
  }
};

const getPartyLogoImageName = getImageName(partyLogos);

const MPCard = ({ mp }) => {
  return (
    <Link href="/p/[id]" as={`/p/${mp.id}`}>
      <a>
        <Card>
          <div>
            <CardImg
              src={
                mp.Contact
                  ? `/static/${mp.Contact.replace(/\s/g, "")}.jpg`
                  : "http://lorempixel.com/120/120/people/"
              }
            />
          </div>
          <div>
            <MPName>{mp.Contact}</MPName>
            <Electorate>{mp.Electorate ? mp.Electorate : "List MP"}</Electorate>
          </div>
          <FlexDiv>
            <Icon image={`/static/images/${getPartyLogoImageName(mp.Party)}`} />
            <Party>{mp.Party}</Party>
          </FlexDiv>
          <FlexDiv>
            <Icon image="/static/images/clock.svg" />
            <TimeServed>
              Date Elected
              <br />
              {mp["date-elected"] ? mp["date-elected"] : "Data unavailable"}
            </TimeServed>
          </FlexDiv>
        </Card>
      </a>
    </Link>
  );
};

export default MPCard;
