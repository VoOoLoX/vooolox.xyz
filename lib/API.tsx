import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { PostData } from './Post'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): PostData[] {
    const files: string[] = fs.readdirSync(postsDirectory)

    // console.log(files)

    const posts: PostData[] = []

    for (const file of files) {
        const rawData: string = fs.readFileSync(path.join(postsDirectory, file)).toString()

        // console.log(rawData)

        const { data } = matter(rawData)

        // console.log(data)

        posts.push({
            slug: file.replace('.md', ''),
            title: data.title || '',
            date: data.date || '',
            project: data.project || false,
            author: data.author || '',
            coverImage: data.coverImage || ''
        } as PostData)
    }

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): PostData {
    const rawData: string = fs.readFileSync(path.join(postsDirectory, `${slug}.md`)).toString()

    // console.log(rawData)

    const { data, content } = matter(rawData)

    // console.log(data)
    // console.log(content)

    return {
        title: data.title || '',
        date: data.date || '',
        project: data.project || false,
        author: data.author || '',
        coverImage: data.coverImage || '',
        content: content || ''
    } as PostData
}