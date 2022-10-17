import HomeWrapper from '../src/components/homeWrapper'

export default function Home() {
	return (
		<HomeWrapper>
			<header className='site-header'>
				<h1 className='site-title mb-4'>
					<img src='img/logo.png' width={100} height={60} alt='InTime' />
				</h1>
			</header>

			<section className='content'>
				<h1 className='main-phrase'>AstroKiosks</h1>
				<p className='subtitle text-white'>Please enter your email below and we'll let you know once we're up and running.</p>
			</section>
		</HomeWrapper>
	)
}
