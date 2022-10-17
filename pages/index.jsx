import HomeWrapper from '../src/components/homeWrapper'
import GenericButton from '../src/components/genericButton'

export default function Home() {
	return (
		<HomeWrapper>
			<style jsx>{`
				.main-phrase {
					opacity: 0.9;
					margin-bottom: 30px;
					letter-spacing: -2px;
				}

				@media (min-width: 992px) {
					.main-phrase {
						line-height: 95px;
						letter-spacing: -6px;
						margin-top: 30px;
					}
				}
			`}</style>

			<header className='site-header'>
				<h1 className='site-title mb-4'>
					<img src='img/logo.png' width={100} height={60} alt='Astro into logo' />
				</h1>
			</header>

			<section className='content'>
				<h1 className='main-phrase font-semibold heavy text-5xl md:text-2xl lg:text-9xl text-white text-center'>AstroKiosks</h1>
				<p className='text-white text-center text-xl'>Virtual Payment Kiosks</p>
				<div className='w-full text-center mt-10'>
					<GenericButton text='Signup / Login' />
				</div>
			</section>
		</HomeWrapper>
	)
}
