
function Button({ children, className, onClick, type}) {
	return (
		<button type={type} className={'btn ' + className} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button