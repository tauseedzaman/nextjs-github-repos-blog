import Link from "next/link";
import { slug } from "../utils";
export default function Post({ post }) {
  // data.map(repo => (console.log(repo.owner.login)))
  // data.map(repo => (console.log(repo.language)))
  // data.map(repo => (console.log(repo.url)))
  // data.map(repo => (console.log(repo.description)))
  // data.map(repo => (console.log(repo.created_at)))
  // const postsdata.map(repo => (console.log(repo.name)))

  return (
    <div className="card">
      {/* <img src={post.frontmatter.cover_image} alt='' /> */}
      <h1 className="banner">{post.name[0].toUpperCase()}</h1>

      <div className="post-date">Created at: {post.created_at.toString()}</div>

      <h3>{post.name.replace("-", " ")}</h3>

      <p>
        {post.description
          ? post.description
          : "No description found for this repo"}
      </p>
      <br />
      <Link href={`/blog/${slug(post.name)}`}>
        <a className="btn">Read More</a>
      </Link>
      <a href={post.html_url} className="btn" target="_blank">
        Code
      </a>
    </div>
  );
}

export function date(date) {
  return new Date(date);
}
