import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { PostData } from './post'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: any[] = []): PostData {
    const realSlug: string = slug?.replace(/\.md$/, '')
    const fullPath: string = join(postsDirectory, `${realSlug}.md`)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    const post: PostData = { slug: '', content: '', date: '', project: false }

    fields.forEach((field) => {
        if (field === 'slug') {
            post[field] = realSlug
        }
        if (field === 'content') {
            post[field] = content
        }
        if (data[field]) {
            post[field] = data[field]
        }
    })

    return post
}

export function getAllPosts(fields = []): PostData[] {
    const slugs = getPostSlugs()

    const posts = slugs
        .map((slug: string) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}