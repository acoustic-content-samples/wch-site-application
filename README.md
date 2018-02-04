# wch-site-application
Source code for the Watson Content Hub starter site application - Oslo. 

## Prerequisites

* A WCH tenant in Trial or Standard Tier
* Node.js v6.11.1 or above
**Note:** We recommend to run npm install after getting the latest from this repository to get the latest prerequisites. 

## Overview
This github repository contains all the source code files like javascript, css and html but not the Oslo artifacts like pages, content types, categories, and content.
WCH tenants created after September 18th 2017 will have the Oslo artifacts automatically deployed. For older tenants you need to manually deploy the artifacts from here: https://greenhouse.lotus.com/plugins/plugincatalog.nsf/assetDetails.xsp?action=editDocument&documentId=B444A62EB5379C988525819C0021A994 
Not sure if you have the Oslo artifacts? 

* Log in to your tenant and go to the Website menu and check if Oslo is rendering in the preview window.
* Check SDK and SPA build levels from the browser
  * Open the dev console
  * Search for 'Build date' to get the current SPA level
  * Search for 'SDK version' to get the SDK version included in the SPA
		
## Documentation
1. [Getting started with the sample site – Oslo](https://developer.ibm.com/customer-engagement/tutorials/getting-started-sample-site-oslo/)
2. [Site structure (Content model-How the sample site is built)](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/content-model-oslo-website/)
3. [Programming Model](/doc/README-programming-model.md)
4. [Watson Content Hub - Sites Development Overview](https://ibm.box.com/s/0od1ta7hsmkxzl2i8y08o06zqwa0pzbq)
5. [Customizing the sample website](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/customizing-sample-site/)
6. [Resources](#resources)

## Updates
At the beginning of February we have updated the Oslo starter site with the following features:
- added inline editing for links
- bug fixes and performance improvements
- also check out our new HTML snippet sample here: 

At the beginning of January we have updated the Oslo starter site with the following features:
- update of Angular to Angular 4.4.6
- Introduced a new search component and added search of pages to the functionality - results are displayed on the new search page
- Introduced the ability to hide pages from the navigation while still available via URL with a new flag that can be set in the page
- Enhanced Inline Editing support

At the beginning of December we have updated the Oslo starter site with the following features:
- Performance improvements
- bug fixes
- Support for Google crawling of a given page in Oslo (more features planned in this area)
- Additional layouts for the Standard page type
- Removal of # from the URLs and now leveraging HTML 5 mode for URLs (i.e. https://myhost/design-topics/clean-design)
- Enablement for Inline Editing in the Sites Composer
- Ability to leverage Angular 5 instead of Angular 4

## Getting set up

From your cli make sure to install project dependencies by running `npm install`

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

## Resources
Find more details on the WCH development environment, technical documentation, sample applications, APIs and other information to jumpstart your development project.
### Tools
* [WCH tools](https://github.com/ibm-wch/wchtools-cli)
* [NodeJS](https://developer.ibm.com/node/sdk/v6/)
### API
* [API Explorer](https://developer.ibm.com/api/view/id-618:title-IBM_Watson_Content_Hub_API)
### Documentation
* [Developer documentation](https://developer.ibm.com/customer-engagement/docs/wch/)
* [Help](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/welcome/dch_welcome.html) 
* [Videos](https://developer.ibm.com/customer-engagement/videos/category/watson-content-hub/)
### Samples
* [WCH samples](https://developer.ibm.com/customer-engagement/watson-content-hub/samples/)
### Support forum
* [dW Answers](https://developer.ibm.com/answers/smart-spaces/301/watson-content-hub.html)

## License

See the included license file [License](LICENSE) .
