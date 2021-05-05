import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import About from '@components/About'

export default function Work() {
    return (
        <Layout>
            <Meta title='Daniel Vulić | About' description='A personal portfolio website' />
            <Navbar />
            <About />
        </Layout >
    )
}
