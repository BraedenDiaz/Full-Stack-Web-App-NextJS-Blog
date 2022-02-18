import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
    </Layout>
  )
}