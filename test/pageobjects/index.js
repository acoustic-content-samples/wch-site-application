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
/**
 * This module provides the page objects for the service.
 * <br/><br/>To install: <code>npm install oob-spa-ui-pageobjects</code>
 * <br/>To import it: <code>require('oob-spa-ui-pageobjects')</code>
 *
 *
 * @module oob-spa-ui-pageobjects
 */

/**
 * {@link SPA}</br>
 * Serves as an entrypoint for SPA page objects
 */
module.exports.SPA = require('./SPA');

/**
 * {@link SPAHeader}</br>
 * The SPAHeader that appears at the top of the SPA pages
 * </br><img style="max-width:600px; max-height:600px" src='./doc-files/SPAHeader.png'/>
 */
module.exports.SPAHeader = require('./SPAHeader');

/**
 * {@link SPAStandardPage} </br>
 * The standard page
 * </br><img style="max-width:600px; max-height:600px" src='./doc-files/SPAStandardPage.png'/>
 */
module.exports.SPAStandardPage = require('./SPAStandardPage');

/**
 * {@link SPAFooter}</br>
 * The SPAFooter that appears at the bottom of the page
 * </br><img style="max-width:600px; max-height:600px" src='./doc-files/SPAFooter.png'/>
 */
module.exports.SPAFooter = require('./SPAFooter');
