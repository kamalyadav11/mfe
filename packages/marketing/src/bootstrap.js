//Same approach as previous project
import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

//Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});
	if (onNavigate) history.listen(onNavigate);

	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate({ pathname: nextPathName }) {
			const { pathname } = history.location;

			if (pathname !== nextPathName) history.push(location.pathname);
		},
	};
};

//If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	//check if in isolation
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) {
		console.log('Here i am');
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}

//Else call mount from container
export { mount };
