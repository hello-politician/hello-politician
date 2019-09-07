import { useRouter } from "next/router";

const MPDetails = () => {
  const router = useRouter();

  return <h1>{router.query.id}</h1>;
};

export default MPDetails