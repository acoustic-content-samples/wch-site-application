#! /usr/bin/env node

/*******************************************************************************
	* Copyright IBM Corp. 2017
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*******************************************************************************/

const fs = require('fs-extra'),
	path = require('path'),
	replace = require('replace-in-file');


const copy = (filesToCopy) => {

	return new Promise((resolve, reject) => {
		const files = [];
		const copyFiles = (src, dest, excludes, includes, recursive) =>
			fs.readdirSync(src)
				.filter((file) => (!excludes.find((item) => file.match(item))) ? true : false)
				.filter((file) => {
					if (includes) {
						return (includes.find((item) => file.match(item))) ? true : false;
					} else {
						return true;
					}
				})
				.forEach((file) => {
					if(fs.statSync(path.join(src, file)).isDirectory() && recursive){
						return copyFiles(path.join(src, file), path.join(dest, file), excludes, includes, recursive)
					} else {
						return fs.copySync(path.join(src, file), path.join(dest, file))
					}
				});

		filesToCopy.forEach((item) => {
			files.concat(copyFiles(item.src, item.dest, item.exclude || [], item.includes || null, (item.recursive === undefined) ? true : item.recursive));
			console.log(`Copying files config: ${item.src} to ${item.dest}`);
		});
		resolve(files);
	});
};


const replacement = (configSettings) => {
	return new Promise((resolve, reject) => {
		/*
		 Use a more friendly config object and convert to replace-in-file config format

		 */
		configSettings.configs.forEach((config) => {
			let tempConfig = {};
			tempConfig.files = config.files;
			tempConfig.from = [];
			tempConfig.to = [];
			config.replace.forEach((item) => {
				tempConfig.from.push(item.from);
				tempConfig.to.push(item.to);
			});

			replace(tempConfig)
				.then((res) => {
					resolve(res);
				})
				.catch((error) => {
					reject(error);
				})
		});
	});
}

module.exports = {
	copy: copy,
	replace: replacement
}
