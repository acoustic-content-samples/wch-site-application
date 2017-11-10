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

#! /usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const args = process.argv.slice(2);

if(args.length != 1 ){
	console.error('Specify the absolute path of directory for your components');
} else {
	const sampleDir = args[0];
	const srcDir = path.join(__dirname, 'src', 'app');

	const copyFiles = () => {
		const sampleSrcDir = path.join(sampleDir, 'site-application-files', 'src', 'app');
		var copySuccessed = true;
		// /components
		console.log(`Copy files from ${sampleSrcDir}/components to local src`);
		var result= shell.cp('-R', path.join(sampleSrcDir, 'components', '*'), path.join(srcDir, 'components'));
		if (result.stderr != null)
		{
			copySuccessed =false;
		}
		// /layouts
		console.log(`Copy files from ${sampleSrcDir}/layouts to local src`);
		result = shell.cp('-R', path.join(sampleSrcDir, 'layouts', '*'), path.join(srcDir, 'layouts'));
		if (result.stderr != null)
		{
			copySuccessed =false;
		}
		// /sample.module.ts
		console.log(`Copy files from ${sampleSrcDir}/sample.module.ts to local src`);
		result = shell.cp('-R', path.join(sampleSrcDir, 'sample.module.ts'), path.join(srcDir, 'sample.module.ts'));

		if (copySuccessed)
		{
			child_process.execFileSync(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'update-app-module'], {stdio: 'inherit'});
			console.log(`Sample content installed`);
		}
		else
		{
			console.log(`Sample content install failed`);
		}

	};

	copyFiles();
}
