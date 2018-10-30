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
 * SPA Header pageobject class
 * <br/><img src='./doc-files/SPAHeader.png'/>
 */
class SPAHeader {
	constructor () {
		// Turn off waiting off for angular
		browser.waitForAngularEnabled(false);

		// Header section
		this.header = $('responsive-header nav');

		// ***********************
		// vertical header
		// ***********************

		// Responsive header
		this.titleBarNarrow = this.header.$('#wch-toggleMenu');
		//this.titleBar = this.header.$('#wch-toggleMenu');

		// Responsive navigation
		this.hamburgerMenuButton = this.titleBarNarrow.$('.menu-icon');

		// The logo container - Responsive
		this.logoContainerNarrow = this.titleBarNarrow.$(
			'.logo-container .logo'
		);

		// menu items
		this.verticalMenu = $(
			'.vertical.medium-horizontal.menu.accordion-menu'
		);

		// vertical nav menu dropdown
		this.vnmenuItemDropDown = $('.first-sub.is-active');

		// ***********************
		// end vertical header
		// ***********************

		// ***********************
		// horizontal header
		// ***********************

		// Non-responsive nav menu container
		this.navMenuWide = this.header.$('#wch-nav-menu');

		// Left side header container
		this.leftHeader = this.navMenuWide.$('.top-bar-left');

		// Right side header container
		this.rightHeader = this.navMenuWide.$('.top-bar-right');

		// The logo container - Non-responsive
		this.logoContainerWide = this.leftHeader.$('.logo-container .logo');

		// ***********************
		// end horizontal header
		// ***********************

		// menu item
		this.firstTopLevelNavItem = element
			.all(by.css('.limit-page-name'))
			.first();

		// All pages in the nav menu
		this.allPagesFirstLevel = element.all(by.css('.limit-page-name'));

		this.allParentAccordionSubMenu = element.all(
			by.css('.top-level-nav-item.is-accordion-submenu-parent')
		);

		// Horizontal nav menu dropdown
		this.hnmenuItemDropDown = $('.first-sub.js-dropdown-active');

		//search
		this.searchContainer = $('.searchBox');
		this.searchFormContainer = this.searchContainer.$('#search-form');
		this.searchInput = this.searchFormContainer.$('.ng-valid');
		this.searchButton = this.searchFormContainer.$('.search-button');
		this.searchInputClear = this.searchFormContainer.$(
			'.search-input-clear'
		);

		// Wait for Non-responsive logo
		waitForElement(this.header, 30000);
	}

	/**
	 *  @param {String} searchTerm The term to use to search with
	 *  @returns {SPASearchResults} The Search Results page
	 */
	search (searchTerm) {
		var that = this;
		this.searchInput
			.clear()
			.sendKeys(searchTerm)
			.then(function () {
				console.log('Searching for ' + searchTerm);
				that.searchButton.click();
			});

		var SPASearchResults = require('./SPASearchResults');
		return new SPASearchResults();
	}

	/**
	 * Returns the source/style value of the logo displayed in the header
	 * @returns {String} Source value of the logo
	 */
	logo () {
		let that = this;
		return this.isVerticalNavMenu().then(function (isVMenu) {
			if (isVMenu) {
				waitForElement(that.logoContainerNarrow);
				return that.logoContainerNarrow
					.getAttribute('style')
					.then(function (value) {
						return value;
					});
			} else {
				waitForElement(that.logoContainerWide);
				return that.logoContainerWide
					.getAttribute('style')
					.then(function (value) {
						return value;
					});
			}
		});
	}

	/**
	 * Get all the SPA pages in the first level nav menu or child pages(if parent name given)
	 * @param parentName(optional) - Parent page name
	 * @returns {String} all the SPA pages
	 */
	allPages (parentName) {
		var EC = protractor.ExpectedConditions;
		var parentPageElementMenu;
		browser.wait(
			EC.visibilityOf(this.firstTopLevelNavItem),
			10000,
			'Top level pages is still not displayed in the nav item'
		);
		var that = this;
		if (parentName) {
			return this.isVerticalNavMenu().then(function (isVMenu) {
				if (isVMenu) {
					return that
						.getParentAccordionMenu(parentName)
						.then(function (parentMenu) {
							parentPageElementMenu = parentMenu;
							return that
								.isDropDownMenuOpen(parentMenu)
								.then(function (isDMOpen) {
									if (!isDMOpen) {
										return browser
											.actions()
											.mouseMove(
												that.rightHeader.element(
													by.linkText(parentName)
												),
												{
													x: '150',
													y: '0',
												}
											)
											.click()
											.perform()
											.then(function () {
												console.log(
													'Opening ' +
														parentName +
														' dropdown menu'
												);

												browser
													.wait(
														EC.visibilityOf(
															element(
																by.linkText(
																	'parentName'
																)
															)
														),
														2000
													)
													.then(
														() => {
															console.log(
																'Closing'
															);
														},
														() => {
															console.log(
																'Dropdown menu opened'
															);
														}
													);

												console.log(
													'Getting all the child pages of the parenat page: ' +
														parentName
												);
												var parentPageElement = element
													.all(
														by.linkText(parentName)
													)
													.first();
												var allChildPagesElement = parentPageElementMenu.all(
													by.css(
														'.is-submenu-item .limit-page-name'
													)
												);
												browser
													.wait(
														EC.visibilityOf(
															parentPageElement
														),
														10000,
														'Parent page is still not displayed in the nav item'
													)
													.then(function () {
														browser.wait(
															EC.presenceOf(
																allChildPagesElement
															),
															10000,
															'Child page is still not displayed in the nav item'
														);
													});

												return allChildPagesElement.getText();
											});
									}
								});
						});
				} else {
					return browser
						.actions()
						.mouseMove(
							that.rightHeader.element(by.linkText(parentName))
						)
						.perform()
						.then(function () {
							console.log('Hovering on the ' + parentName);
							parentPageElementMenu = that.hnmenuItemDropDown;
							waitForElement(that.hnmenuItemDropDown);

							console.log(
								'Getting all the child pages of the parenat page: ' +
									parentName
							);
							var parentPageElement = element
								.all(by.linkText(parentName))
								.first();
							var allChildPagesElement = parentPageElementMenu.all(
								by.css('.is-submenu-item .limit-page-name')
							);
							browser
								.wait(
									EC.visibilityOf(parentPageElement),
									10000,
									'Parent page is still not displayed in the nav item'
								)
								.then(function () {
									browser.wait(
										EC.presenceOf(allChildPagesElement),
										10000,
										'Child page is still not displayed in the nav item'
									);
								});

							return allChildPagesElement.getText();
						});
				}
			});
		} else {
			return this.allPagesFirstLevel.getText();
		}
	}

	/**
	 * Navigate to the specified SPA page (Non-responsive only)
	 * @param destination - SPA page name to navigate to
	 * @param child(optional) - SPA child page of the destination
	 */
	navigateTo (destination, child) {
		var that = this;
		var self = this;
		if (child) {
			this.isVerticalNavMenu().then(function (isVMenu) {
				if (isVMenu) {
					that.getParentAccordionMenu(destination).then(function (
						parentMenu
					) {
						that.isDropDownMenuOpen(parentMenu).then(function (
							isDMOpen
						) {
							if (!isDMOpen) {
								browser
									.actions()
									.mouseMove(
										that.rightHeader.element(
											by.linkText(destination)
										),
										{
											x: '150',
											y: '0',
										}
									)
									.click()
									.perform()
									.then(function () {
										console.log(
											'Opening ' +
												destination +
												' dropdown menu'
										);
										waitForElement(
											parentMenu.element(
												by.linkText(child)
											),
											5000
										);
									});
							}
							parentMenu
								.element(by.linkText(child))
								.$('span')
								.click()
								.then(function () {
									console.log('Navigating to ' + child);
								});
						});
					});
				} else {
					browser
						.actions()
						.mouseMove(
							that.rightHeader.element(by.linkText(destination))
						)
						.perform()
						.then(function () {
							console.log('Hovering on the ' + destination);

							waitForElement(that.hnmenuItemDropDown);

							that.rightHeader
								.element(by.linkText(child))
								.$('span')
								.click()
								.then(function () {
									console.log('Navigating to ' + child);
								});
						});
				}
			});
		} else {
			this.rightHeader
				.element(by.linkText(destination))
				.$('span')
				.click()
				.then(function () {
					console.log('Navigating to ' + destination);
				});
		}

		//better screenshots
		browser.executeScript(
			'arguments[0].scrollIntoView(true)',
			this.header.getWebElement()
		);

		return this;
	}

	/**
	 * Opens navigation menu
	 */
	navigation () {
		var that = this;
		this.isVerticalNavMenu().then(function (isVMenu) {
			if (isVMenu) {
				that.isMenuOpen().then(function (isOpen) {
					if (!isOpen) {
						that.openMenu();
					}
				});
			}
		});

		return this;
	}

	waitForPageToDisappear (pageName, errorMessage, timeout) {
		var that = this;
		var EC = protractor.ExpectedConditions;
		return browser
			.wait(
				function () {
					//for some reason, allPagesFirstLevel doesn't work here -- stale element err
					return element
						.all(by.css('.limit-page-name'))
						.getText()
						.then(function (pages) {
							if (pages.includes(pageName)) {
								return false;
							} else {
								return true;
							}
						});
				},
				timeout,
				errorMessage
			)
			.then(function () {
				console.log('Page not found in SPA');
			});
	}

	waitForPage (pageName, errorMessage, timeout) {
		var that = this;
		var EC = protractor.ExpectedConditions;
		return browser
			.wait(
				function () {
					//for some reason, allPagesFirstLevel doesn't work here -- stale element err
					return element
						.all(by.css('.limit-page-name'))
						.getText()
						.then(function (pages) {
							console.log('Waiting for ' + pageName);

							//sometimes the page is expanded so the array contains its children as well
							for (let i = 0; i < pages.length; i++) {
								if (pages[i].includes(pageName)) {
									return true;
								}
							}
							return false;
						});
				},
				timeout,
				errorMessage
			)
			.then(function () {
				console.log('Page found in SPA');
			});
	}

	/**
	 * Waits for the header logo to be updated
	 * @param {String} logoResourceId the logo to wait for
	 * @param {String} errorMessage the error message to display if not updated
	 * @param {Number} timeout how long to wait for the update
	 * @returns {String} Source value of the logo
	 */
	waitForLogoToUpdate (logoResourceId, errorMessage, timeout) {
		let that = this;
		return browser.wait(
			function () {
				return that.isVerticalNavMenu().then(function (isVMenu) {
					if (isVMenu) {
						waitForElement(that.logoContainerNarrow);
						return that.logoContainerNarrow
							.getAttribute('style')
							.then(function (value) {
								let currentLogoResourceId = value
									.split('/')
									.pop()
									.replace('");', '');
								console.log(
									'Expecting ' +
										currentLogoResourceId +
										' to equal ' +
										logoResourceId
								);
								return currentLogoResourceId == logoResourceId;
							});
					} else {
						waitForElement(that.logoContainerWide);
						return that.logoContainerWide
							.getAttribute('style')
							.then(function (value) {
								let currentLogoResourceId = value
									.split('/')
									.pop()
									.replace('");', '');
								console.log(
									'Expecting ' +
										currentLogoResourceId +
										' to equal ' +
										logoResourceId
								);
								return currentLogoResourceId == logoResourceId;
							});
					}
				});
			},
			timeout,
			errorMessage
		);
	}

	openMenu () {
		this.hamburgerMenuButton.click().then(function () {
			console.log('Opening navigation menu');
		});
	}

	/**
	 * Helper function
	 */
	isVerticalNavMenu () {
		var that = this;
		return this.hamburgerMenuButton.isDisplayed().then(
			function (isMenuBtnDisplayed) {
				if (isMenuBtnDisplayed) {
					console.log('Responsive navigation menu');
					return true;
				} else {
					console.log('Non-responsive navigation menu');
					return false;
				}
			},
			function (error) {
				return false;
			}
		);
	}

	/**
	 * Helper function
	 */
	isMenuOpen () {
		var that = this;
		return this.navMenuWide.isDisplayed().then(
			function (isMenuOpen) {
				if (isMenuOpen) {
					console.log('Navigation menu is already open');
					return true;
				} else {
					console.log('Navigation menu is not opened');
					return false;
				}
			},
			function (error) {
				return false;
			}
		);
	}

	/**
	 * Helper function
	 */
	isDropDownMenuOpen (pMenu) {
		var that = this;
		return pMenu.getAttribute('aria-expanded').then(function (value) {
			if (value == 'true') {
				console.log('Dropdown menu is already opened');
				return true;
			} else {
				console.log('Dropdown menu is not open');
				return false;
			}
		});
	}

	getParentAccordionMenu (destination) {
		var that = this;
		return this.allParentAccordionMenu().then(function (parentMenu) {
			console.log('Parent Menus ' + parentMenu);
			var index = parentMenu.indexOf(destination);
			if (index > -1) {
				return that.allParentAccordionSubMenu.get(index);
			} else {
				log.error('No parent page ' + destination + ' exists');
				return null;
			}
		});
	}

	getParentDropDownMenu (destination) {
		var that = this;
		return this.allParentAccordionMenu().then(function (parentMenu) {
			var index = parentMenu.indexOf(destination);
			if (index > -1) {
				return that.allParentAccordionSubMenu.get(index);
			} else {
				log.error('No parent page ' + destination + ' exists');
				return null;
			}
		});
	}

	/**
	 *  Returns a list of all parent accordion-menu
	 *  @returns {List<String>} All parent accordion-menu
	 */
	allParentAccordionMenu () {
		return this.allParentAccordionSubMenu.getText();
	}
}

module.exports = SPAHeader;
