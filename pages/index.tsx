import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'

interface GoProps {
  host: string
}

const Go: NextPage<GoProps> = ({ host }) => {
  const parts = host.split('.')
  parts.pop() // .fyi
  parts.pop() // stupid

  if (parts[0]) {
    parts[0] = parts[0].substr(0, 1).toUpperCase() + parts[0].substr(1)
  }

  const msg = `${parts.join(' ')} stupid FYI`

  return (
    <>
      <Head>
        <title>{msg}</title>
        <meta property="og:description" content={msg} />
      </Head>
      <span>
        <h1 style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          {msg}
        </h1>
      </span>
    </>
  )
}

export async function getServerSideProps (context: NextPageContext) {
  return {
    props: {
      host: context.req.headers.host
    }
  }
}

export default Go
