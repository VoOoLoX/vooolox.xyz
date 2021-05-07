import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import PostPage from '@components/PostPage'

import { getPostBySlug, getAllPosts } from '@lib/API'

import { QueryParams } from '@lib/Post'

export default function BlogPost({ post }) {
	const router = useRouter()

	if (!router.isFallback && !post) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			<Meta title={`Daniel Vulić | ${post.title}`} />
			<Navbar />
			<PostPage post={post} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	var slug: string = ''

	const params = context.params as QueryParams

	if (params)
		({ slug } = params)

	return {
		props: {
			post: await getPostBySlug(slug)
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPosts()

	return {
		paths:
			posts
				.filter(p => p.project != true)
				.map(post => ({ params: { slug: post.slug } })),
		fallback: false
	}
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	var slug: string = ''

// 	const params = context.params as QueryParams

// 	if (params)
// 		({ slug } = params)

// 	const post = getPostBySlug(slug, [
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'content',
// 		'coverImage',
// 	])

// 	const content = post.content || ''

// 	return {
// 		props: {
// 			post: {
// 				...post,
// 				content
// 			} as PostData
// 		}
// 	}
// }