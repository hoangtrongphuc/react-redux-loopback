var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js'
	},


	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel',
			include: path.join(__dirname, 'client'),
			query: {
				presets: ['es2015','react']
			}
		},{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
	},

	plugins: [
			new HtmlWebpackPlugin({
	      title: 'React App',
	      filename: 'index.html',
				template: './client/index.html'
	    }),
			new CleanWebpackPlugin(['dist'], {
				root: __dirname,
				verbose: true,
				dry: false
			}),
			new BrowserSyncPlugin({
      host: 'localhost',
      port: 3333,
      server: { baseDir: ['dist'] }
    })]
}

module.exports = config;
