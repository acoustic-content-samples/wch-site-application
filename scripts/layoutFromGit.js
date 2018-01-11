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

const shell = require('shelljs'),
	fs = require('fs'),
	path = require('path'),
	readline = require('readline'),
	child_process = require('child_process');

const args = process.argv.slice(2);

const getProjectName = (repoUrl) => {
	let index = repoUrl.lastIndexOf('/');
	if (index > -1) {
		return repoUrl.substr(index + 1, repoUrl.length).split('.')[0];
	}
	return null;
};

if (args.length != 1) {
	console.error('Specify the git repository URL to import into the project');
} else {
	const repoUrl = args[0];
	const projectName = getProjectName(repoUrl);
	const projectDir = path.join(__dirname, '..', '..', projectName);
	const srcDir = path.join(__dirname, '..', 'src');

	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	//Inform user that this script will push content to their tenant
	rl.question(`This script will publish content from project ${projectName} to your current tenant,  do you wish to continue? y/n: `, (answer) => {
		if (answer && answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
			console.log(`Checking for project directory ${projectDir}`);

			fs.stat(projectDir, (err, stats) => {
				if (err) {
					console.log(`Project ${projectName} does not exist locally,  cloning ${repoUrl}`);
					shell.exec(`git clone ${repoUrl} ${projectDir}`, (code, stdout, stderr) => {
						deployContent();

					});
				} else {
					console.log(`Project ${projectName} was already cloned`);
					deployContent();
				}
			});

		} else {
			rl.close();
			return;
		}


		const copyFiles = () => {
			console.log(`Copying components from ${projectDir}`);
			shell.cd(__dirname);
			child_process.execFileSync(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'install-layouts-from-folder', projectDir], {stdio: 'inherit'});

		};

		const deployContent = () => {
			//look for content-artifacts directory
			const artifactsDir = path.join(projectDir, 'content-artifacts');
			fs.stat(artifactsDir, (err, stats) => {
				if (err) {
					console.error(`Project ${projectDir} is not an installable layout as it does not contain a content-artifacts directory`);
				} else {
					shell.cd(artifactsDir);
					child_process.execFileSync(/^win/.test(process.platform) ? 'wchtools.cmd' : 'wchtools', ['push', '-A', '-v'], {stdio: 'inherit'});
					copyFiles();
				}
			})
		}

		rl.close();
		return;
	});
}


