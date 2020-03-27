# REACT HOOKS: 
## USEREDUCER + USECONTEXT


### # AppContext.js
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
    
### #  index.js


    import React from 'react';
    import ReactDOM from 'react-dom';
    import './App.css';
    import App from './App';
    import AppContext from './AppContext';
    ReactDOM.render(
    	<AppContext>
    		<App />
    	</AppContext>,
    	document.getElementById('root'),
    );
### #     ListView.js


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
	
### # 	thumbnail.js

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
### #     starRating.js


    import React, { useState } from 'react';
    import  {NodeContext}  from './../AppContext';
    
    function StarRating({ rate, edit = true }) {
    	const { rating } = React.useContext(NodeContext);
    
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
    			return rating({...rate, rating:val});
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
    
