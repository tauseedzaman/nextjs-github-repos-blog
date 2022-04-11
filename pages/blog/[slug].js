import Link from "next/link";
export default function PostPage({ slug }) {
  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="banner">{slug.name}</h1>
        <h3 className="post-title">
          <a href={slug.html_url} target="_blank" rel="noreferrer">
            {slug.full_name}
          </a>
        </h3>
        <div className="post-date">
          Created_at <span className="text-right">{slug.created_at}</span>
        </div>
        <div className="post-date">
          Updated_at <span className="text-right">{slug.updated_at}</span>
        </div>
        <div className="post-body">
          <table>
            <tbody className="repo__table">
              <tr>
                <td>Clone url</td>
                <td>{slug.clone_url ? slug.clone_url : "Not Avilable"}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  {slug.description
                    ? slug.description
                    : "No Description Found!"}
                </td>
              </tr>
              <tr>
                <td>Default Branch</td>
                <td>{slug.default_branch}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{slug.language}</td>
              </tr>
              <tr>
                <td>Stars</td>
                <td>{slug.stargazers_count}</td>
              </tr>
              <tr>
                <td>Forks</td>
                <td>{slug.forks}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.github_repos_url}${context.params.slug}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        Authorization: "Token " + `${process.env.github_secret}`,
      },
    }
  );
  const slug = await res.json();

  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(process.env.github_url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      Authorization: "Token " + process.env.github_secret,
    },
  });
  const repos = await res.json();

  const names = repos.map((repo) => repo.name);
  const paths = names.map((name) => ({ params: { slug: name.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
