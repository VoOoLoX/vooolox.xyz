import { Icon, InlineIcon } from '@iconify/react'
import calendarIcon from '@iconify/icons-mdi-light/calendar'
import accountIcon from '@iconify/icons-mdi-light/account'

import Link from 'next/link'

import style from './PostPreview.module.css'

export default function PostPreview({ href, coverImage, title, date, author }) {
    const iconSize = 24
    return (
        <Link href={href} passHref>
            <article className={style.PostPreview}>
                <img src={coverImage ? coverImage : `https://via.placeholder.com/512x512/202020/5000ff?text=${title}`} />
                <section>
                    <h2>{title}</h2>
                    <h4><InlineIcon width={iconSize} height={iconSize} icon={accountIcon} /> {author}</h4>
                    <h5><InlineIcon width={iconSize} height={iconSize} icon={calendarIcon} /> {date}</h5>
                </section>
            </article>
        </Link>
    )
}