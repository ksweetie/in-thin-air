import Head from 'next/head'
import Forum from 'disqplus'
import { useRouter } from 'next/dist/client/router'

const container = {
  margin: '0 auto',
  maxWidth: 1240,
}

export default function ForumPage(): JSX.Element {
  const router = useRouter()

  return (
    <div style={container}>
      <Head>
        <title>Forum</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,600&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Forum
        forumName="in-thinair"
        apiKey="E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F"
        link={typeof router.query.link === 'string' ? router.query.link : ''}
        limit={100}
        proxy="https://damp-island-58871.herokuapp.com"
      />
    </div>
  )
}
