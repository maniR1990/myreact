import React from 'react';
import StarRating from './starRating';

const Thumbnail = ({ item }) => {
	return (
		<section>
			<div className='thumb-nail'>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<p>edit: {item.liked.toString()}</p>
				<StarRating rate={item} edit={item.liked}  />
			</div>
		</section>
	);
};

export default Thumbnail;
