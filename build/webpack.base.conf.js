var path = require('path')
var config = require('../config')
var utils = require('./utils')
const autoprefixer = require('autoprefixer')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

const svgoOptions = {
	plugins: [{
		removeTitle: true
	}, {
		convertPathData: false
	}, {
		removeViewBox: false
	}, {
		removeEmptyAttrs: true
	}]
}

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.scss'],
		fallback: [path.join(__dirname, '../node_modules')],
		modulesDirectories: ['node_modules', 'src/styles'],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'src': path.resolve(__dirname, '../src')
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	module: {
		preLoaders: [
			{
				test: /\.vue$/,
				loader: 'eslint',
				include: projectRoot,
				exclude: /node_modules/
			}, {
				test: /\.js$/,
				loader: 'eslint',
				include: projectRoot,
				exclude: /node_modules/
			}
		],
		loaders: [{
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.js$/,
				loader: 'babel',
				include: projectRoot,
				exclude: /node_modules/
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	imagemin: {
		svgo: svgoOptions
	},
	svgo: svgoOptions,
	sassLoader: {
		includePaths: [path.resolve(__dirname, '../src/styles')]
	},
	url: {
		dataUrlLimit: 2048 // 1kb
	},
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	vue: {
		loaders: utils.cssLoaders({ sourceMap: useCssSourceMap })
	},
	postcss: [
		autoprefixer({
			browsers: ['last 3 versions']
		})
	]
}
