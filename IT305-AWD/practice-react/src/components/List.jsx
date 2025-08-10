
function List({ onClick, data }) {
  return (
		<ul className="list-group">
			{data.length === 0 ? (
				<p>No record found.</p>
			) : (
				data.map((item, i) => (
					<li 
						className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
						key={i} 
						onClick={() => onClick(i)}
						style={{ cursor: 'pointer' }}
					>
						{item}
						{/* <span className="text-danger" title="Click to delete">×</span> */}
					</li>
				))
			)}
		</ul>
	)
}

export default List