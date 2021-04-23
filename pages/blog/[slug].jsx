import ReactMarkdown from 'react-markdown'

import gfm from 'remark-gfm'

import ErrorPage from 'next/error'

import { useRouter } from 'next/router'

import SyntaxHighlighter from 'react-syntax-highlighter'

import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { getPostBySlug, getAllPosts } from '@lib/api'

import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

import Post from '@components/Post'

const CodeBlock = ({ language, value }) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language} style={vs2015}>
			{value}
		</SyntaxHighlighter>
	);
};

export default function BlogPost({ post }) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout>
			<Meta title={`Daniel Vulić | ${post.title}`} />
			<Navbar />
			<Post coverImage={post.coverImage} title={post.title} author={post.author} date={post.date}>
				<ReactMarkdown plugins={[gfm]} escapeHtml={true} source={post.content} renderers={{ code: CodeBlock }} />
			</Post>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
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
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				}
			}
		}),
		fallback: false
	}
}