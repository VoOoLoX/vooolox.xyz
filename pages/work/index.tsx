import { GetStaticProps } from 'next'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import PostGrid from '@components/PostGrid'
import PostPreview from '@components/PostPreview'

import { getAllPosts } from '@lib/api'
import { PostData } from '@lib/post'

export default function Work({ posts }): JSX.Element {
    return (
        <Layout>
            <Meta title='Daniel Vulić | My work' />

            <Navbar />

            {posts.length > 0 ?
                <PostGrid projects={true}>
                    {posts.map((post: PostData, i: number) => (
                        <PostPreview key={i} href={`/work/${post.slug}`} post={post} />
                    ))}
                </PostGrid>
                :
                <h1 style={{ textAlign: 'center', justifyContent: 'center' }}>🚧 Nothing here, for now 🚧</h1>
            }
        </Layout >
    )
}

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        posts: (await getAllPosts()).filter(p => p.project == true) as PostData[]
    }
})