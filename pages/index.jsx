import { Row, Col } from 'antd'
import Main from '../src/components/main'
import AstroHome from '../src/assets/astro-home-money'
import Script from 'next/script'

export default function Home() {
	return (
		<>
			<Script id='modernizr' src='/scripts/modernizr.js' />
			<Script id='modernizr' src='/scripts/jquery-1.11.3.min.js' />
			<Script id='modernizr' src='/scripts/plugins.js' />
			<Script id='modernizr' src='/scripts/scripts.js' />
		</>
	)
}
