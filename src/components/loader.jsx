export default function Loader() {
	return (
		<>
			<style jsx>{``}</style>
			<div id='preload' className='.preload'>
				<div id='preload-content' className='preload-content'>
					<div className='preload-spinner'>
						<div className='loading-logo-wraper'>
							<img src='img/logo.png' alt='Loading logo' />
						</div>
						<div className='tp-loader spinner' />
					</div>
				</div>
			</div>
		</>
	)
}
