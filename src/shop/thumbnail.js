import React from 'react';
import StarRating from './starRating';
function Thumbnail() {
    return (
        <div>           
            <StarRating rate={78} edit={true}/>
            <StarRating rate={18}/>
            <StarRating rate={28}/>
            
        </div>
    )
}

export default Thumbnail;