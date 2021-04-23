import Meta from '@components/Meta'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'

export default function Home() {
	return (
		<Layout>
			<Meta title='Daniel Vulić' />

			<Navbar />
			<h1>I'm <b>Daniel</b> I do a lot of stuff</h1>
		</Layout >
	)
}
