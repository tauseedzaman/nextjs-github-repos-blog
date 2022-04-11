import Head from "next/head";
import Post from "../components/Post";

export default function Home({ data }) {

  return (
    <div>
      <Head>
        <title>{data[0].owner.login}</title>
      </Head>
      <div className="posts">
        {data.map((repo) => (
          <Post key={repo.id} post={repo} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.github_url, {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      "Authorization": "Token " + process.env.github_secret,
    },
  });
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
