import Head from 'next/head'

const Meta = ({ title, desc }) => (
    <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='color-scheme' content='dark light' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=oLnYMwLPyy" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=oLnYMwLPyy" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=oLnYMwLPyy" />
        <link rel="manifest" href="/site.webmanifest?v=oLnYMwLPyy" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=oLnYMwLPyy" color="#272727" />
        <link rel="shortcut icon" href="/favicon.ico?v=oLnYMwLPyy" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        <meta name='og:title' property='og:title' content={title} />
        <meta name='og:description' property='og:description' content={desc} />

        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={title} />



        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={desc} />
        {/* <meta name='twitter:site' content='@propernounco' />
        <meta name='twitter:creator' content='@propernounco' /> */}

    </Head>
)
export default Meta