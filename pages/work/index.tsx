import { GetStaticProps } from 'next'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import PostGrid from '@components/PostGrid'
import PostPreview from '@components/PostPreview'

import { getAllPosts } from '@lib/API'
import { PostData } from '@lib/Post'

export default function Work({ posts }): JSX.Element {
    return (
        <Layout>
            <Meta title='Daniel Vulić | My work' description='You can check out my projects here' />

            <Navbar />

            {posts.length > 0 ?
                <PostGrid>
                    {posts.map((post: PostData, i: number) => (
                        <PostPreview key={i} href={`/work/${post.slug}`} post={post} />
                    ))}
                </PostGrid>
                :
                <div style={{ height: 'calc(100vh - var(--navbar-height))', display: 'grid', alignItems: 'center' }}>
                    <h1 style={{ textAlign: 'center', justifyContent: 'center', fontSize: '5em' }}>🚧 Nothing here, for now 🚧</h1>
                </div>
            }
        </Layout >
    )
}

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        posts: (getAllPosts()).filter(p => p.project == true) as PostData[]
    }
})