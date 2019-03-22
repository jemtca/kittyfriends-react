import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba bw1 b--green bg-lightest-blue'
				type='search'
				placeholder='search kitties'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;