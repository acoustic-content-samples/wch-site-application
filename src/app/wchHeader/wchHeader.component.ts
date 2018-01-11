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
	ViewChildren,
	ViewChild,
	QueryList,
	ElementRef,
	ViewEncapsulation,
	NgZone
} from '@angular/core';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {LayoutComponent, RenderingContext, AbstractRenderingComponent} from 'ibm-wch-sdk-ng';
import {ConfigServiceService} from '../common/configService/config-service.service';
import {Constants} from '../Constants';
import {Subscription} from 'rxjs/Subscription';
Foundation.addToJquery($);

@Component({
	selector: 'wch-header',
	styleUrls: ['./wch-header.scss'],
	templateUrl: './wch-header.html',
	encapsulation: ViewEncapsulation.None
})
export class WchHeaderComponent implements AfterViewInit, OnDestroy {
	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
		this.cachedChildren = new Map<string, any[]>();
	}

	@ViewChildren('navLoop') navLoop: QueryList<any>;
	@ViewChild('dropdownToggle') dropdownToggle: ElementRef;

	rc: RenderingContext;
	headerConfig: any;
	public readonly LOGO: string = 'websiteLogo';
	configSub: Subscription;
	navSub: Subscription;
	navInitialized = false;
	cachedChildren = new Map<string, any[]>();


	constructor(configService: ConfigServiceService, private zone: NgZone) {

		this.configSub = configService.getConfig(Constants.HEADER_CONFIG).subscribe((context) => {
			this.headerConfig = context;
		});

	}

	trackByPageId (index, page) {
		return page.pageID;
	}

	isImageURLAvailable(elem): boolean {
		return (this.rc && this.headerConfig && this.headerConfig.elements && this.headerConfig.elements[elem]);
	}

	ngOnDestroy() {
		this.configSub.unsubscribe();
		this.navSub.unsubscribe();
		$('#header').foundation('destroy');
		this.navInitialized = false;
	}

	getURL(img) {
		// TODO add fallback logic for rendition
		return this.rc.context.hub.deliveryUrl['origin'] + this.headerConfig.elements[img].renditions.default.url;
	}

	isSelected(page: any) {
		return this.rc.id === page.contentId;
	}

	menuItemSelected() {
		this.zone.runOutsideAngular(() => {
			$(this.dropdownToggle.nativeElement).foundation('toggleMenu');
		});
	}


	getRouteURL(url) {
		return decodeURI(url);
	}

	hasVisibleChildren(page) {
		return this.getVisibleChildren(page).length > 0;

	}

	getVisibleChildren(page): any[] {
		if(this.cachedChildren.get(page.id)){
			return this.cachedChildren.get(page.id);
		} else {
			let visibleChildren = page.children.filter((child) => {
				return !child.hideFromNavigation;
			});
			this.cachedChildren.set(page.id, visibleChildren);
			return visibleChildren
		}
	}


	ngAfterViewInit() {
		this.navSub = this.navLoop.changes.subscribe(item => {
			if (this.navInitialized) {
				this.zone.runOutsideAngular(()=> {
					Foundation.reInit(['dropdown-menu', 'responsive-menu', 'responsive-toggle'])
				})
			} else {
				this.zone.runOutsideAngular(() => {
					$('#header').foundation();
					this.navInitialized = true;
				});
			}
		});
	}
}
