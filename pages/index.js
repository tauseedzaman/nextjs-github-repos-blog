// import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { slug, sortByDate } from '../utils'

export default function Home({ data }) {
  console.log(data)
  // data.map(repo => (console.log(repo.owner.login)))
  
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className='posts'>
        {/* <img src="https://raw.githubusercontent.com/tauseedzaman/CSS-cursors-with-images/main/Screenshot.png" /> */}
        {data.map((repo) => (
          <Post key={repo.id} post={repo} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/tauseedzaman/repos`)
  const data = await res.json()

  return {
    props: {
      data:data
    },
  }
}

// export async function getStaticProps() {
//   // Get files from the posts dir
//   const files = fs.readdirSync(path.join('posts'))

//   // Get slug and frontmatter from posts
//   const posts = files.map((filename) => {
//     // Create slug
//     const slug = filename.replace('.md', '')

//     // Get frontmatter
//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8'
//     )

//     const { data: frontmatter } = matter(markdownWithMeta)

//     return {
//       slug,
//       frontmatter,
//     }
//   })

//   return {
//     props: {
//       posts: posts.sort(sortByDate),
//     },
//   }
// }

