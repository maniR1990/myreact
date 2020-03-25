import React from 'react';
import StarRating from './starRating';

const Thumbnail = React.memo(({ item, rating }) => {
	return (
		<section>
			<div className='thumb-nail'>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<p>edit: {item.liked.toString()}</p>
				<StarRating rate={item} edit={item.liked} callBack={rating} />
			</div>
		</section>
	);
});

export default Thumbnail;
