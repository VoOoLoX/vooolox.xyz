import styles from '@styles/Layout.module.sass'

export default function Layout({ children }): JSX.Element {
    return (
        <div className={styles.layout}>
            <div className={styles.layout_container}>
                {children}
            </div>
        </div>
    )
}