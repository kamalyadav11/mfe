import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import { createGenerateClassName } from '@material-ui/core/styles';

import { MarketingApp } from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header />
				<MarketingApp />
			</StylesProvider>
		</BrowserRouter>
	);
};
