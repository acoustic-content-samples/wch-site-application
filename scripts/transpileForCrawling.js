const shell = require('shelljs'),
	fs = require('fs'),
	path = require('path'),
	rimraf = require('rimraf'),
	findFile = require('file-regex'),
	fsExtra = require('fs-extra'),
	exec = require('child_process').exec,
	minifier = require('node-minify');

const assetsDir = path.join(__dirname, '..', 'dist', 'assets');

/*

Angular CLI would not correctly compile the SPA to be crawlable.  This is a workaround for this problem by re-transpiling the main.bundle.

 */

const transpileForCrawling = () => {

	const transpileCommand = (src, dest) => {
		//transpile the copied file back to the original
		const cmd = `tsc --target es5 --skipLibCheck true --allowJs ${dest} --out ${src}`;
		return new Promise((resolve, reject) => {
			exec(cmd, (err, stdout, stderr) => {
				if (err || stderr) {
					resolve(false);
				} else {
					resolve(true);
				}
			})
		})
	};

	findFile(assetsDir, /main.js$/, (err, files) => {
		if (files.length === 1) {
			const mainBundle = files[0];

			const src = path.join(assetsDir, mainBundle.file);
			const dest = path.join(assetsDir, `${mainBundle.file}.original.js`);


      fsExtra.copy(src, dest, function (err) {
				if (err) {
					console.error(' cannot copy "' + src + '": ' + err);
				} else {
					console.log(' successfully copied "' + src + '" to "' + dest + '"');
					transpileCommand(src, dest).then((transpiled) => {
						if(transpiled) {
							minifier.minify({
								compressor: 'uglifyjs',
								input: src,
								output: src,
								callback: (err, min) => {
									if (!err) {
										console.log(`Minified ${dest}`);
										rimraf(dest, (e) => {
											if (e) {
												console.error(`Failed to delete ${dest}`);
											} else {
												console.log(`Deleted temporary file ${dest}`);

											}
										});
									} else {
										console.error(`Minfication for ${dest} failed`);
									}
								}
							});
						} else {
							console.error(`Failed to transpile ${dest}`);
						}
						},
						(err) => {
							console.error(`Transpiling failed: ${err}`);
						})
				}
			});

		}

	});
}


transpileForCrawling();

// "tsc --target es5 --skipLibCheck true --allowJs dist/assets/main_original.bundle.js --out dist/assets/main.js
