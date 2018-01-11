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
import { Injectable } from '@angular/core';

import {Category, Link, RenderingContext} from 'ibm-wch-sdk-ng';



@Injectable()
export class UtilsService {
	private map = {};

	constructor () {}

	private mapNav (pages) {
		for (let i = 0; i < pages.length; i++) {
			this.map[pages[i].contentId] = pages[i].route;

			if (pages[i].children) {
				this.mapNav(pages[i].children);
			}
		}
	}

	getImageUrl (renderingContext: RenderingContext, imageKey: string, rendition: string): string {

		let renditionUrl = '';
		if (renderingContext && renderingContext.elements[imageKey]) {
			renditionUrl = renderingContext.elements[imageKey].url;
		}

			if (renderingContext.elements[imageKey].renditions) {
				const renditions = renderingContext.elements[imageKey].renditions;
				renditionUrl = renditions.default.url;

				if (renditions[rendition]) {renditionUrl = renditions[rendition].url;
			}

		}
		return `${renderingContext.context.hub.deliveryUrl['origin']}${renditionUrl}`;
	}

	useRouterLink(link: Link) {
		return  (link && link.linkURL && link.linkURL.toLowerCase().startsWith('/'))
	}


	getFirstCategory (rc: RenderingContext, elem: string, defaultVal = null, toLowerCase: boolean = false): string {
		if (rc && rc.category[elem] && rc.category[elem].categories) {
            return this.getFirstCategoryValue(rc.category[elem], defaultVal, toLowerCase);
		}
		return defaultVal;
	}


    getFirstCategoryValue (category: Category, defaultVal = null, toLowerCase: boolean = false): string {
        if (category && category.categories) {
            const retVal = category.categories[0].split('/').pop();
            return toLowerCase ? retVal.toLowerCase() : retVal;
        }
        return defaultVal;
    }

	getNavLink (rc: RenderingContext, contentId: string): string {
		if (this.map[contentId]) {
			return this.map[contentId];
		} else {
			this.mapNav(rc.context.site.pages);
			return (this.map[contentId]) ? this.map[contentId] : null;
		}
	}
}
