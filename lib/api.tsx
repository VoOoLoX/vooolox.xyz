// import fs from 'fs'
// import { join } from 'path'
// import matter from 'gray-matter'

// const postsDirectory = join(process.cwd(), 'posts')

// export function getPostSlugs(): string[] {
//     return fs.readdirSync(postsDirectory)
// }

// export function getPostBySlug(slug: string, fields: any[] = []): PostData {
//     const realSlug: string = slug?.replace(/\.md$/, '')
//     const fullPath: string = join(postsDirectory, `${realSlug}.md`)
//     const fileContents: string = fs.readFileSync(fullPath, 'utf8')

//     const { data, content } = matter(fileContents)

//     const post: PostData = { slug: '', content: '', date: '', project: false }

//     fields.forEach((field) => {
//         if (field === 'slug') {
//             post[field] = realSlug
//         }
//         if (field === 'content') {
//             post[field] = content
//         }
//         if (data[field]) {
//             post[field] = data[field]
//         }
//     })

//     return post
// }

// export function getAllPosts(fields = []): PostData[] {
//     const slugs = getPostSlugs()

//     const posts = slugs
//         .map((slug: string) => getPostBySlug(slug, fields))
//         .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

//     return posts
// }

import { PostData } from './Post'

import matter from 'gray-matter'

export async function getAllPosts(): Promise<PostData[]> {
    const context = require.context('../posts', false, /\.md$/)

    const posts: PostData[] = []

    for (const key of context.keys()) {
        const post = key.slice(2)

        const rawData = await import(`../posts/${post}`)

        const { data } = matter(rawData.default)

        posts.push({
            slug: post.replace('.md', ''),
            title: data.title || '',
            date: data.date || '',
            project: data.project || false,
            author: data.author || '',
            coverImage: data.coverImage || ''
        } as PostData)
    }

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<PostData> {
    const rawData = await import(`../posts/${slug}.md`)

    const { data, content } = matter(rawData.default)

    return {
        title: data.title || '',
        date: data.date || '',
        project: data.project || false,
        author: data.author || '',
        coverImage: data.coverImage || '',
        content: content || ''
    } as PostData
}