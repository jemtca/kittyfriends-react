import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5 ba b--green'>
			<img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt='kitty' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;