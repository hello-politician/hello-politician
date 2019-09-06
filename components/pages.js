import styled from 'styled-components';

const PageContainer = styled.div`

@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700,900&display=swap');

  * {
    font-family: 'Red Hat Display', sans-serif;
  }

button {
    font-weight: bold;
}

  p {
      font-size: 1.5rem;
      font-weight: 500;
  }
  .btn-flat {
    background-color: purple;
    color: white;
  }

  .btn-xxl {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }
`;

const Page = ({ children }) => (
  <div>
    <script src='https://unpkg.com/react/umd/react.production.min.js' />

    <script src='https://unpkg.com/react-dom/umd/react-dom.production.min.js' />

    <script src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    />

    <PageContainer>{children}</PageContainer>
  </div>
)

export default Page
