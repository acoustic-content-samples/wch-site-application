# wch-site-application

Source code for the Watson Content Hub starter site application - Oslo.

## Prerequisites

-   A WCH tenant in Trial or Standard Tier
-   Node.js v8.10.0 or above
    **Note:** We recommend to run npm install after getting the latest from this repository to get the latest prerequisites.

## Overview

This github repository contains all the source code files like javascript, css and html but not the Oslo artifacts like pages, content types, categories, and content.
WCH tenants created after September 18th 2017 will have the Oslo artifacts automatically deployed. For older tenants you need to manually deploy the artifacts by downloading the Oslo built artifacts from the home page of your tenant from the "Update the sample site" widget.
Not sure if you have the Oslo artifacts?

-   Log in to your tenant and go to the Website menu and check if Oslo is rendering in the preview window.
-   Check SDK and SPA build levels from the browser
    -   Open the dev console
    -   Search for 'Build date' to get the current SPA level
    -   Search for 'SDK version' to get the SDK version included in the SPA

You can compare the Build date with the date shown in the "Update the sample site" widget on the Home page to see if your deployed sample is older than the latest sample code.
Instructions on how to update Oslo to the latest can be found here: [Updating your Oslo sample](https://developer.ibm.com/customer-engagement/tutorials/updating-oslo-sample/).
  
## Documentation
1. [Roadmap for developing your own site](https://developer.ibm.com/customer-engagement/tutorials/roadmap-developing-your-own-website/#tocoverview)
2. [Site structure (Content model-How the sample site is built)](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/content-model-oslo-website/)
3. [Programming Model](/doc/README-programming-model.md)
4. [Watson Content Hub - Sites Development Overview](https://ibm.box.com/s/0od1ta7hsmkxzl2i8y08o06zqwa0pzbq)
5. [Customizing the sample website](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/customizing-sample-site/)
6. [Resources](#resources)
7. [Updating your Oslo sample](https://developer.ibm.com/customer-engagement/tutorials/updating-oslo-sample/)

## Updates
At the beginning of January we have updated the Oslo starter site with the following features:
- Various bug fixes and updates of underlying used packages

At the beginning of December we have updated the Oslo starter site with the following features:

-   Included the new All Types page that allows any reference type to be used.
-   The Standard page was updated to only allow a limited set of types to be used on it.

At the end of October we have updated the Oslo starter site with the following features:

-   Support for multiple sites
-   Support for templates
- Added placeholders for images

At the beginning of September we have updated the Oslo starter site with the following features:
- Transitioned some content types to custom elements. For more information see: https://www.ibm.com/support/knowledgecenter/en/SS3UMF/wch_q_a_watson_assistant/content_types.html#concept_km5_qd3_4cb
- Added text placeholders
- Included the component gallery developer tool

At the beginning of August we have updated the Oslo starter site with the following features:
- Moved shared utilities that would not typically be updated from Oslo to https://www.npmjs.com/package/@ibm-wch/components-ng-shared-utilities
- Moved components like embed-code that would not typically be updated from Oslo to https://www.npmjs.com/package/@ibm-wch/components-ng-shared-components

At the beginning of June we have updated the Oslo starter site with the following features:
- Upgrade to Angular 6.0

At the end of May we have updated the Oslo starter site with the following features:
- Added landing page / micro web site support
- Support for manifests and shipping out of the box manifest files to either delete Oslo completely or remove the sample pages and content
- Performance improvements

At the end of April we have updated the Oslo starter site with the following features:
- Added login and logout and the support for secured content and pages. If a page or content is marked secured 
you can only see it when being logged in.
- Added the HTML Edit functionality out of the box (formerly called sample-html-snippet)
- Preparing the new landing page functionality

At the end of March we have updated the Oslo starter site with the following features:
- performance improvements - reducing the size of the generated scripts
- Added support for script applications

At the end of February we have updated the Oslo starter site with the following features:
- upgrade to Angular 5.2
- leveraging ng build versus separate webpack
- bug fixes and performance improvements

At the beginning of February we have updated the Oslo starter site with the following features:
- added inline editing for links
- bug fixes and performance improvements
- also check out our new HTML snippet sample here: https://github.com/ibm-wch/sample-html-snippet

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

Inside `src/app/Constants.ts`, uncomment these three lines and replace the values:

```
// static readonly DOMAIN_NAME = 'your-domain-name.com';
// static readonly CONTENT_HUB_ID = '0000000-0000-0000-0000-000000000000';
// static readonly SITE_ID = '00000000-0000-0000-0000-000000000000';
```

-   The domain name can be extracted from the delivery URL of your site (see steps below). (e.g. https://**\<domain-name\>\*\*/\<content-hub-id\>/dxsites/\<site-id\>/)
-   The Content Hub ID can be retrieved from the Hub information dialog.
    1. Log in to your Watson Content Hub and hover over the 'About' tab.
    2. Click the 'Hub information option'.
    3. Copy the Content Hub ID from the modal.
-   The site ID can be extracted from the delivery URL of your site (see steps below). (e.g. https://\<domain-name\>/\<content-hub-id\>/dxsites/**\<site-id\>**/)
    -   Note: the ID of the 'Oslo' out-of-the-box site is 'default'

Steps to retrieve the delivery URL for a site:

1. Log in to your Watson Content Hub and navigate to the Websites tab.
2. Click the arrow button on your site to flip over the card.
3. Copy the delivery URL on the back of the card.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

Use the `npm run start-dev-tools` command to load the developer tools UI. Read more [here](https://www.npmjs.com/package/wch-site-developer-tools).

![developer tools UI](/doc/images/componentGallery.png)

## Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `assets/` directory. Use the `-prod` flag for a production build.

## Deployment to Watson Content Hub

Run `npm run deploy` to deploy the built code to Watson Content Hub. There is also a shortcut for building and deploying in one step via `npm run build-deploy`. Note that publishing can take up to 20 minutes for all updates to be available.
In case you do not want to wait for the server side akamai cache to time out you can flush the cache via:
wchtools clear --cache
More information can be found here: [Clearing the content delivery network cache](https://github.com/ibm-wch/wchtools-cli#clearing-the-watson-content-hub-content-delivery-network-cache)

## Running unit tests and end-to-end tests

See the included detailed documentation on running tests [Running unit tests and end-to-end tests](RunningTest-README.md) .

## Install Sample Site Components

The Oslo site provides scripting to ease the process of importing 3rd party components.  
We have provided a set of sample component repositories:

-   [Active Site components: Iframe, Charting Library, Youtube integration](https://github.com/ibm-wch/sample-active-site-components)
-   [Sample Article Layout](https://github.com/ibm-wch/sample-article-layouts)

### Structure of Sample Site Components

-   At the root of the `sample-active-site-components` project/zip, you can find the `content-artifacts` directory and the `site-application-files` directory.
-   The `content-artifacts` directory contains content/pages required for the components in addition to the layout and layout-mappings files. The directory follows the WCH directory structure. `/catagories` stores assests in "Taxonomies". `/content` stores assests in "Content". `/types` stores content types. `/site` stores Oslo's pages' setting. `/layouts` and `/layout-mappings` store all layout settings created when you run `npm run create-layout`. You could find them in WCH by their "id" or "name" in json files after you deploy them into the tenant.
-   The `site-application-files` stores HTML/CSS/TS files needed for the sample components. You can customize the components by editing files in `site-application-files/src/app/layouts/<COMPONENT NAME>`.

### Installation steps

See the readme of sample-active-site-components for details: https://github.com/ibm-wch/sample-active-site-components

## HTML5 style URLs

The SPA will now use HTML5 style URLs and routing.

## Advanced

### Code scaffolding

To use code scaffolding you will want the Angular CLI with this project. To
install it globally run `npm install -g @angular/cli`.

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|module`.

### Enabling logging

The SPA uses the ng2-logger package for logging. By default logging will be enabled when running locally and disabled when running in production mode on the tenant. The logging level can be changed by setting a cookie in the browser.
The available log levels are <br />

-   info
-   warn
-   error
-   data

Setting the logging level will result in a waterfall effect, for example if setting `warn` logging will also be enabled for `error` and `data`.

To change the logging level you can enter the following into the browsers console developer tools<br />
`document.cookie = 'wch.sites.logging.level=warn'`

## Manage your Oslo starter site template with a manifest

-   Prerequisites: wchtools >= 2.7.1

To make it easier to remove the default Oslo site either completely or just the out of the box images, content, pages and assets, we created two sample manifest files, `oslo-complete.json` and `oslo-sample-artifacts.json` for the Oslo site. With these two manifest files, you can easily push and delete your Oslo contents listed in the manifest file with wchtools.

-   `oslo-complete.json` contains all Oslo code (web assets) and sample site content.
-   `oslo-sample-artifacts.json` is a subset of oslo-complete.json. This manifest contains only the site assets, renditions, contents and pages. The manifest does not contain the source code, layouts, layout-mappings, content types, image-profiles, categories, and basic rendering functions.
-   `oslo-minimum.json` contains minimum reusable artifacts that can be used to create your own SPA site. This manifest contains only source code, layouts, layout-mappings, content types, image-profiles, categories, generic components (header and footer), and generic page (404 error page)

To push, pull, and delete content by manifest, please refer to: https://github.com/ibm-wch/wchtools-cli#pushing-pulling-and-deleting-by-manifest

If you want to start with a new site skeleton without all of the Oslo artifacts that are not required you can delete the extra artifacts with the `oslo-sample-artifacts` manifest. The deletion will not remove referenced items in Oslo that are not part of the manifest. So, if you created content or other items that are using Oslo content types, content, or assets, these will not be removed by the delete command.

Note: Since the sample manifest files only work for the default Oslo starter site template, if you add new content to your site, you have to create your own manifest files. Details: https://github.com/ibm-wch/wchtools-cli#creating-a-new-manifest

### Use cases

##### You would like to clean out all sample images, renditions, content, and pages associated with Oslo, but leave Oslo layouts, content types and categories so that you can use these to build your custom site. This will leave any additional items that you may have created.

-   `wchtools delete -A -v --server-manifest oslo-sample-artifacts`

##### You would like to clean out all artifacts associated with Oslo, but leave any items that you have created. Delete all Oslo artifacts in your tenant:

-   `wchtools delete -A -v --server-manifest oslo-complete`

##### You would like to update the complete Oslo manifest to include additional items that you created. Update `oslo-complete.json` after adding your customized content in your tenant:

-   `wchtools pull -A -v`
-   `wchtools list -A --write-manifest oslo-complete`
-   `wchtools push -w -v -f --path /dxconfig/manifests/`

##### You would like to create your own SPA site with reusable artifacts from Oslo :

-   See section [Create your own SPA site based on Oslo minimum template](#create-your-own-spa-site-based-on-oslo-minimum-template)

## Create your own SPA site based on Oslo minimum template

-   Prerequisites: wchtools >= 2.7.1

1. Download the latest Oslo sample site artifacts from "Update the sample site" widget in your WCH homepage
2. Unzip the package you downloaded and use your command line tool to change directory to this unzipped folder
3. Configure your tenant information by running `wchtools init`
4. Push Oslo minimum template to your tenant by running `wchtools push -A -v -f --manifest oslo-minimum`
5. Open the live site of your tenant, you will see a starter site with only minimum reusable artifacts. Follow the instruction in the page to create your own content and page for your SPA site.

Note: If you have older site in your tenant, you have to delete it first before pushing the Oslo minimum template. `wchtools delete -A -v --all` would be helpful if you want to clean up your tenant.

## Add and configure custom site styles

Different styles can be applied to the application, depending on which site is loaded.
To configure your site with custom styles, follow these following steps:

1. Go to the `src/oob-spa/styles` directory.
2. In that directory, add a new `.scss` file, where the file name matches the site ID that you want to customize (e.g. `<site-id>.scss`).
3. Add your custom styles to the newly created `.scss` file.
4. In the `angular.json` file at the root directory, update the `styles` property, adding your new style as an object with these properties and values:

```
{
  ...
  "projects":{
    "wch-site-application": {
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              "src/styles.css",
              // start new style configuration
              {
                "input": "src/oob-spa/styles/<site-id>.scss",
                "lazy": true,
                "bundleName": "oob-spa/styles/<site-id>"
              }
              // end new style configuration
            ],
            ...
          },
          ...
        },
        ...
      },
      ...
    },
    ...
  },
  ...
}
```

That's it! Now, any styles that are added to `<site-id>.scss` will be applied to the SPA, when rendering the site with a matching ID. You can preview your style changes by running `npm start` to view the preview server. When ready, you can deploy the changes to the tenant by running `npm run build-deploy`

## Resources

Find more details on the WCH development environment, technical documentation, sample applications, APIs and other information to jumpstart your development project.

### Tools

-   [WCH tools](https://github.com/ibm-wch/wchtools-cli)
-   [NodeJS](https://developer.ibm.com/node/sdk/v6/)

### API

-   [API Explorer](https://developer.ibm.com/api/view/id-618:title-IBM_Watson_Content_Hub_API)

### Documentation

-   [Developer documentation](https://developer.ibm.com/customer-engagement/docs/wch/)
-   [Help](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/welcome/dch_welcome.html)
-   [Videos](https://developer.ibm.com/customer-engagement/videos/category/watson-content-hub/)

### Samples

-   [WCH samples](https://developer.ibm.com/customer-engagement/watson-content-hub/samples/)

### Support forum

-   [dW Answers](https://developer.ibm.com/answers/smart-spaces/301/watson-content-hub.html)

## License

See the included license file [License](LICENSE) .
