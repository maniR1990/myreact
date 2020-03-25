import React, { useReducer, useCallback } from 'react';
import ListView from './shop/listView';
import NodeList from './shop/InititalState';

const NODE_RATING = 'NODE_RATING';
const reducer = (state, action) => {
	switch (action.type) {
		case NODE_RATING:
			return state.map(node => {
				if (node.id === action.payload.id) {
					return { ...node, rating: action.payload.rating };
				}
				return node;
			});

		default:
			break;
	}
	return state;
};

function App() {
	const [nodes, dispatch] = useReducer(reducer, NodeList);	
	const rating = useCallback(
		node => {
			dispatch({
				type: NODE_RATING,
				payload: {
					...node,
				},
			});
		},
		[dispatch],
	);
	return (
		<div className='App'>
			<ListView rating={rating} nodes={nodes} />
		</div>
	);
}

export default App;
