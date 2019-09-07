import { useRouter } from 'next/router';
import styled from 'styled-components'
import Page from '../../components/pages';

const Header = styled.div`
width: 100vw;
height: 200px;
background-color: #3A3E47;
margin: 0;
`

export default function Post() {
  const router = useRouter();

  return (
<Page>
    <Header>

    </Header>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
      </div>
  );
}