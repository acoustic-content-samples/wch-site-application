'use strict';

/**
 * SPASearchResults pageobject class
 * <br/><img src='./doc-files/SPASearchResults.png'/>
 */
class SPASearchResults {
	constructor () {
		// Turn off waiting off for angular
		browser.waitForAngularEnabled(false);

		// Page content placeholder
		this.pageContentPlaceholder = $('wch-page wch-contentref');

		// Page layouts
		this.heroPageLayout = $('app-standard-page-layout-component');
		this.searchResultsPageLayout = this.heroPageLayout.$(
			'wch-contentref app-search-results-layout-component'
		);

		this.searchResultGridContainer = $('grid-container');

		this.searchResultText = $('.grid-x.grid-margin-x');

		this.searchResultItem = $('.large-4.medium-6.cell.search-result-item');
		this.designPageLeftLayout = $('app-design-page-left-layout-component');
		this.designPageArticleLayout = this.designPageLeftLayout.$(
			'app-design-article-layout-component'
		);

		// 404 error page
		this.errorPage = $('.error-wrapper .error-code');

		// Waits for page content to be loaded
		waitForElement(this.searchResultItem, 15000);
	}

	/**
	 * Returns search results
	 * @returns {String} hero image source value
	 */
	results () {
		return this.searchResultText.getText().then(function (value) {
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

	waitUntilNot404Page () {
		return browser.wait(
			this.errorPage.isDisplayed().then(
				function (errorPage) {
					console.log('404 Error page is displayed');
					return false;
				},
				function (error) {
					console.log('404 page not found');
					return true;
				}
			)
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

module.exports = SPASearchResults;
