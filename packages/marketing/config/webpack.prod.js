const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/marketing/latest/', //so that our remoteEntry file will point to the correct entry file inside our bucket
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingIndex': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
