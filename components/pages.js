import styled from "styled-components";

const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700,900&display=swap");

  * {
    font-family: "Red Hat Display", sans-serif;
    background-color: #2D3341;
  }

  button {
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Page = ({ children }) => (
  <div>
    <PageContainer>{children}</PageContainer>
  </div>
);

export default Page;
