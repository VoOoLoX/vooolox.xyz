import { useRouter } from 'next/router'

import Link from 'next/link'

import style from './NavbarLink.module.css'

export default function NavbarLink({ href, text }) {
    const router = useRouter()

    //TODO: better path matching
    const activeStyle = {
        fontWeight: router.pathname.split('/')[1] == href.replace('/', '') ? 'bold' : 'initial'
    }

    return (
        <Link href={href} passHref><a className={style.NavbarLink} style={activeStyle}>{text}</a></Link>
    )
}