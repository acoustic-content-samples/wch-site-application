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
import { Component, Input, OnDestroy } from '@angular/core';

import { RenderingContext } from '@ibm-wch-sdk/ng';
import { ConfigServiceService } from '@ibm-wch/components-ng-shared-utilities';
import { Constants } from '../Constants';
import { Subscription } from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
	selector: 'wch-footer',
	styleUrls: ['./wch-footer.scss'],
	templateUrl: './wch-footer.html',
})
export class WchFooterComponent implements OnDestroy {
	pages: any[] = [];

	configSub: Subscription;

	public readonly LOGO_KEY: string = 'Logo';
	public readonly COPYRIGHT_KEY: string = 'copyright';
	public readonly EMAIL_KEY: string = 'emailAddress';
	public readonly SALES_LABEL_KEY: string = 'labelForSales';
	public readonly SALES_NUMBER_KEY: string = 'salesNumber';
	public readonly CUSTOMER_SERVICE_LABEL_KEY: string =
		'labelForCustomerService';
	public readonly CUSTOMER_SERVICE_NUMBER_KEY: string =
		'customerServiceContactNumber';

	// copyright date
	currentYear: number = new Date().getFullYear();

	@Input()
	public set renderingContext(aValue: RenderingContext) {
    if ( aValue && aValue.context && aValue.context.site) {
      this.configSub = this.configService.getConfig(Constants.FOOTER_CONFIG.concat(':', aValue.context.site.name)).subscribe((context) => {
        if (context && context.id) {
          this.footerConfig = context;
        } else {
          this.configService.getConfig(Constants.FOOTER_CONFIG).pipe(take(1)).subscribe((defaultContext) => {
            if (defaultContext && defaultContext.id) {
              this.footerConfig = defaultContext;
            }
          });
        }
      });
    }
		this.rc = aValue;

		// Filter out landing pages and hidden pages from footer
		if (this.rc && this.rc.context && this.rc.context.site) {
			const allPages = this.rc.context.site.pages;
			this.pages = allPages.filter(page => {
				// Don't show landing page in the footer
				if (page['kind'] && page['kind'][0] === 'landing-page') {
					return false;
				}
				// Don't show page if hideFromNavigation == true
				if (page['hideFromNavigation'] === true) {
					return false;
				}
				return true;
			});
		 }	
	}

	rc: RenderingContext;
	footerConfig: any;
	salesTel: string;
	serviceTel: string;
	configService: ConfigServiceService;

	constructor(configService: ConfigServiceService) {
		this.configService = configService;
	}

	trackByPageId(index, page) {
		return page.id;
	}

	isImageURLAvailable(elem): boolean {
		return (
			this.rc &&
			this.footerConfig &&
			this.footerConfig.elements &&
			this.footerConfig.elements[elem]
		);
	}

	ngOnDestroy() {
		if (this.configSub) {
			this.configSub.unsubscribe();
		}
	}

	getURL(img) {
		// TODO add fallback logic for rendition
		return (
			this.rc.context.hub.deliveryUrl['origin'] +
			this.footerConfig.elements[img].renditions.default.url
		);
	}

	getElementValue(elem): string {
		if (this.footerConfig && this.footerConfig.elements[elem]) {
			return this.footerConfig.elements[elem].value;
		}
		return '';
	}

	convertToTelURL(field): string {
		if (
			this.footerConfig &&
			this.footerConfig.elements &&
			this.footerConfig.elements[field]
		) {
			return `+${this.footerConfig.elements[field].value.replace(
				/\D/g,
				''
			)}`;
		}
		return '';
	}
}
