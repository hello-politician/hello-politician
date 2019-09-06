import Card from "react-bootstrap/Card";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const MPCard = ({ mp }) => (
    <Card className="m-2">
      <CardGrid>
        <Card.Img src={mp.image} />
        <Card.Body>
          <h5>{mp.name}</h5>
          <p style={{fontSize: 16}}>{mp.electorate}</p>
        </Card.Body>
      </CardGrid>
    </Card>
);

export default MPCard;
