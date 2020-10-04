import Head from 'next/head'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Link href="/forum">
        <a>Forum</a>
      </Link>
    </div>
  )
}
