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
	ViewEncapsulation,
} from '@angular/core';

import { RenderingContext } from '@ibm-wch-sdk/ng';
import { ConfigServiceService } from '@ibm-wch/components-ng-shared-utilities';
import { Constants } from '../Constants';
import { Subscription } from 'rxjs';
import { AuthService } from '@ibm-wch/components-ng-shared-utilities';
import { Router } from '@angular/router';
import { RefreshService } from '@ibm-wch-sdk/ng';
import { take } from 'rxjs/operators';

@Component({
	selector: 'responsive-header',
	styleUrls: ['./responsive-header.scss'],
	templateUrl: './responsive-header.html',
	encapsulation: ViewEncapsulation.None,
})
export class ResponsiveHeaderComponent implements AfterViewInit, OnDestroy {
	@Input()
	public set renderingContext (aValue: RenderingContext) {
	  if ( aValue && aValue.context && aValue.context.site) {
      this.configSub = this.configService.getConfig(Constants.HEADER_CONFIG.concat(':', aValue.context.site.name)).subscribe((context) => {
        if (context && context.id) {
          this.headerConfig = context;
        } else {
           this.configService.getConfig(Constants.HEADER_CONFIG).pipe(take(1)).subscribe((defaultContext) => {
            if (defaultContext && defaultContext.id) {
              this.headerConfig = defaultContext;
            }
          });
        }
      });
    }
		this.rc = aValue;
		if (aValue) {
			if (this._hasPagesChanged(aValue.context.site.pages)) {
				this.pages = aValue.context.site.pages;
			}
		}
		this.cachedChildren = new Map<string, any[]>();
	}

	rc: RenderingContext;
	headerConfig: any;
	public readonly LOGO: string = 'websiteLogo';
	configSub: Subscription;
	cachedChildren = new Map<string, any[]>();
	pageToggles = new Map<string, boolean>();
	mobileNavToggle: boolean = false;
	pages: Array<any> = [];
	configService: ConfigServiceService;

	constructor(
		configService: ConfigServiceService,
		public authService: AuthService,
		private router: Router,
		private SDKRefreshService: RefreshService
	) {
		this.configService = configService;

		authService.getCurrentUser().subscribe(res => {
			const name = res && res.externalId ? res.externalId : 'no user';
		});
	}

	_hasPagesChanged(newPages) {
		let current = newPages || [];
		let previous = this.pages || [];

		return JSON.stringify(current) != JSON.stringify(previous);
	}

	trackByPageId(index, page) {
		return `${page.id}:${page.url}`;
	}

	isImageURLAvailable(elem): boolean {
		return (
			this.rc &&
			this.headerConfig &&
			this.headerConfig.elements &&
			this.headerConfig.elements[elem]
		);
	}

	ngOnDestroy() {
		if (this.configSub) {
			this.configSub.unsubscribe();
		}
	}

	login() {
		this.closeMobileNav();
		this.router.navigate([Constants.SIGN_IN_PAGE]);
	}

	logout() {
		this.authService.logout().subscribe(res => {
			this.SDKRefreshService.refresh();
			console.log('SDK is refreshed after logging out');
		});
	}

	getURL(img) {
		// TODO add fallback logic for rendition
		return (
			this.rc.context.hub.deliveryUrl['origin'] +
			this.headerConfig.elements[img].renditions.default.url
		);
	}

	toggleMobileNav() {
		this.mobileNavToggle = !this.mobileNavToggle;
	}

	/*
		When the search form is submitted we want to force the mobileNav to collapse
	 */
	closeMobileNav() {
		this.mobileNavToggle = false;
	}

	/*
		Toggle submenu by parent page,  on mouseleave we want to force the submenu to close
	 */
	toggleSubmenu(page, forceClose) {
		if (this.hasVisibleChildren(page)) {
			if (forceClose) {
				this._setPageToggle(page, false);
			} else {
				this._setPageToggle(page, !this.getPageToggle(page));
			}
		}
	}

	getPageToggle(page) {
		return this.pageToggles.get(page) || false;
	}

	_setPageToggle(page, value) {
		this.pageToggles.set(page, value);
	}

	menuItemSelected() {
		this.toggleMobileNav();
	}

	getRouteURL(url) {
		return decodeURI(url);
	}

	hasVisibleChildren(page) {
		return this.getVisibleChildren(page).length > 0;
	}

	getVisibleChildren(page): any[] {
		if (this.cachedChildren.get(page.id)) {
			return this.cachedChildren.get(page.id);
		} else {
			let visibleChildren = page.children.filter(child => {
				return !child.hideFromNavigation;
			});
			this.cachedChildren.set(page.id, visibleChildren);
			return visibleChildren;
		}
	}

	ngAfterViewInit() {}
}
