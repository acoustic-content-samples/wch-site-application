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
var SPA = require('../pageobjects/SPA');

describe('Sample OOB SPA tests', function () {
	beforeAll(function (done) {
		browser.get('http://localhost:4200/');

		done();
	});

	beforeEach(function (done) {
		this.spa = new SPA();
		this.header = this.spa.header();
		this.footer = this.spa.footer();

		done();
	});

	it('should be able to see logo in the header', function () {
		//GIVEN we are in home page

		//THEN page should be visible
		expect(this.spa.isPreviewVisible()).toEqual(true);
		//AND logo should be visible
		expect(this.header.logo()).toContain(
			'04302605596010f57e8cd45f06c2c43e.svg'
		);
	});

	it('should be able to get all the pages in header', function () {
		//GIVEN we are in home page

		//THEN all pages should be displayed
		var allPages = this.header.navigation().allPages();
		expect(allPages).toContain('Home');
		expect(allPages).toContain('Design articles');
		expect(allPages).toContain('Events');
		expect(allPages).toContain('About us');
	});

	it('should be able to navigate', function () {
		//GIVEN we are in home page

		//WHEN navigate to about us page
		this.header.navigation().navigateTo('About us');
		var standardPage = this.spa.standardPage();

		//THEN About us page should be visible
		expect(standardPage.isPageVisible()).toBeTruthy();

		//WHEN navigate back to home page
		this.header.navigation().navigateTo('Home');
		standardPage = this.spa.standardPage();

		//THEN Home page should be visible
		//AND hero image is displayed
		expect(standardPage.heroImage()).toContain(
			'1c2111ea5e20d25a5502696ceb6dfae9.jpg?resize=1200px%3A800px&crop=1200%3A300%3B0%2C250'
		);
		//AND hero message is displayed in the hero image
		expect(standardPage.heroMessage()).toEqual(
			'Modern textures for living spaces'
		);
	});

	it('should be able to see logo in the footer', function () {
		//GIVEN we are in home page

		//THEN logo in the footer should be visible
		expect(this.footer.logo()).toContain(
			'daa742706465d24b624464b77b0cc6c0.svg'
		);
	});

	it('should be able to get all the pages in footer', function () {
		//GIVEN we are in home page

		//THEN all pages should be displayed
		var allPages = this.header.navigation().allPages();
		expect(allPages).toContain('Home');
		expect(allPages).toContain('Design articles');
		expect(allPages).toContain('Events');
		expect(allPages).toContain('About us');
	});

	it('should be able to get footer info', function () {
		//GIVEN we are in home page

		//THEN assert footer info
		expect(this.footer.email()).toEqual('customer-service@example.com');
		expect(this.footer.customerServiceNumber()).toEqual(
			'+1 (888) 777-5555'
		);
	});

	it('should be able to use the Search in Oslo to show Design Page', function () {
		//GIVEN we are in home page
		let searchTerm = 'maximizing';

		//WHEN user search for 'maximizing'
		var searchResultsPage = this.header.navigation().search(searchTerm);

		//THEN Search result page should display 1 search result
		expect(searchResultsPage.results()).toContain(
			'1 search result for "maximizing"'
		);
	});
});
