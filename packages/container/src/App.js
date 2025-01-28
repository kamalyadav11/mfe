import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import { createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header
					onSignOut={() => setIsSignedIn(false)}
					isSignedIn={isSignedIn}
				/>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route path="/auth">
							<AuthApp onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path="/">
							<MarketingApp
								onSignIn={() => setIsSignedIn(true)}
							/>
						</Route>
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	);
};
