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

const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const unzip = require('unzip');

const args = process.argv.slice(2);

if(args.length != 1 ){
	console.error('Specify the zip path to import into the project');
} else {
	const zipPath = args[0];

	const readZip = (zipPath) =>
	{
		fs.createReadStream(zipPath)
			.pipe(unzip.Parse())
			.on('entry', (entry) => {
				const fileName = entry.path;
				const type = entry.type; // 'Directory' or 'File'


				let index = fileName.indexOf('/src/app/components');
				if(index === -1){
					index = fileName.indexOf('/src/app/layouts');
				}
				if(index === -1){
					index = fileName.indexOf('/src/wchLayouts');
				}
				if(index === -1){
					index = fileName.indexOf('/src/app/sample.module.ts');
				}
				if (index != -1) {
					const outFile = fileName.substr(index);
					let outDir = path.join(__dirname, ...outFile.split('/'));
					console.log('Installed: ' + outDir);
					if(type === 'Directory'){
						if (!fs.existsSync(outDir)){
							fs.mkdirSync(outDir);
						}
					} else if(entry.type === 'File'){
						entry.pipe(fs.createWriteStream(outDir));
					}

				} else {
					entry.autodrain();
				}
			})
			.on('close', () => {
				child_process.execFileSync(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'update-app-module'], {stdio: 'inherit'});
			});
	};

	readZip(zipPath);
}
