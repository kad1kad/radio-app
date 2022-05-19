import Head from "next/head";
import Nav from "../components/Nav";
import RadioPlayer from "../components/RadioPlayer";
import requests from "../utils/requests";

export default function Home(data) {
  return (
    <div>
      <Head>
        <title>Listen to the Radio!</title>
        <meta name="description" content="Listen to the Radio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RadioPlayer radio={data} />
      <Nav />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const genre = ctx.query.genre;

  const radioRes = await fetch(
    `https://de1.api.radio-browser.info/json${
      requests[genre]?.url || requests.fetchClassic.url
    }`
  );
  const data = await radioRes.json();

  return {
    props: {
      data,
    },
  };
};
