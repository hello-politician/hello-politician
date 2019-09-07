import MPCard from "./MPCard";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const MPList = ({ mpList }) => (
  <Container fluid>
    {mpList && mpList.map(mp => <MPCard key={mp.id} mp={mp} />)}
  </Container>
);

export default MPList;
