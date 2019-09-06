import MPCard from "./MPCard";
import styled from "styled-components";

const listMPs = [
  {
    id: 1,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 2,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 3,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 4,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  }
];

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const MPList = ({ mpList }) => (
  <Container fluid>
    {listMPs && listMPs.map(mp => <MPCard key={mp.id} mp={mp} />)}
  </Container>
);

export default MPList;
