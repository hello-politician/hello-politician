import Card from "react-bootstrap/Card";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const MPCard = ({ mp }) => (
    <Card className="m-2">
      <CardGrid>
        <Card.Img src={mp.image ? mp.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"} />
        <Card.Body>
          <h5>{mp.Contact}</h5>
          <p style={{fontSize: 16}}>{mp.Electorate}</p>
          <p style={{fontSize: 16}}>{mp.Party}</p>
        </Card.Body>
      </CardGrid>
    </Card>
);

export default MPCard;
