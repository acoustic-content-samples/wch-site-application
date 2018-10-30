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
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'wch-menu',
	styleUrls: ['./wch-menu.scss'],
	templateUrl: './wch-menu.html',
	encapsulation: ViewEncapsulation.None,
})
export class WCHMenuComponent implements AfterViewInit, OnDestroy {
	@Input()
	pages: any[];
	@Input()
	level: number;
	@Output()
	onMenuItemSelected = new EventEmitter<any>();

	constructor() {
		this.level = this.level || 1;
	}

	trackByPageId(index, page) {
		return `${page.id}:${page.url}`;
	}

	/*
	 * when a menu item is selected an event will be emitted to the original caller of the wch-menu component.
	 * This allows the caller to close the mobile nav toggle when navigating to a page.
	 */
	menuItemSelected() {
		this.onMenuItemSelected.emit();
	}

	ngOnDestroy() {}

	ngAfterViewInit() {}
}
