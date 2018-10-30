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
 * SPAStandardPage pageobject class
 * <br/><img src='./doc-files/SPAStandardPage.png'/>
 */
class SPAStandardPage {
	constructor () {
		// Turn off waiting off for angular
		browser.waitForAngularEnabled(false);

		// Page content placeholder
		this.pageContentPlaceholder = $('wch-page wch-contentref');

		// Hero Image section
		this.heroImageSection = $('app-hero-image-layout-component');

		// Hero Image info
		this.heroImg = this.heroImageSection.$('.wch-hero-image img');

		// Hero image message container
		this.heroMsg = this.heroImageSection.$('.hero-message');

		// Hero image message value
		this.heroMsgText = this.heroMsg.$('.text-hero');

		// Hero image message button
		this.heroMsgButton = this.heroMsg.$('.hero-button');

		// Hero video container
		this.heroVideoSection = $('app-hero-video-layout-component');

		// Hero video info
		this.heroVideoInfo = this.heroVideoSection.$(
			'.wch-hero-video .vjs-tech'
		);

		// 404 error page
		this.errorPage = $('.error-wrapper .error-code');

		//TODO add additional elements

		// Waits for page content to be loaded
		waitForElement(this.pageContentPlaceholder);
	}

	/**
	 * Returns hero image source value
	 * @returns {String} hero image source value
	 */
	heroImage () {
		waitForElement(this.heroImg);
		return this.heroImg.getAttribute('src').then(function (value) {
			return value;
		});
	}

	/**
	 * Returns hero image message text value
	 * @returns {String} hero image source value
	 */
	heroMessage () {
		return this.heroMsgText.getText();
	}

	/**
	 * Hero image message button
	 */
	heroButton () {
		this.heroMsgButton.click();
		//TODO return design page - if clicked from home
	}

	/**
	 * Hero image message button
	 * @returns {String} hero image message button text
	 */
	heroButtonText () {
		return this.heroMsgButton.getText();
	}

	/**
	 * Returns hero video source value
	 * @returns {String} hero video source value
	 */
	heroVideo () {
		waitForElement(this.heroVideoInfo);
		return this.heroVideoInfo.getAttribute('src').then(function (value) {
			return value;
		});
	}

	/**
	 * Checks if it is a 404 page
	 * @returns {Boolean} True - 404 page is visilbe else False
	 */
	is404Page () {
		return this.errorPage.isDisplayed().then(
			function (errorPage) {
				console.log('404 Error page is displayed');
				return true;
			},
			function (error) {
				console.log('404 page not found');
				return false;
			}
		);
	}

	/**
	 * Checks if the page is visible
	 * @returns {Boolean} True - page is visilbe else False - page is either empty or contains 404 error page
	 */
	isPageVisible () {
		var that = this;
		return this.pageContentPlaceholder.isDisplayed().then(
			function (isVisible) {
				console.log('Checking if there is no 404 error page');
				return that.errorPage.isDisplayed().then(
					function (errorPage) {
						console.log('404 Error page is displayed');
						return false;
					},
					function (error) {
						console.log('Page is visible');
						return true;
					}
				);
			},
			function (error) {
				console.log('Page is not visible');
				return false;
			}
		);
	}
}

module.exports = SPAStandardPage;
