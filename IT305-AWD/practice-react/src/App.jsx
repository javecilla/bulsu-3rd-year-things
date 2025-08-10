import TextField from '@/components/TextField'
import Button from '@/components/Button'
import List from '@/components/List'

import { useState } from 'react'

function App() {

	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [favoriteColor, setFavoriteColor] = useState('')
	const [favoriteColors, setFavoriteColors] = useState([])

	const handleInput = (e) => {
		e.preventDefault()
		setFavoriteColor(e.target.value)

		setIsError(false)
		setErrorMessage('')
	}

	const handleSubmit = () => {
		favoriteColor.trim()

		if (favoriteColor === '') {
			setIsError(true)
			setErrorMessage('Please enter a color!')
			return
		}

		if (favoriteColors.includes(favoriteColor.toUpperCase())) {
			setIsError(true)
			setErrorMessage('Its already added to your list!')
			return
		}

		setFavoriteColors([...favoriteColors, favoriteColor.toUpperCase()])
		setFavoriteColor('')
	}

	const handleClear = () => {
		if (favoriteColors.length === 0) {
			setIsError(true)
			setErrorMessage('There is nothing to be clear')
			return
		}

		if (confirm('Are you sure you want to clear it all?')) {
			setFavoriteColors([])
			setFavoriteColor('')
		}
	}

	const handleDelete = (color) => {
		setFavoriteColors(favoriteColors.filter((_,index) => index !== color))
	}

	return (
		<>
			<form className="row mb-3">
				<h1>Add your favorite colors: </h1>
				{isError && <p className="text-danger fw-bold">{errorMessage}</p>}

				<div className="col">
					<TextField value={favoriteColor} onChange={handleInput} />
				</div>

				<div className="col">
					<Button
						type="button"
						className="btn-secondary"
						onClick={handleSubmit}
					>
						Submit
					</Button>
					<Button type="button" className="btn-danger mx-1" onClick={handleClear}>
						Clear All
					</Button>
				</div>
			</form>

			<div>
				<List data={favoriteColors} onClick={handleDelete} />
			</div>
		</>
	)
}

export default App
