//Same approach as previous project
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//Mount function to start the app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};

//If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	//check if in isolation
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) mount(devRoot);
}

//Else call mount from container
export { mount };
