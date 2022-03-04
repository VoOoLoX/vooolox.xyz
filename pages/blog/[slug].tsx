import React, { lazy, Suspense } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPosts } from '@lib/API'
import { QueryParams } from '@lib/Post'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

const PostPage = lazy(() => import('@components/PostPage'))

function PostPageLoader(): JSX.Element {
	return (<div style={{ height: 'calc(100vh - var(--navbar-height))', display: 'grid', alignItems: 'center' }}>
		<h1 style={{ textAlign: 'center', justifyContent: 'center', fontSize: '5em' }}>Loading...</h1>
	</div>)
}

export default function BlogPost({ post }) {
	const router = useRouter()

	if (!router.isFallback && !post) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			<Meta title={`Daniel Vulić | ${post.title}`} />
			<Navbar />
			<Suspense fallback={PostPageLoader()}>
				<PostPage post={post} />
			</Suspense>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = (context) => {
	var slug: string = ''

	const params = context.params as QueryParams

	if (params)
		({ slug } = params)

	return {
		props: {
			post: getPostBySlug(slug)
		}
	}
}

export const getStaticPaths: GetStaticPaths = () => {
	const posts = getAllPosts()

	return {
		paths:
			posts
				.filter(p => p.project != true)
				.map(post => ({ params: { slug: post.slug } })),
		fallback: false
	}
}