export default function GenericButton({ text, action = e => {}, custom = null, ...props }) {
	const standardStyles = 'border-2 border-white border-solid text-white text-xl px-3 py-2 hover:bg-white hover:text-black'

	return (
		<>
			<style jsx>
				{`
					button {
						transition: all 0.5s;
					}
				`}
			</style>
			<button className={custom ? custom : standardStyles} onClick={e => action(e)} {...props}>
				{text}
			</button>
		</>
	)
}
