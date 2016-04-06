"use strict";
const path = require("path");
const webpack = require('webpack');

module.exports = {
	entry: [
		"webpack/hot/dev-server",
		"webpack-dev-server/client?http://0.0.0.0:3000",
		path.resolve(__dirname, "app/app.js")
	],

	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.js"
	},

	modulesDirectories: [
		"node_modules"
	],

	watchOptions: {
		poll: 1000,
		aggregateTimeout: 1000
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ "react-hot", "babel" ]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					"isomorphic-style-loader",
					"css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]",
					"postcss-loader"
				]
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: "url?limit=25000"
			}
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
