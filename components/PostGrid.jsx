import style from './PostGrid.module.css'

export default function PostGrid({ children }) {
    return (
        <div className={style.PostGrid}>
            <div className={style.Latest}>
                {children[0]}
            </div>
            {children.slice(1)}
        </div>
    )
}