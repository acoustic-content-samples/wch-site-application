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
import { environment as env } from '../../environments/environment';
import { Constants } from '../Constants';

const dxSites = 'dxsites';
const siteIdRegexStr = '[\\w\\d_\\-%]';
const tenantIdRegexStr = `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}`;
const baseUrlRegex = new RegExp(
	`^(?:\\/api)?(?:\\/(${tenantIdRegexStr}))?(?:(?:\\/${dxSites}\\/)(${siteIdRegexStr}+))?(?:\\/)?(?:.*)$`
);
const [total, tenantId, siteId] = baseUrlRegex.exec(document.location.pathname);
const baseUrl = tenantId
	? siteId
		? `/${tenantId}/${dxSites}/${siteId}/` // site and tenant
		: `/${tenantId}/` // just tenant
	: siteId
		? `/${dxSites}/${siteId}/` // just site
		: '/'; // no IDs

export function getApiUrl () {
	return typeof window === 'undefined' ||
		window.location.hostname === 'localhost'
		? Constants['apiUrl']
		: `${window.location.protocol}//${window.location.hostname}/api${baseUrl}`;
}


export const environment = {
	production: env.production ? true : false,
	apiUrl: getApiUrl,
	httpOptions: {
		pollTime: 999999,
		retries: 5
	}
};

console.log('environment: %o', environment);
