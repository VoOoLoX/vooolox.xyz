import { ParsedUrlQuery } from 'querystring'

export interface PostData {
    slug: string
    title?: string
    date: string
    project?: boolean
    author?: string
    coverImage?: string
    content: string
}

export interface QueryParams extends ParsedUrlQuery {
    slug: string
}