# Unit Test

Unit test are executed using [Karma](https://karma-runner.github.io/1.0/index.html), which can be ran from the command line using the following command:

`npm test`

The above command compiles the application and test code and starts karma, which will open a browser and display the test result. Both processes watch pertinent files, write messages to the console, and re-run when they detect changes.

Unit test are written in Jasmine, which are called specs. Each spec is located in the same folder as the component they are testing.  The filename extension must be `.spec.ts`, the convention adhered to by `karma.conf.js`.

For more information on writing specs look at the [Angular Testing guide](https://angular.io/guide/testing#test-a-component)

# End-to-End(E2E) Test

End-to-End test are executed using [Protractor](http://www.protractortest.org/), which can be ran from the command line using the following command:

`npm run e2e`

Before running the tests make sure you are serving the app via `npm start`.
End-to-end tests explore the application as users experience it. In e2e testing, one process runs the real application and a second process runs protractor tests that simulate user behavior and assert that the application respond in the browser as expected.

End-to-End test are located in the `test/e2e` folder. The filename extension must be `.e2e-spec.js`, the convention adhered to by `protractor.conf.js`. End-to-End test uses page objects, which are located in `test\pageobjects` folder. Page Objects help you write cleaner tests by encapsulating information about the elements on your application page. A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object.

For more information on writing e2e-specs look at the [Protractor docs](https://github.com/angular/protractor/tree/master/docs)
