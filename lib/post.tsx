import { ParsedUrlQuery } from 'querystring'

export interface PostData {
    slug: string
    content: string
    date: string
    project?: boolean
    title?: string
    coverImage?: string
    author?: string
}

// export type QueryParams = {
//     params: {
//         slug: string
//     }
// }

export interface QueryParams extends ParsedUrlQuery {
    slug: string
}