const replace = require('replace-in-file');

const envFile = "src/environments/environment.prod.ts";


	const setBuildDate = (file) => {
		file = file || envFile;
		const options = {
			files: file,
			from: /version: '(.*)'/g,
			to: "version: '" + new Date().toString() + "'",
			allowEmptyPaths: false,
		};

		try {
			let changedFiles = replace.sync(options);
			if (changedFiles == 0) {
				console.error("Build date was not set");
			}
		}
		catch (error) {
			console.error('Error occurred:', error);
			throw error
		}
	}

	const clearBuildDate = (file) => {
		const options = {
			files: file || envFile,
			from: /version: '(.*)'/g,
			to: "version: ''",
			allowEmptyPaths: false,
		};

		try {
			let changedFiles = replace.sync(options);
			if (changedFiles == 0) {
				console.error("Build date was not reset");
			}
		}
		catch (error) {
			console.error('Error occurred:', error);
		}
	}


module.exports = {
		setBuildDate: setBuildDate,
		clearBuildDate: clearBuildDate
}

