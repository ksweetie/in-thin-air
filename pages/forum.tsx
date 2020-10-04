import Head from 'next/head'
import Forum from 'disqplus'

import '@fortawesome/fontawesome-free/js/all'

const container = {
  margin: '0 auto',
  maxWidth: 1240,
}

export default function Home(): JSX.Element {
  return (
    <div style={container}>
      <Head>
        <title>Forum</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,600&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
        <script src="//platform.twitter.com/widgets.js"></script>
      </Head>
      <Forum
        forumName="in-thinair"
        apiKey="E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F"
        link="https://in-thinair.com/2020/10/03/orange-overview-october-3-2020/"
        limit={100}
      />
    </div>
  )
}
