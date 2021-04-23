import style from './Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={style.Layout}>
            <div className={style.LayoutContainer}>
                {children}
            </div>
        </div>
    )
}