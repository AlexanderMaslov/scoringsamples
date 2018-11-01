const path = require('path');

module.exports = {
	mode: 'production',
	entry: './html/scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'html/temp'),
		filename: 'app.js'
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