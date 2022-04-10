import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react/cjs/react.production.min';
export default function PostPage({data}) {
console.log(data)

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


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'age-colculdator' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const request = {
    link: `https://api.github.com/users/tauseedzaman/repos/${context.slug}`,
    object: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + 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,
      }
    }
  }
  
  console.log(context)
  const res = await fetch(request)
  console.log(res)
  const data = await res.json()

  return {
    props: {
      data:data,
    },
  }
}
