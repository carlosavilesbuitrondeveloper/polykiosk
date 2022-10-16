import { Row, Col } from 'antd'
import Main from '../src/components/main'
import AstroHome from '../src/assets/astro-home-money'

export default function Home() {
	return (
		<>
			<Main>
				<Row gutter={12} className='w-full'>
					<Col xs={24} lg={24} className='flex justify-center items-center flex-col'>
						<AstroHome className='w-2/12' />
						<h1 className='text-white text-6xl font-semibold heavy mt-3'>AstroKiosk</h1>
						<p className='text-white mt-6 text-lg'>Instant Virtual Kiosks</p>
					</Col>
				</Row>
			</Main>
		</>
	)
}
