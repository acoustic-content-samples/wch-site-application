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
import {
	Component,
	Input,
	OnDestroy,
	AfterViewInit,
	AfterViewChecked,
	ViewChildren,
	ViewChild,
	QueryList,
	ElementRef,
	ViewEncapsulation, OnChanges, SimpleChanges
} from '@angular/core';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {LayoutComponent, RenderingContext, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {ConfigServiceService} from "../common/configService/config-service.service";
import {Constants} from "../Constants";
import {Subscription} from "rxjs/Subscription";
Foundation.addToJquery($);

@Component({
	selector: 'wch-header',
	styleUrls: ['./wch-header.scss'],
	templateUrl: './wch-header.html',
	encapsulation: ViewEncapsulation.None
})
export class WchHeaderComponent implements AfterViewInit, OnDestroy, OnChanges {
	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	@ViewChildren('navLoop') navLoop: QueryList<any>;
	@ViewChild('navMenu') navMenu: ElementRef;
	@ViewChild('dropdownToggle') dropdownToggle: ElementRef;

	rc: RenderingContext;
	headerConfig: any;
	public readonly LOGO: string = 'websiteLogo';
	configSub: Subscription;
	navSub: Subscription;
	navigationChanged: boolean = false;


	constructor(configService: ConfigServiceService) {

		this.configSub = configService.getConfig(Constants.HEADER_CONFIG).subscribe((context) => {
			this.headerConfig = context;
		});

	}

	isImageURLAvailable(elem): boolean {
		return (this.rc && this.headerConfig && this.headerConfig.elements && this.headerConfig.elements[elem]);
	}

	ngOnDestroy() {
		this.configSub.unsubscribe();
		this.navSub.unsubscribe();
		$(this.navMenu.nativeElement).foundation('destroy');
	}

	getURL(img) {
		//TODO add fallback logic for rendition
		return this.rc.context.hub.deliveryUrl['origin'] + this.headerConfig.elements[img].renditions.default.url;
	}

	isSelected(page: any) {
		return this.rc.id === page.contentId;
	}

	menuItemSelected() {
		$(this.dropdownToggle.nativeElement).foundation('toggleMenu');
	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes['renderingContext'].currentValue !== changes['renderingContext'].previousValue) {
			this.navigationChanged = true;

		}
	}

	getRouteURL(url){
		return decodeURI(url);
	}


	ngAfterViewInit() {
		this.navSub = this.navLoop.changes.subscribe(item => {
			if (this.navigationChanged) {
				//Navigation possibly changed,  destroy the nav menu and rebuild.
				try {
					this.navigationChanged = false;
					$('#nav-responsive-menu').foundation('_destroy');
					$('#nav-responsive-menu').foundation();
				} catch (e) {
					//if foundations was already destroyed this will throw an error but no need to log it
				}
			}
			$('#header').foundation();
		});
	}
}
