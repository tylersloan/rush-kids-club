module.exports = {
	entry: './index.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	 devtool : 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				include: __dirname,
				query: {
					presets: ['es2015', 'react', 'react-hmre']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
}