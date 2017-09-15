# wch-site-application
Source code for the Watson Content Hub sample site single page application - Oslo. 

## Documentation

See the documentation on developer works how to customize the sample website or creating your own:

[Developing your own website](http://developer.ibm.com/customer-engagement/docs/developing-your-own-website/)

[Managing a web site in Watson Content Hub](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/admin/website_admin_std.html)

## Getting Setup

From you cli make sure to install project dependencies by running `npm install`

### Changing the tenant

You can set the tenant information, by changing the values in `src/app/Constants.ts`.
This file determines from which tenant site and layout information gets served
from.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

## Code scaffolding

To use code scaffolding you will need the Angular CLI with this project. To
install it globally run `npm install -g @angular/cli`.

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `assets/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## License

See the included license file [License](LICENSE) .
