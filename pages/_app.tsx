import type { AppProps } from 'next/app'

import '@styles/Global.sass'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}