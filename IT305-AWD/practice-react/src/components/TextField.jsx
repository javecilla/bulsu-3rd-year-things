
function TextField({ className, onChange, value }) {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			className={'form-control ' + className}
		/>
	)
}

export default TextField