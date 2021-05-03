import { Icon } from '@iconify/react'

import youtubeIcon from '@iconify/icons-mdi/youtube'
import githubIcon from '@iconify/icons-mdi/github-circle'
import instagramIcon from '@iconify/icons-mdi/instagram'
import redditIcon from '@iconify/icons-mdi/reddit'

import Link from 'next/link'

import styles from './Home.module.sass'

export default function Home(): JSX.Element {
    const iconSize = 64

    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <h1 className={styles.hello}><span className={styles.wave}>👋</span>Hello there!</h1>

                <h1 className={styles.intro}>I'm <Link href='/about'><span className={styles.name}>Daniel</span></Link> &#123; web &amp; game developer &#125;</h1>

                <Link href='/work'><a className={styles.work}><h1>Check out my work</h1></a></Link>
            </div>
            <div className={styles.right}>
                <Link href='https://www.youtube.com/channel/UCUFVgpl_VNTTahkCtuuaQgA'>
                    <a className={styles.social} target='_blank'><Icon width={iconSize} height={iconSize} icon={youtubeIcon} /></a>
                </Link>
                <Link href='https://www.instagram.com/vooolox/'>
                    <a className={styles.social} target='_blank'><Icon width={iconSize} height={iconSize} icon={instagramIcon} /></a>
                </Link>
                <Link href='https://github.com/vooolox'>
                    <a className={styles.social} target='_blank'><Icon width={iconSize} height={iconSize} icon={githubIcon} /></a>
                </Link>
                <Link href='https://www.reddit.com/user/vooolox'>
                    <a className={styles.social} target='_blank'><Icon width={iconSize} height={iconSize} icon={redditIcon} /></a>
                </Link>
            </div>
        </div>
    )
}