import Card from "react-bootstrap/Card";
import styled from "styled-components";
import MPImage from './MPImage'
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const MPCard = ({ mp }) => (
    <Card className="m-2">
      <CardGrid>
        <MPImage mpName={mp.Contact} />
        <Card.Body>
          <h5>{mp.Contact}</h5>
          <p style={{fontSize: 16}}>{mp.Electorate}</p>
          <p style={{fontSize: 16}}>{mp.Party}</p>
        </Card.Body>
      </CardGrid>
    </Card>
);

export default MPCard;
