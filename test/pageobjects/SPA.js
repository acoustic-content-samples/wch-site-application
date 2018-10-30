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

/**
 *  The SPA entrypoint pageobject class
 */
class SPA {
	constructor () {}

	/**
	 * Gives access to SPA header functions
	 * @returns {SPAHeader}
	 */
	header () {
		var SPAHeader = require('./SPAHeader');
		return new SPAHeader();
	}

	/**
	 * Gives access to SPA standard page functions
	 * @returns {SPAStandardPage}
	 */
	standardPage () {
		var SPAStandardPage = require('./SPAStandardPage');
		return new SPAStandardPage();
	}

	/**
	 * Gives access to SPA design page functions
	 * @returns {SPADesignPage}
	 */
	designPage () {
		//TODO
	}

	/**
	 * Gives access to SPA footer functions
	 * @returns {SPAFooter}
	 */
	footer () {
		var SPAFooter = require('./SPAFooter');
		return new SPAFooter();
	}

	/**
	 * Switches to preview iframe
	 * @returns {SPA} this
	 */
	switchToPreview () {
		browser.switchTo().frame($('#site-preview').getWebElement());
		browser.waitForAngularEnabled(false);

		return this;
	}

	/**
	 * Leave preview iframe
	 * @returns {SPA} this
	 */
	switchToDefault () {
		browser.switchTo().defaultContent();
		browser.waitForAngularEnabled(true);
	}

	/**
	 * Checks if it is preview is visible
	 * @returns {Boolean} True - 404 page is visilbe else False
	 */
	isPreviewVisible () {
		var that = this;
		return $('wch-page wch-contentref')
			.isDisplayed()
			.then(
				function (isVisible) {
					console.log('Page is visible: ' + isVisible);
					return isVisible;
				},
				function (error) {
					console.log('Page is not visible');
					return false;
				}
			);
	}
}
module.exports = SPA;
