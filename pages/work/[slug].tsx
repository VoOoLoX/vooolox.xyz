import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Post from '@components/Post'

import { getPostBySlug, getAllPosts } from '@lib/api'

import { QueryParams, PostData } from '@lib/post'

export default function ProjectPost({ post }) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			<Meta title={`Daniel Vulić | ${post.title}`} />
			<Navbar />
			<Post post={post} />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	var slug: string = ''

	const params = context.params as QueryParams

	if (params)
		({ slug } = params)

	const post = getPostBySlug(slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'coverImage',
	])

	const content = post.content || ''

	return {
		props: {
			post: {
				...post,
				content
			} as PostData
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getAllPosts(['slug'])

	return {
		paths:
			posts
				.filter(p => p.project == true)
				.map(post => ({ params: { slug: post.slug } })),
		fallback: false
	}
}