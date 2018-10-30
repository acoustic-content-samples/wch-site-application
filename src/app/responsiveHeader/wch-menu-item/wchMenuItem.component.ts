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
	EventEmitter,
	Output,
} from '@angular/core';

import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Constants } from '../../Constants';
import { Subscription } from 'rxjs';

@Component({
	selector: 'wch-menu-item',
	styleUrls: ['./wch-menu-item.scss'],
	templateUrl: './wch-menu-item.html',
	encapsulation: ViewEncapsulation.None,
})
export class WCHMenuItemComponent implements AfterViewInit, OnDestroy {
	@Input()
	public set aPage(aValue) {
		this.page = aValue;
		this.cachedChildren = new Map<string, any[]>();
	}
	@Input()
	level: number;
	@Output()
	onMenuItemSelected = new EventEmitter<boolean>();

	cachedChildren = new Map<string, any[]>();
	pageToggles = new Map<string, boolean>();
	pages: Array<any> = [];
	page: any;

	/* The maximum level of navigation to display  */
	maxNavigationDepth = 2;

	constructor() {}

	trackByPageId(index, page) {
		return `${page.id}:${page.url}`;
	}

	/*
	 * when a menu item is selected an event will be emitted to the original caller of the wch-menu component.
	 * This allows the caller to close the mobile nav toggle when navigating to a page.
	 */
	menuItemSelected() {
		this.onMenuItemSelected.emit(true);
	}

	ngOnDestroy() {}

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

	getRouteURL(url) {
		return decodeURI(url);
	}

	/* We also need to consider the maximum navigation levels to display when determining visible children */
	hasVisibleChildren(page) {
		return (
			this.getVisibleChildren(page).length > 0 &&
			this.level < this.maxNavigationDepth
		);
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

	displaySubmenu(page) {
		return this.hasVisibleChildren(page) && this.getPageToggle(page);
	}

	ngAfterViewInit() {}
}
