import Link from "next/link";
import { slug } from "../utils";
export default function Post({ post }) {

  return (
    <div className="card">
      <h1 className="banner">{post.name[post.name.length-1].toUpperCase()}</h1>
      <div className="post-date">Created at: {post.created_at.toString()}</div>
      <h3><a href={post.html_url} target="_blank">{post.name.replace("-", " ")}</a></h3>
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
