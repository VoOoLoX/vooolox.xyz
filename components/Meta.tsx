import Head from 'next/head'

interface MetaData {
    title: string
    description?: string
}

export default function Meta({ title, description }: MetaData): JSX.Element {
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

            <meta name='og:title' property='og:title' content={title} />
            <meta name='og:description' property='og:description' content={description} />

            <meta property='og:type' content='website' />
            <meta property='og:site_name' content={title} />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:creator' content='@vooolox' />
            {/* {post
                ?
                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "##########"
                    },
                    "headline": "${title}",
                    "image": "${coverImage}",
                    "author": {
                        "@type": "Person",
                        "name": "Daniel Vulić"
                    },
                    "datePublished": "${date}"
                }
                `}</script>
                :
                <></>
            } */}
        </Head >
    )
}