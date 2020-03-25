import React, { useState } from 'react';

function StarRating({ rate, edit = true, callBack }) {

    const [ratingVal, updateRating] = useState(rate.rating*20);   
	const editFlag = edit;
	const starStyle = {
		'--w': `${ratingVal}%`,
	};
	const trackMouse = e => {
		if (edit) {
			var inputvalue = Math.round(e.pageX - e.target.offsetLeft);
			var val = Math.round((inputvalue * 100) / e.target.offsetWidth);
			updateRating(val);
			return callBack({...rate, rating:val});
		}
	};

	const lockTheCursor = e => {
		if (editFlag) {
			edit = !edit;
		}
	};

	return (
		<>
			<div
				className='stars'
				onMouseMove={trackMouse}
				onClick={lockTheCursor}
				style={starStyle}
			></div>
		</>
	);
}

export default StarRating;
