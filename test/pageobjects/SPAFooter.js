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
 * SPA footer pageobject class
 * <br/><img src='./doc-files/SPAFooter.png'/>
 */
class SPAFooter {
	constructor () {
		// Turn off waiting off for angular
		browser.waitForAngularEnabled(false);

		// Footer container
		this.footerContainer = $('.wch-footer');

		// Footer logo
		this.footerLogoContainer = $('.footer-logo a img');

		// Footer menu
		this.footerMenu = this.footerContainer.$('.footer-nav');

		// Footer menu pages
		this.footerMenuPages = this.footerMenu.all(by.css('ul li'));

		// Contact us container
		this.footerContactUs = this.footerContainer.$('.contact-us');

		//Sales number
		//Customer service
		//email
		this.footerContactUsAll = this.footerContactUs.all(by.css('ul li a'));

		// Follow us container
		this.footerFollowUs = this.footerContainer.$('.follow-us');

		//Facebook
		//Twitter
		//Instagram
		this.footerContactUsInfo = this.footerFollowUs.all(by.css('ul li a'));

		// Wait for footer logo
		waitForElement(this.footerLogoContainer);
	}

	/**
	 * Returns the source value of the logo displayed in the footer
	 * @returns {String} Source value of the logo
	 */
	logo () {
		return this.footerLogoContainer
			.getAttribute('src')
			.then(function (value) {
				return value;
			});
	}

	/**
	 * Get all the SPA pages in the footer menu
	 * @returns {String} all the pages in the footer menu
	 */
	allPages () {
		return this.footerMenuPages.getText();
	}

	/**
	 * Sales Nummber in the footer menu
	 * @returns {String} sales number in the footer menu
	 */
	salesNumber () {
		return this.footerContactUsAll.get(0).getText();
	}

	/**
	 * Customer service number in the footer menu
	 * @returns {String} customer service number in the footer menu
	 */
	customerServiceNumber () {
		return this.footerContactUsAll.get(1).getText();
	}

	/**
	 * Email info in the footer menu
	 * @returns {String} email info the footer menu
	 */
	email () {
		return this.footerContactUsAll.get(2).getText();
	}
}

module.exports = SPAFooter;
