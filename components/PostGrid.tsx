import styles from '@styles/PostGrid.module.sass'

export default function PostGrid({ children }): JSX.Element {
    return (
        <div className={styles.post_grid}>
            <div className={styles.latest}>
                {children[0]}
            </div>
            {children.slice(1)}
        </div>
    )
}