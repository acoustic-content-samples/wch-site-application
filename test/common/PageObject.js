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
'use strict';

var log4js = require('log4js');
var log = log4js.getLogger('PageObject');

var PageObject = {
	/**
	 * Waits for an element to appear on screen
	 * @global
	 * @alias waitForElementEC
	 * @param {String} p_element The element to wait for
	 */
	waitForElementEC: function (p_element) {
		browser.wait(protractor.ExpectedConditions.visibilityOf(p_element));
	},

	/**
	 * Waits for an element to appear on screen
	 * @global
	 * @alias waitForElement
	 * @param {String} p_element The element to wait for
	 * @param {Number} [p_timeout] An optional timeout to use. Default is 15s.
	 */
	waitForElement: function (p_element, p_timeout) {
		var EC = protractor.ExpectedConditions;
		log.trace(
			'Waiting for ' +
				p_element.locator() +
				' for ' +
				(p_timeout ? p_timeout : '15000')
		);
		browser.getCurrentUrl().then(function (actualUrl) {
			var page = actualUrl
				.substring(actualUrl.lastIndexOf('/') + 1)
				.split('?')[0];
			browser
				.wait(
					EC.elementToBeClickable(p_element),
					p_timeout ? p_timeout : 15000,
					'Expected ' +
						p_element.locator() +
						" to exist on page '" +
						page +
						"'."
				)
				.then(
					function () {},
					function (err) {
						throw err;
					}
				);
		});

		browser.wait(
			p_element.isDisplayed().then(
				function (present) {
					return present;
				},
				function (error) {
					log.error('Expected element to be displayed');
					return false;
				}
			),
			10000
		);
	},

	waitForElementToDisappear: function (p_element) {
		log.trace('Waiting for ' + p_element.locator() + ' to disappear');
		var EC = protractor.ExpectedConditions;

		browser.wait(
			p_element.isDisplayed().then(
				function (present) {
					return !present;
				},
				function (error) {
					return true;
				}
			),
			15000,
			'Expected ' + p_element.locator() + ' to disappear.'
		);
	},

	waitForPromiseTest: function (promiseFn, testFn, parameter1, parameter2) {
		return browser.wait(
			function () {
				var deferred = protractor.promise.defer();
				if (parameter1) {
					promiseFn(parameter1, parameter2).then(
						function (data) {
							deferred.fulfill(testFn(data));
						},
						function (err) {
							deferred.reject(err);
						}
					);
				} else {
					promiseFn().then(function (data) {
						deferred.fulfill(testFn(data));
					});
				}
				return deferred.promise;
			},
			10000,
			'Promise fulfillment took longer than expected'
		);
	},
};

module.exports = PageObject;
