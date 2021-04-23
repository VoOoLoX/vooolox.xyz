import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Home from '@components/Home'

export default function HomePage(): JSX.Element {
	return (
		<Layout>
			<Meta title='Daniel Vulić' />
			<Navbar />
			<Home />
		</Layout >
	)
}
