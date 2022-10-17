export default function Loader() {
	return (
		<div id='preload'>
			<div id='preload-content'>
				<div className='preload-spinner'>
					<div className='loading-logo-wraper'>
						<img src='img/logo.png' alt='Loading logo' />
					</div>
					<div className='tp-loader spinner' />
				</div>
			</div>
		</div>
	)
}
