import React, { useState } from 'react';

function StarRating({ rate = 0, edit = true }) {
	const [ratingVal, updateRating] = useState(rate);
	const editFlag = edit;
	const starStyle = {
		'--w': `${ratingVal}%`,
	};
	const trackMouse = e => {
		if (edit) {
			var inputvalue = Math.round(e.pageX - e.target.offsetLeft);
			var val = Math.round((inputvalue * 100) / e.target.offsetWidth);
			updateRating(val);
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
