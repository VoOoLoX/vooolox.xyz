import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Icon } from '@iconify/react'

import calendarIcon from '@iconify/icons-mdi/calendar'
import accountIcon from '@iconify/icons-mdi/account'

import { CodeBlockRenderer, ImageRenderer } from '@lib/Utils'
import { PostData } from '@lib/Post'

import styles from '@styles/Post.module.sass'

type PostProps = {
    post: PostData
}

export default function PostPage({ post }: PostProps): JSX.Element {
    const iconSize = 24

    return (
        <article className={styles.post}>
            <header className={styles.post_header}>
                <Image
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEUgICD////DhhrRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg=='
                    alt={post.title}
                    src={post.coverImage ? post.coverImage : `https://via.placeholder.com/1024x1024/2A4F70/BECBEE?text=${post.title}`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = `https://via.placeholder.com/1024x1024/2A4F70/BECBEE?text=${post.title}`;
                    }}
                />
                <section>
                    <h2>{post.title}</h2>
                    <h4><Icon width={iconSize} height={iconSize} icon={accountIcon} /> {post.author}</h4>
                    <h5><Icon width={iconSize} height={iconSize} icon={calendarIcon} /> {post.date}</h5>
                </section>
            </header>
            <main className={styles.post_content}>
                <ReactMarkdown plugins={[gfm]} escapeHtml={true} source={post.content} renderers={{ code: CodeBlockRenderer, image: ImageRenderer }} />
            </main>
        </article>
    )
}