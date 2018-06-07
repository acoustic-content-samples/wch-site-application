const fs = require('fs');
const fsExtra = require('fs-extra');
const utils = require('./scripts/buildDateUtils');

fsExtra.mkdirsSync('dist/assets/layouts/thumbnails', function(err){
	if (err) {
		console.log("cannot make directory dist/assets/layouts/thumbnails: " + err);
	} else {
		console.log("successfully made dist/assets/layouts/thumbnails");
	}
});

// fsExtra.mkdirsSync('dist/assets/oob-spa/locales', function(err){
// 	if (err) {
// 		console.log("cannot make directory dist/assets/oob-spa/locales: " + err);
// 	} else {
// 		console.log("successfully made dist/assets/oob-spa/locales");
// 	}
// });

//clear the build date version in environments.ts
utils.clearBuildDate();

/*Write build date into buildDate.json*/
const dateObj = {
  "name": "Oslo",
  "buildDate": new Date().toString()
};
fs.writeFile("dist/assets/buildDate.json", JSON.stringify(dateObj, null, " "), function(error) {
  if(error) {
    return console.log(" cannot create buildDate.json, ", error);
  }

  console.log(" successfully created buildDate.json and copied to dist/assets/buildDate.json");
});



var copyFiles = [
	// {src: 'src/build.js', dest: 'dist/assets/build.js'},
	// {src: 'src/locales', dest: 'dist/assets/oob-spa/locales'},
	// {src: 'src/favicon.ico', dest: 'dist/assets/favicon.ico'},
	{src: 'src/wchLayouts/layout-mappings', dest: 'dist/layout-mappings'},
	{src: 'src/wchLayouts/layouts', dest: 'dist/layouts'},
	{src: 'src/wchLayouts/assets/layouts/thumbnails', dest: 'dist/assets/layouts/thumbnails'},
	{src: 'src/wchLayouts/types', dest: 'dist/types'}



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
