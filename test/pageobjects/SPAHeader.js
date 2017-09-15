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
'use strict'

/**
 * SPA Header pageobject class
 * <br/><img src='./doc-files/SPAHeader.png'/>
 */
class SPAHeader {

  constructor() {

    // Turn off waiting off for angular
    browser.waitForAngularEnabled(false);

    // Header section
    this.header = $('wch-header header nav');

    // Responsive header
    this.titleBar = this.header.$('.title-bar');

    // Responsive navigation
    this.responsiveNav = this.titleBar.$('.menu-icon');

    // menu items
    this.verticalMenu = $('.vertical.medium-horizontal.menu.accordion-menu');

    // Non-responsive nav menu container
    this.navMenu = this.header.$('#nav-menu');

    // All pages in the nav menu
    this.allPagesFirstLevel = element.all(by.css(".top-level-nav-item"));

    // Left side header container
    this.leftHeader = $('.top-bar-left');

    // Right side header container
    this.rightHeader = $('.top-bar-right');

    // The logo container - Non-responsive
    this.logoContainer = this.leftHeader.$(".logo-container .logo");

    this.allParentAccordionSubMenu = element.all(by.css(".top-level-nav-item.is-accordion-submenu-parent"));

    // Horizontal nav menu dropdown
    this.hnmenuItemDropDown = $(".first-sub.js-dropdown-active");

    // vertical nav menu dropdown
    this.vnmenuItemDropDown = $(".first-sub.is-active");

    // Wait for Non-responsive logo
    waitForElement(this.header);

  }


  /**
   * Returns the source/style value of the logo displayed in the header
   * @returns {String} Source value of the logo
   */
  logo() {
    return this.logoContainer.getAttribute("style").then(function(value) {
      return value;
    });
  }

  /**
   * Get all the SPA pages in the first level nav menu
   * @returns {String} all the SPA pages
   */
  allPages() {
    return this.allPagesFirstLevel.getText();
  }

  /**
   * Navigate to the specified SPA page
   * @param destination - SPA page name to navigate to
   * @param child(optional) - SPA child page of the destination
   */
  navigateTo(destination, child) {
    var that = this;
    var self = this;
    if (child) {
      this.isVerticalNavMenu().then(function(isVMenu) {
        if (isVMenu) {

          that.getParentAccordionMenu(destination).then(function(parentMenu) {
            that.isDropDownMenuOpen(parentMenu).then(function(isDMOpen) {
              if (!isDMOpen) {
                browser.actions()
                  .mouseMove(that.rightHeader.element(by.linkText(destination)), {
                    x: "150",
                    y: "0"
                  })
                  .click()
                  .perform().then(function() {
                    console.log("Opening " + destination + " dropdown menu");
                    waitForElement(parentMenu.element(by.linkText(child)),5000);
                  })
              }
              parentMenu.element(by.linkText(child)).click().then(function() {
                console.log("Navigating to the " + child);
              })

            })
          })

        } else {
          browser.actions().mouseMove(that.rightHeader.element(by.linkText(destination))).perform().then(function() {
            console.log("Hovering on the " + destination);

            waitForElement(that.hnmenuItemDropDown);

            that.rightHeader.element(by.linkText(child)).click().then(function() {
              console.log("Navigating to the " + child);
            })
          })
        }
      })
    } else {
      this.rightHeader.element(by.linkText(destination)).click().then(function() {
        console.log("Navigating to the " + destination);
      })
    }

  }

  /**
   * Opens navigation menu
   * @returns {SPAHeader}
   */
  navigation() {
    var that = this;
    this.isVerticalNavMenu().then(function(isVMenu) {
      if (isVMenu) {
        that.isMenuOpen().then(function(isOpen) {
          if (!isOpen) {
            that.openMenu();
          }
        })
      }
    })

    return this;
  }

  /**
  * Open navigation menu
  */
  openMenu() {
    this.responsiveNav.click().then(function() {
      console.log("Opening navigation menu");
    })
  }

  /**
   * Helper function to check if it is responsive nav menu
   */
  isVerticalNavMenu() {
    var that = this;
    return this.responsiveNav.isDisplayed().then(function(isResponsiveNav) {
      return that.titleBar.getAttribute("style").then(function(value) {
        if (value) {
          console.log("Non-responsive navigation menu " + value);
          return false;
        } else {
          console.log("Responsive navigation menu");
          return true;
        }
      });
    }, function(error) {
      return false;
    })
  }

  /**
   * Helper function to check if the nav menu is open
   */
  isMenuOpen() {
    var that = this;
    return this.navMenu.isDisplayed().then(function(isMenuOpen) {
      return that.navMenu.getAttribute("style").then(function(value) {
        if (value) {
          console.log("Navigation menu is not open " + value);
          return false;
        } else {
          console.log("Navigation menu is already opened");
          return true;
        }
      });
    }, function(error) {
      return false;
    })
  }

  /**
   * Helper function
   */
  isDropDownMenuOpen(pMenu) {
    var that = this;
    return pMenu.getAttribute("aria-expanded").then(function(value) {
      if (value == "true") {
        console.log("Dropdown menu is already opened");
        return true;
      } else {
        console.log("Dropdown menu is not open");
        return false;
      }
    });
  }

  /**
   * Helper function
   */
  getParentAccordionMenu(destination) {
    var that = this;
    return this.allParentAccordionMenu().then(function(parentMenu) {
      console.log("Parent Menus " + parentMenu);
      var index = parentMenu.indexOf(destination);
      if (index > -1) {
        return that.allParentAccordionSubMenu.get(index);
      } else {
        log.error("No parent page " + destination + " exists");
        return null;
      }
    });
  }

  /**
   * Helper function
   */
  getParentDropDownMenu(destination) {
    var that = this;
    return this.allParentAccordionMenu().then(function(parentMenu) {
      var index = parentMenu.indexOf(destination);
      if (index > -1) {
        return that.allParentAccordionSubMenu.get(index);
      } else {
        log.error("No parent page " + destination + " exists");
        return null;
      }
    });
  }

  /**
   *  Returns a list of all parent accordion-menu
   *  @returns {List<String>} All parent accordion-menu
   */
  allParentAccordionMenu() {
    return this.allParentAccordionSubMenu.getText();
  }

}

module.exports = SPAHeader;
