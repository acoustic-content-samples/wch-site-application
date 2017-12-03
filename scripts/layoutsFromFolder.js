#! /usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const args = process.argv.slice(2);

console.log(`Arguments: ${args}`);

if(args.length < 1 ){
	console.error('Specify the absolute path of directory for your components');
} else {
	const sampleDir = args[0],
		homeDir = path.join(__dirname, '/..'),
		srcDir = path.join(homeDir, 'src', 'app');

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
		// /images
		const imagesDir = path.join(sampleDir, 'site-application-files', 'src', 'images')
		if(fs.existsSync(imagesDir)) {
			console.log(`Copy files from ${imagesDir} to local src`);
			result = shell.cp('-R', path.join(imagesDir, '*'), path.join(srcDir, '/..', 'images'));
			if (result.stderr != null)
			{
				copySuccessed =false;
			}
		}
		// /sample.module.ts
		const sampleModule = path.join(sampleSrcDir, 'sample.module.ts');
		console.log(`Checking for sample module at "${sampleModule}"`);
		if(fs.existsSync(sampleModule)) {
			console.log(`Copy files from ${sampleDir}/sample.module.ts to local src`);
			result = shell.cp('-R', sampleModule, path.join(srcDir, 'sample.module.ts'));
			if (result.stderr != null)
			{
				copySuccessed =false;
			}
		}

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
