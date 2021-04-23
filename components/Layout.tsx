import styles from './Layout.module.sass'

export default function Layout({ children }): JSX.Element {
    return (
        <div className={styles.layout}>
            <div className={styles.layout_container}>
                {children}
            </div>
        </div>
    )
}