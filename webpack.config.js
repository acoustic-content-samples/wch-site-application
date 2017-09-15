const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const cssnano = require('cssnano');

const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
const entryPoints = ["inline","polyfills","sw-register","styles","vendor","main"];
const minimizeCss = false;
const baseHref = "";
const deployUrl = "";
const postcssPlugins = function () {
		// safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
		const importantCommentRe = /@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i;
		const minimizeOptions = {
			autoprefixer: false,
			safe: true,
			mergeLonghand: false,
			discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
		};
		return [
			postcssUrl({
				url: (URL) => {
					// Only convert root relative URLs, which CSS-Loader won't process into require().
					if (!URL.startsWith('/') || URL.startsWith('//')) {
						return URL;
					}
					if (deployUrl.match(/:\/\//)) {
						// If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
						return `${deployUrl.replace(/\/$/, '')}${URL}`;
					}
					else if (baseHref.match(/:\/\//)) {
						// If baseHref contains a scheme, include it as is.
						return baseHref.replace(/\/$/, '') +
							`/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
					}
					else {
						// Join together base-href, deploy-url and the original URL.
						// Also dedupe multiple slashes into single ones.
						return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
					}
				}
			}),
			autoprefixer(),
		].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
	};


fsExtra.removeSync('dist');
fsExtra.mkdirsSync('dist/assets/layouts/thumbnails', function(err){
	if (err) {
		console.log("cannot make directory dist/assets/layouts/thumbnails: " + err);
	} else {
		console.log("successfully made dist/assets/layouts/thumbnails");
	}
});


var copyFiles = [
	{src: 'src/favicon.ico', dest: 'dist/assets/favicon.ico'},
	{src: 'src/wchLayouts/layout-mappings', dest: 'dist/layout-mappings'},
	{src: 'src/wchLayouts/layouts', dest: 'dist/layouts'},
	{src: 'src/wchLayouts/assets/layouts/thumbnails', dest: 'dist/assets/layouts/thumbnails'}
];
copyFiles.forEach(function (file) {
  fsExtra.copy(file.src, file.dest, function (err) {
	if (err) {
	  console.error(' cannot copy "' + file.src + '": ' + err);
	} else {
	  console.log(' successfully copied "' + file.src + '" to "' + file.dest + '"');
	}
  });
});


module.exports = {
  "resolve": {
	"extensions": [
		".ts",
		".js",
		".svg"
	],
	"modules": [
	  "./node_modules",
	  "./node_modules"
	]
  },
  "resolveLoader": {
	"modules": [
	  "./node_modules",
	  "./node_modules"
	]
  },
  "entry": {
	"main": [
	  "./src/main.ts"
	],
	"polyfills": [
	  "./src/polyfills.ts"
	]
  },
  "output": {
	"path": path.join(process.cwd(), "dist/assets"),
	"filename": "[name].bundle.js",
	"chunkFilename": "[id].chunk.js"
  },
  "module": {
	"rules": [
	  {
		"enforce": "pre",
		"test": /\.js$/,
		"loader": "source-map-loader",
		"exclude": [
		  /\/node_modules\//
		]
	  },
	  {
		"test": /\.json$/,
		"loader": "json-loader"
	  },
	  {
		"test": /\.html$/,
		"loader": "raw-loader"
	  },
	  {
		"test": /\.(eot)$/,
		"loader": "file-loader?name=[name].[hash:20].[ext]"
	  },
		{
			"test": /\.svg$/,
			"exclude": [/src[\\\/]app[\\\/]components[\\\/]generic[\\\/]carousel[\\\/]images/],
			"loader": 'svg-sprite-loader'
		}, {
			"test": /\.svg$/,
			"include": [/src[\\\/]app[\\\/]components[\\\/]generic[\\\/]carousel[\\\/]images/],
			"loader": 'file-loader'
		},
	  {
		"test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
		"loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
	  },
	  {
		"test": /\.css$/,
		"use": [
		  "exports-loader?module.exports.toString()",
		  {
			"loader": "css-loader",
			"options": {
			  "sourceMap": false,
			  "importLoaders": 1
			}
		  },
		  {
			"loader": "postcss-loader",
			"options": {
			  "ident": "postcss",
			  "plugins": postcssPlugins
			}
		  }
		]
	  },
	  {
		"test": /\.scss$|\.sass$/,
		"use": [
		  "exports-loader?module.exports.toString()",
		  {
			"loader": "css-loader",
			"options": {
			  "sourceMap": false,
			  "importLoaders": 1
			}
		  },
		  {
			"loader": "postcss-loader",
			"options": {
			  "ident": "postcss",
			  "plugins": postcssPlugins
			}
		  },
		  {
			"loader": "sass-loader",
			"options": {
			  "sourceMap": false,
			  "precision": 8,
			  "includePaths": []
			}
		  }
		]
	  },
	  {
		"test": /\.ts$/,
		"loader": "@ngtools/webpack"
	  }
	]
  },
  "plugins": [
		new DefinePlugin({
			version: JSON.stringify((new Date()).toISOString().substr(0,10)),
	  sdkVersion: JSON.stringify(require('./node_modules/ibm-wch-sdk-ng/package.json').version)
		}),
	new NoEmitOnErrorsPlugin(),
	new GlobCopyWebpackPlugin({
	  "patterns": [
		"assets",
		"favicon.ico"
	  ],
	  "globOptions": {
		"cwd": process.cwd() + "/src",
		"dot": true,
		"ignore": "**/.gitkeep"
	  }
	}),
	new ProgressPlugin(),
	new SourceMapDevToolPlugin({
	  "filename": "[file].map[query]",
	  "moduleFilenameTemplate": "[resource-path]",
	  "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
	  "sourceRoot": "webpack:///"
	}),
	new HtmlWebpackPlugin({
	  "template": "./src/index.html",
	  "filename": "./index.html",
	  "hash": false,
	  "inject": true,
	  "compile": true,
	  "minify": false,
	  "cache": true,
	  "showErrors": true,
	  "chunks": "all",
	  "excludeChunks": [],
	  "title": "Webpack App",
	  "xhtml": true,
	  "chunksSortMode": function sort(left, right) {
		let leftIndex = entryPoints.indexOf(left.names[0]);
		let rightindex = entryPoints.indexOf(right.names[0]);
		if (leftIndex > rightindex) {
			return 1;
		}
		else if (leftIndex < rightindex) {
			return -1;
		}
		else {
			return 0;
		}
	}
	}),
	new BaseHrefWebpackPlugin({}),
	new CommonsChunkPlugin({
	  "name": [
		"inline"
	  ],
	  "minChunks": null
	}),
	new CommonsChunkPlugin({
	  "name": [
		"vendor"
	  ],
	  "minChunks": (module) => {
		  return module.resource
			&& (module.resource.startsWith(nodeModules)
			  || module.resource.startsWith(genDirNodeModules)
			  || module.resource.startsWith(realNodeModules));
	  },
	  "chunks": [
		"main"
	  ]
	}),
	new NamedModulesPlugin({}),
	new AotPlugin({
	  "mainPath": "main.ts",
	  "hostReplacementPaths": {
		"environments/environment.ts": "environments/environment.ts"
	  },
	  "exclude": [],
	  "tsConfigPath": "src/tsconfig.app.json",
	  "skipCodeGeneration": true
	})
	, new UglifyJsPlugin({
	 compress: {warnings: false},
	 mangle: {
	   except: ['require']
	 },
	 sourcemap: true
	})
  ],
  "node": {
	"fs": "empty",
	"global": true,
	"crypto": "empty",
	"tls": "empty",
	"net": "empty",
	"process": true,
	"module": false,
	"clearImmediate": false,
	"setImmediate": false
  },
  "devServer": {
	contentBase: path.join(__dirname, 'dist'),
	"historyApiFallback": true,
	"https": false
  }
};
