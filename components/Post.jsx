import { Icon, InlineIcon } from '@iconify/react'
import calendarIcon from '@iconify/icons-mdi-light/calendar'
import accountIcon from '@iconify/icons-mdi-light/account'

import style from './Post.module.css'

export default function Post({ coverImage, title, date, author, children }) {
    const iconSize = 24
    return (
        <article className={style.Post}>
            <header className={style.PostHeader}>
                <img src={coverImage ? coverImage : `https://via.placeholder.com/1024x1024/202020/5000ff?text=${title}`} />
                <section>
                    <h2>{title}</h2>
                    <h4><InlineIcon width={iconSize} height={iconSize} icon={accountIcon} /> {author}</h4>
                    <h5><InlineIcon width={iconSize} height={iconSize} icon={calendarIcon} /> {date}</h5>
                </section>
            </header>
            <main className={style.PostContent}>
                {children}
            </main>
        </article>
    )
}