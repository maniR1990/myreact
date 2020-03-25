import React from 'react';
import Thumbnail from './thumbnail';


const ListView = React.memo(({rating, nodes}) => {	
	return (
		
		<div className='list-view'>
			<h3>Node List: ({nodes.length})</h3>
			{nodes.map(item => (				
				<Thumbnail key={item.id} item={item} rating={rating}/>
			))}
		</div>
	);
})

export default ListView;
