import '../styles/tailwind.css'
import '../styles/slick.min.css'
import '../styles/slick-theme.min.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
export default MyApp
