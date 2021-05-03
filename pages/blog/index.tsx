import { GetStaticProps, GetServerSideProps } from 'next'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import PostGrid from '@components/PostGrid'
import PostPreview from '@components/PostPreview'

import { getAllPosts } from '@lib/api'
import { PostData } from '@lib/post'

export default function Blog({ posts }): JSX.Element {
    return (
        <Layout>
            <Meta title='Daniel Vulić | Blog' />

            <Navbar />

            {posts.length > 0 ?
                <PostGrid>
                    {posts.map((post: PostData, i: number) => (
                        <PostPreview key={i} href={`/blog/${post.slug}`} post={post} />
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
        posts: (await getAllPosts()).filter(p => p.project != true) as PostData[]
    }
})

// export const getServerSideProps: GetServerSideProps = async () => ({
//     props: {
//         posts: getAllPosts(['slug', 'title', 'description', 'author', 'coverImage', 'date', 'project'])
//             .filter(p => p.project != true) as PostData[]
//     }
// })