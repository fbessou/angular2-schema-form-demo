var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
const METADATA = {
	title: "Angular2 Schema Form",
	baseUrl: "/"
};

module.exports = {
	metadata:METADATA,
	context: path.join(__dirname, '.'),
	entry: {
		"vendor":path.resolve("./src/vendor.js"),
		"polyfills":path.resolve("./src/polyfills.js"),
		"demo": path.resolve("./src/main.browser.ts")
	},
	output: {
		path: path.resolve("./dist"),
		filename: "[name].bundle.js"
	},
	resolve: {
		extensions: ["", ".ts",".js"]
	},
	debug:true,
	devtool: 'cheap-module-source-map',
	module:{

		preLoaders: [
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					path.resolve('node_modules/rxjs'),
					path.resolve('node_modules/@angular'),
				]
			}
		],

		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: "./node_modules"
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader'
		},{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude:[path.resolve("src/index.html")]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			chunksSortMode: 'dependency'
		}),
		new CopyWebpackPlugin([{from: "src/public/"}]),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['demo', 'vendor',"polyfills"]
		})
	],
	devServer: {
		port : 3002
	},
	node: {
		global: 'window',
		crypto: 'empty',
		process: true,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}

}
