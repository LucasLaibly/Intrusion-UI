import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

//colors : #6f9eaf(blueish) #a9294f(pink) #c7753d(orange) -> palette 226138
export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    )
  }
  