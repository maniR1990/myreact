import React from 'react';
import Thumbnail from './thumbnail';
import  {NodeContext}  from './../AppContext';

const ListView = () => {
	const { nodes } = React.useContext(NodeContext);
	return (
		<div className='list-view'>
			<h3>Node List: ({nodes.length})</h3>
			{nodes.map(item => (
				<Thumbnail key={item.id} item={item}/>
			))}
		</div>
	);
};

export default ListView;
