import styled from "styled-components";


const TopItem = styled.div`
margin: 0;

`
const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700,900&display=swap");

  * {

    font-family: "Red Hat Display", sans-serif;
    background-color: #2D3341;
    margin: 0;
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
  <TopItem>
    <style jsx global>{`
      body { 
        margin: 0;
        font-family: "Red Hat Display", sans-serif;
      
      }

      * {
        background-color: #2D3341;
        color: white;
      }

      div, h1, {
          background-color: inherit;
      }
    `}</style>

    <script src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    />
    <link href="https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700&display=swap" rel="stylesheet" /> 

    <PageContainer>{children}</PageContainer>
  </TopItem>
)

export default Page;
