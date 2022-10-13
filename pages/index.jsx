export default function Home() {
	return (
		<>
			<style jsx>{`
				.main-bg {
					background-color: #03254b;
				}
			`}</style>
			<div className='main-bg flex flex-col h-screen w-full justify-center items-center'>
				<h1 className='text-main text-6xl font-semibold heavy'>PolyKiosk</h1>
				<p className='text-white mt-6 text-lg'>Instant Virtual Kiosks</p>
			</div>
		</>
	)
}
