import Link from 'next/link'

import NavbarLink from './NavbarLink'

import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={style.Navbar}>
            <NavbarLink href='/' text='Home' />
            <NavbarLink href='/work' text='My work' />
            <Link href='/'>
                <svg viewBox='0 87 1000 826' width='80' height='80'>
                    <path fill='none' stroke='#ffffff' strokeLinejoin='round' strokeWidth='20' d='M 20 87 H 500 L 620 293.5 L 500 500 L 380 293.5 H 620 L 740 500 H 260 L 500 87 H 980 L 500 913 Z '></path>
                </svg>
            </Link>
            <NavbarLink href='/blog' text='Blog' />
            <NavbarLink href='/about' text='About' />
        </div>
    )
}