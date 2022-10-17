import Script from 'next/script'
import Loader from './loader'

export default function HomeWrapper({ children }) {
	return (
		<>
			<style jsx>{`
				.wrap {
					min-height: 100%;
					position: relative;
				}

				.wrap img {
					height: auto;
					max-width: 100%;
				}

				.inner {
					margin: 0 auto;
					padding: 42px 24px;
				}

				#main {
					position: relative;
				}

				#main .inner {
					max-width: 816px;
					padding-bottom: 20px;
					padding-top: 84px;
				}

				.body-bg {
					background: rgba(0, 0, 0, 0.7);
					height: 100%;
					left: 0;
					position: fixed;
					top: 0;
					width: 100%;
					z-index: -1;
				}
			`}</style>
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
		</>
	)
}
