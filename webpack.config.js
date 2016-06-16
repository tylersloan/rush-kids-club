module.exports = {
	entry: './index.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}