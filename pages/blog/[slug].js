import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react/cjs/react.production.min';
export default function PostPage({slug}) {
console.log(slug)

  return (
    <>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        {/* <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <img src={cover_image} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div> */}
      </div>
    </>
  )
}



export const getStaticProps = async (context) => {
  const request = {
    url: `https://api.github.com/users/tauseedzaman/repos/${context.params.slug}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + '*******',
      }
  }
  const res = await fetch(request)
  const slug = await res.json()

  return {
    props: {
      slug,
    },
  }
}
export const getStaticPaths = async () => {
  const request = {
    url: `https://api.github.com/users/tauseedzaman/repos`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + '*******',
    }
  }
  const res = await fetch(`https://api.github.com/users/tauseedzaman/repos`,{ headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + '*******',
}})
console.log(res)

  const repos = await res.json()

  const names = repos.map((repo) => repo.name)
  const paths = names.map((name) => ({ params: { slug: name.toString() } }))

  return {
    paths,
    fallback: false,
  }
}