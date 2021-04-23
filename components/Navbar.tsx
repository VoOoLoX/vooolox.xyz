import Link from 'next/link'

import NavbarLink from './NavbarLink'

import styles from './Navbar.module.sass'

export default function Navbar(): JSX.Element {
    return (
        <div className={styles.navbar}>
            <NavbarLink tabIndex={1} href='/' text='Home' />
            <NavbarLink tabIndex={2} href='/work' text='My work' />
            <Link href='/'>
                <svg className={styles.logo} viewBox='0 87 1000 826' width='60' height='60'>
                    <path fill='none' stroke='#ffffff' strokeLinejoin='round' strokeWidth='30' d='M 20 87 H 500 L 620 293.5 L 500 500 L 380 293.5 H 620 L 740 500 H 260 L 500 87 H 980 L 500 913 Z '></path>
                </svg>
            </Link>
            <NavbarLink tabIndex={3} href='/blog' text='Blog' />
            <NavbarLink tabIndex={4} href='/about' text='About' />
        </div>
    )
}