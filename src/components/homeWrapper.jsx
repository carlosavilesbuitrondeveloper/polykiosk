import Script from 'next/script'
import Loader from './loader'

export default function HomeWrapper({ children }) {
	return (
		<div className='h-screen'>
			<Script id='modernizr' src='/scripts/modernizr.js' />
			<Script id='jquery' strategy='beforeInteractive' src='/scripts/jquery-1.11.3.min.js' />

			<div className='wrap h-full'>
				<div className='inner fade-in h-full'>
					<div id='main' className='h-full flex-1 flex flex-col justify-center items-center'>
						{children}
					</div>
				</div>
			</div>

			<div className='body-bg'></div>

			<Loader />

			<Script id='plugins' src='/scripts/plugins.js' />
			<Script id='custom' src='/scripts/scripts.js' />
		</div>
	)
}
