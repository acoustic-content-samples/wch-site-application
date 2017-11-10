# wch-site-application
Source code for the Watson Content Hub sample site single page application - Oslo. 

## Documentation

See the documentation on developer works how to customize the sample website or creating your own:

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

Run `npm run deploy` to deploy the built code to Watson Content Hub. There is also a shortcut for building and deploying in one step via `npm run build-deploy`.

## Running unit tests and end-to-end tests

See the included detailed documentation on running tests [Running unit tests and end-to-end tests](RunningTest-README.md) .

## Install Sample Site Components

* The Oslo site provides scripting to ease the process of importing 3rd party components.  
* In a first step we have provided the sample-active-site-components repository (https://github.com/ibm-wch/sample-active-site-components) that contains Youtube video players and customized Charts and an iframe component.
* In the future we will provide additional components to download.

### Structure of Sample Site Components
* At the root of the `sample-active-site-components` project/zip, you can find the `content-artifacts` directory and the `site-application-files` directory.  
* The `content-artifacts` directory contains content/pages required for the components in addition to the layout and layout-mappings files. The directory follows the WCH directory structure. `/catagories` stores assests in "Taxonomies". `/content` stores assests in "Content". `/types` stores content types. `/site` stores Oslo's pages' setting. `/layouts` and `/layout-mappings` store all layout settings created when you run `npm run create-layout`. You could find them in WCH by their "id" or "name" in json files after you deploy them into the tenant.
* The `site-application-files` stores HTML/CSS/TS files needed for the sample components. You can customize the components by editing files in `site-application-files/src/app/layouts/<COMPONENT NAME>`.

### InStallation steps
1. Download `sample-active-site-components` package and change your directory to the root directory of that project.
2. Go to the components `content-artifacts` directory and run `wchtools push` to deploy these artifacts to your tenant.  
3. Switch back to wch-site-application and run `npm run install-layouts-from-folder <ABSOLUTE PATH OF sample-active-site-components DIRECTORY>` . This script will copy over the content from the `site-application-files` directory and overlay them into the Oslo application. Then it will use ibm-wch-sdk-cli to register the layouts in the Oslo application.

## HTML5 style URLs

The SPA will now use HTML5 style URLs and routing.  However there may be situations where the SPA will need to be reverted to the old hash (#) style.  This is true for tenants created before November of 2017.
To do so the following steps can be taken:

1. In index.html add the following after the title tag:<br  />
`<base href="/">`

2. In app.module.ts:

  A. Add the following import statement:<br  />
  `import {APP_BASE_HREF} from '@angular/common';`
  
  B. Change the following line from:<br  />
  `RouterModule.forRoot(pageRoutes),`<br  />
  to:<br  />
  `RouterModule.forRoot(pageRoutes, {useHash: true}),`
  <br  />

  C. Then locate the `providers` element and add the following element:<br  />
  `{provide: APP_BASE_HREF,useValue: '/'},`

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

## License

See the included license file [License](LICENSE) .
