const path = require('path');

module.exports = {
	mode: 'production',
	entry: './html/scripts/App.js',
	output: {
		path: path.resolve(__dirname, 'html/temp'),
		filename: 'App.js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
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