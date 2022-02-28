import Head from 'next/head'

interface MetaData {
    title: string
    description?: string
    coverImage?: string
}

export default function Meta({ title, description, coverImage }: MetaData): JSX.Element {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='color-scheme' content='dark light' />
            <meta name='theme-color' content='#000000' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />

            <link rel='icon' type='image/svg+xml' sizes='any' href={`/favicon.svg?v=${Math.random().toString(20).substr(2, 8)}`} />
            <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png'></link>
            <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#000000'></link>

            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            coverImage ?
            <meta property="og:image" content={coverImage} /> : <></>
            coverImage ?
            <meta property='og:type' content='article' /> : <meta property='og:type' content='website' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:creator' content='@vooolox' />
        </Head >
    )
}