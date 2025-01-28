import React from 'react';
import { StylesProvider } from '@material-ui/core';
import { Router, Switch, Route } from 'react-router-dom';
import { createGenerateClassName } from '@material-ui/core/styles';

import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
	productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
	return (
		<>
			<StylesProvider generateClassName={generateClassName}>
				<h1>Hello</h1>
				<Router history={history}>
					<Switch>
						<Route path="/auth/signup">
							<SignUp onSignIn={onSignIn} />
						</Route>
						<Route path="/auth/signin">
							<SignIn onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};
