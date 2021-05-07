import { CSSProperties } from 'react'

import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from '@styles/NavbarLink.module.sass'

interface LinkData {
    href: string
    text: string
    tabIndex?: number
}

export default function NavbarLink({ href, text, tabIndex }: LinkData) {
    const router = useRouter()

    const currentPath = router.pathname.split('/')[1] == href.replace('/', '')

    const activeStyle: CSSProperties = currentPath ? {
        fontWeight: 'bold',
        '--d': '100%'
    } as CSSProperties : {}

    return (
        <Link href={href} passHref><a tabIndex={tabIndex} className={styles.navbar_link} style={activeStyle} data-text={text}>{text}</a></Link>
    )
}