const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		App: './html/scripts/App.js',
		Vendor: './html/scripts/Vendor.js'
	},
	output: {
		path: path.resolve(__dirname, 'html/temp'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: { "presets": ["@babel/preset-env"] }
					}
				]
			}
		]
	}
};