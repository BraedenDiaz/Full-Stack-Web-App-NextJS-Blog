import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

// The function below is an example of how to use server-side rendering when we need
// to fetch data at request time instead.
//
// This is not necessary for this blog web app, so we won't be implementing it, but
// the starter code is here as an example.
//
// Because getServerSideProps is called at request time, its parameter (context)
// contains request specific parameters.

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export async function getStaticProps()
{
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A recent Computer Science Alumni Graduate from the University of Utah.</p>
        <p>
          A generalist who is adaptable and proficient in the design and programming of
          software and hardware in a wide variety of areas in Computer Science including
          software development, full stack web development, networking, cybersecurity,
          cloud, databases, distributed systems, computer systems, operating systems,
          computer architecture, and more.
        </p>
        <p>
          (This is a sample website built from the NextJS tutorial located on {' '}
          <a href="https://nextjs.org/learn">the official NextJS website</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}