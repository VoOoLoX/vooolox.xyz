import Layout from "@components/Layout";
import Meta from "@components/Meta";
import Navbar from "@components/Navbar";

export default function Custom404(): JSX.Element {
    return (
        <Layout>
            <Meta title='Daniel Vulić | Page not found' description='Oops' />
            <Navbar />
            <div style={{ height: 'calc(100vh - var(--navbar-height))', display: 'grid', alignItems: 'center' }}>
                <div>
                    <h1 style={{ textAlign: 'center', justifyContent: 'center', fontSize: '5em' }}>🚧 404 🚧</h1>
                    <h1 style={{ textAlign: 'center', justifyContent: 'center' }}>Sorry, we can't find what you're looking for</h1>
                </div>
            </div>
        </Layout >
    )
}