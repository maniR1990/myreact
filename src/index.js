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
