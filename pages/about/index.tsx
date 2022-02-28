import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import About from '@components/About'

export default function Work() {
    return (
        <Layout>
            <Meta title='Daniel Vulić | About' description='Get to know a bit about me and if you want to get in contact with me this is the right place' />
            <Navbar />
            <About />
        </Layout >
    )
}
