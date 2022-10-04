import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

const activeChainId = ChainId[process.env.NEXT_PUBLIC_NETWORK]

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider desiredChainId={activeChainId}>
			<SessionProvider session={pageProps.session} refetchInterval={0}>
				<Component {...pageProps} />
			</SessionProvider>
		</ThirdwebProvider>
	)
}

export default MyApp
