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
import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {RenderingContext} from 'ibm-wch-sdk-ng';
import {ConfigServiceService} from '../common/configService/config-service.service';
import {Constants} from '../Constants';
import {Subscription} from 'rxjs/Subscription';
const facebook = require('./images/icon-facebook-logo.svg');
const twitter = require('./images/icon-twitter-logo-white.svg');
const instagram = require('./images/icon-instagram-logo.svg');

@Component({
	selector: 'wch-footer',
	styleUrls: ['./wch-footer.scss'],
	templateUrl: './wch-footer.html',
})


export class WchFooterComponent implements OnInit, OnDestroy {

	pages: any[] = [];
	icon: any = {
		facebook: `#${facebook.default.id}`,
		twitter: `#${twitter.default.id}`,
		instagram: `#${instagram.default.id}`
	};

	configSub: Subscription;

	public readonly LOGO_KEY: string = 'Logo';
	public readonly COPYRIGHT_KEY: string = 'copyright';
	public readonly EMAIL_KEY: string = 'emailAddress';
	public readonly SALES_LABEL_KEY: string = 'labelForSales';
	public readonly SALES_NUMBER_KEY: string = 'salesNumber';
	public readonly CUSTOMER_SERVICE_LABEL_KEY: string = 'labelForCustomerService';
	public readonly CUSTOMER_SERVICE_NUMBER_KEY: string = 'customerServiceContactNumber';


	// copyright date
	currentYear: number = new Date().getFullYear();

	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	rc: RenderingContext;
	footerConfig: any;
	salesTel: string;
	serviceTel: string;

	constructor(configService: ConfigServiceService) {
		this.configSub = configService.getConfig(Constants.FOOTER_CONFIG).subscribe((context) => {
			this.footerConfig = context;
			this.salesTel = this.convertToTelURL(this.SALES_NUMBER_KEY);
			this.serviceTel = this.convertToTelURL(this.CUSTOMER_SERVICE_NUMBER_KEY);
		});
	}

	trackByPageId (index, page) {
		return page.pageID;
	}

	isImageURLAvailable(elem): boolean {
		return (this.rc && this.footerConfig && this.footerConfig.elements && this.footerConfig.elements[elem]);
	}

	ngOnInit() {
		// this.pages = (this.renderingContext.context['site']) ? this.renderingContext.context['site'].children : [];

	}

	ngOnDestroy() {
		this.configSub.unsubscribe();
	}

	getURL(img) {
		// TODO add fallback logic for rendition
		return this.rc.context.hub.deliveryUrl['origin'] + this.footerConfig.elements[img].renditions.default.url;
	}

	getElementValue(elem): string {

		if (this.footerConfig && this.footerConfig.elements[elem]) {
			return this.footerConfig.elements[elem].value;
		}
		return '';
	}

	convertToTelURL(field): string {
		if (this.footerConfig && this.footerConfig.elements && this.footerConfig.elements[field]) {
			return `+${this.footerConfig.elements[field].value.replace(/\D/g, '')}`;
		}
		return '';
	}
}
