import { Icon } from '@iconify/react'

import calendarIcon from '@iconify/icons-mdi/calendar'
import accountIcon from '@iconify/icons-mdi/account'

import Link from 'next/link'

import { PostData } from '@lib/post'

import styles from './PostPreview.module.sass'

type PostPreviewProps = {
    href: string
    post: PostData
}

export default function PostPreview({ href, post }: PostPreviewProps): JSX.Element {
    const iconSize = 24

    return (
        <Link href={href} passHref>
            <article className={styles.post_preview}>
                <img src={post.coverImage ? post.coverImage : `https://via.placeholder.com/512x512/202020/5000ff?text=${post.title}`} />
                <section>
                    <h2>{post.title}</h2>
                    <h4><Icon width={iconSize} height={iconSize} icon={accountIcon} /> {post.author}</h4>
                    <h5><Icon width={iconSize} height={iconSize} icon={calendarIcon} /> {post.date}</h5>
                </section>
            </article>
        </Link>
    )
}