import React, { useReducer, createContext, useCallback } from 'react';
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

export const NodeContext = createContext();

const AppContext = ({ children }) => {
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

	const value = { nodes, rating };

	return <NodeContext.Provider value={value}>{children}</NodeContext.Provider>;
};
export default AppContext;
