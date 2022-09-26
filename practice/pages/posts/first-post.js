import Head from "next/head";
import Link from "next/Link";
import Layout from "../../components/layout";
import { getPhotosFromDB } from "../api/posts";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫 번째 포스트</title>
      </Head>
      <h1>첫 포스트!</h1>
      <h2>
        <Link href="/">
          <a>홈으로 돌아가기</a>
        </Link>
      </h2>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const photos = getPhotosFromDB();
  return {
    props: {
      photos,
    },
  };
};
