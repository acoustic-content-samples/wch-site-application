# wch-site-application
Source code for the Watson Content Hub starter site application - Oslo. 

## Updates
At the beginning of December we have updated the Oslo starter site with the following features:
- Performance improvements
- bug fixes
- Support for Google crawling of a given page in Oslo (more features planned in this area)
- Additional layouts for the Standard page type
- Removal of # from the URLs and now leveraging HTML 5 mode for URLs (i.e. https://myhost/design-topics/clean-design)
- Enablement for Inline Editing in the Sites Composer
- Ability to leverage Angular 5 instead of Angular 4

At the beginning of January we have updated the Oslo starter site with the following features:
- update of Angular to Angular 4.4.6
- Introduced a new search component and added search of pages to the functionality - results are displayed on the new search page
- Introduced the ability to hide pages from the navigation while still available via URL with a new flag that can be set in the page
- Enhanced Inline Editing support

## Documentation

See this slide deck for an overview on customizing the starter site:

[Watson Content Hub - Sites Development Overview](https://ibm.box.com/s/0od1ta7hsmkxzl2i8y08o06zqwa0pzbq)

Documentation on developerWorks how to customize the sample website or creating your own:

[Developing your own website](http://developer.ibm.com/customer-engagement/docs/developing-your-own-website/)

[Managing a web site in Watson Content Hub](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/admin/website_admin_std.html)

## Programming Model documentation

See details here: [Programming Model documentation](/doc/README-programming-model.md)

## Prerequisites

This github repository contains all the source code file like javascript, css and html but not the Oslo artifacts like pages, content types, categories, and content. WCH tenants created after September 18th 2017 will have the Oslo artifacts automatically deployed. For older tenants you need to manually deploy the artifacts from here: https://greenhouse.lotus.com/plugins/plugincatalog.nsf/assetDetails.xsp?action=editDocument&documentId=B444A62EB5379C988525819C0021A994
Not sure if you have the Oslo artifacts? Log in to the your tenant and go to the Website menu and check if Oslo is rendering in the preview window.

## Getting set up

From you cli make sure to install project dependencies by running `npm install`

### Changing the tenant

You can set the tenant information, by changing the values in `src/app/Constants.ts`.
This file determines from which tenant site and layout information gets served
from.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `assets/` directory. Use the `-prod` flag for a production build.

## Deployment to Watson Content Hub

Run `npm run deploy` to deploy the built code to Watson Content Hub. There is also a shortcut for building and deploying in one step via `npm run build-deploy`. Note that publishing can take up to 20 minutes for all updates to be available.

## Running unit tests and end-to-end tests

See the included detailed documentation on running tests [Running unit tests and end-to-end tests](RunningTest-README.md) .

## Install Sample Site Components

The Oslo site provides scripting to ease the process of importing 3rd party components.  
We have provided a set of sample component repositories:
* [Active Site components: Iframe, Charting Library, Youtube integration](https://github.com/ibm-wch/sample-active-site-components)
* [Sample Article Layout](https://github.com/ibm-wch/sample-article-layouts)

### Structure of Sample Site Components
* At the root of the `sample-active-site-components` project/zip, you can find the `content-artifacts` directory and the `site-application-files` directory.  
* The `content-artifacts` directory contains content/pages required for the components in addition to the layout and layout-mappings files. The directory follows the WCH directory structure. `/catagories` stores assests in "Taxonomies". `/content` stores assests in "Content". `/types` stores content types. `/site` stores Oslo's pages' setting. `/layouts` and `/layout-mappings` store all layout settings created when you run `npm run create-layout`. You could find them in WCH by their "id" or "name" in json files after you deploy them into the tenant.
* The `site-application-files` stores HTML/CSS/TS files needed for the sample components. You can customize the components by editing files in `site-application-files/src/app/layouts/<COMPONENT NAME>`.

### Installation steps
See the readme of sample-active-site-components for details: https://github.com/ibm-wch/sample-active-site-components

## HTML5 style URLs

The SPA will now use HTML5 style URLs and routing. Tenants created before November of 2017 do not leverage the new routing on the server side yet. For those tenants import first the latest Oslo WCh artifacts from here:
https://greenhouse.lotus.com/plugins/plugincatalog.nsf/assetDetails.xsp?action=editDocument&documentId=B444A62EB5379C988525819C0021A994


## Advanced

### Code scaffolding

To use code scaffolding you will want the Angular CLI with this project. To
install it globally run `npm install -g @angular/cli`.

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|module`.

### Checking SDK and SPA build levels from the browser
1. Open the dev console
2. Search for `Build date` to get the current SPA level
3. Search for `SDK version` to get the SDK version included in the SPA

### Enabling logging

The SPA uses the ng2-logger package for logging.  By default logging will be enabled when running locally and disabled when running in production mode on the tenant.  The logging level can be changed by setting a cookie in the browser.
The available log levels are <br />
- info
- warn
- error
- data

Setting the logging level will result in a waterfall effect, for example if setting ```warn``` logging will also be enabled for ```error``` and ```data```.

To change the logging level you can enter the following into the browsers console developer tools<br />
```document.cookie = 'wch.sites.logging.level=warn'```

### Upgrade SPA from Angular 4 to Angular 5
1. If you compiled the SPA locally before, you need to delete existing `node_modules` directory to avoid any version conflicts.
2. In `package.json`, change the following dependencies and devDependencies' value to `"^5.0.0"`:
"@angular/animations", "@angular/common", "@angular/compiler", "@angular/core", "@angular/forms", "@angular/http",  "@angular/platform-browser", "@angular/platform-browser-dynamic", "@angular/router", "@angular/compiler-cli", "@angular/language-service".
3. In `package.json`, change value of "rxjs", "typescript" to "^5.5.2", "~2.4.2"
4. In the root directory of SPA, run `npm install`.

## License

See the included license file [License](LICENSE) .
