import styles from './PostGrid.module.sass'

export default function PostGrid({ projects = false, children }): JSX.Element {
    return (
        <div className={styles.post_grid}>
            {projects ?
                <>
                    {children}
                </>
                :
                <>
                    <div className={styles.latest}>
                        {children[0]}
                    </div>
                    {children.slice(1)}
                </>
            }
        </div>
    )
}