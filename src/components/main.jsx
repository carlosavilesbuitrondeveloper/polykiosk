import Header from './header'
import Footer from './footer'

export default function Main({ children }) {
	return (
		<div className='main-bg flex flex-col h-screen w-full justify-center items-center'>
			<Header />
			<main className='flex-1 flex flex-col justify-center items-center w-full'>{children}</main>
			<Footer />
		</div>
	)
}
