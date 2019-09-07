import { useRouter } from 'next/router';

const MPDetails = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
