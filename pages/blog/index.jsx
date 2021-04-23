import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

import PostGrid from '@components/PostGrid'
import PostPreview from '@components/PostPreview'

import { getAllPosts } from '@lib/api'

export default function Blog({ posts }) {
	return (
		<Layout>
			<Meta title='Daniel Vulić | Blog' />

			<Navbar />

			<PostGrid>
				{posts.map((post, i) => (
					<PostPreview key={i} href={`/blog/${post.slug}`} coverImage={post.coverImage} title={post.title} author={post.author} date={post.date} />
				))}
			</PostGrid>
		</Layout >
	)
}


export async function getStaticProps({ params }) {
	const posts = getAllPosts(['slug', 'title', 'description', 'author', 'coverImage', 'date'])

	return {
		props: {
			posts
		}
	}
}