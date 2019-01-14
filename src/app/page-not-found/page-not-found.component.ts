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
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
	ComponentsService,
	LayoutComponent,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import { ConfigServiceService } from '@ibm-wch/components-ng-shared-utilities';
import { Subscription } from 'rxjs';
import { AuthService } from '@ibm-wch/components-ng-shared-utilities';

@LayoutComponent({
	selector: ComponentsService.PAGE_NOT_FOUND_LAYOUT,
})
@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	context: any;
	configSub: Subscription;
	rc: RenderingContext;

	constructor(
		configService: ConfigServiceService,
		public authService: AuthService
	) {
		this.configSub = configService
			.getConfig('404 Error page')
			.subscribe(context => {
				this.context = context;
			});
	}

	ngOnInit() {}

	ngOnDestroy() {
		if (this.configSub) {
			this.configSub.unsubscribe();
		}
	}

	//Check if home page exists
	checkHomepage() {
		const homeUrl =
			this.context &&
			this.context.elements &&
			this.context.elements.goHomeButton
				? this.context.elements.goHomeButton.linkURL
				: null;
		if (!this.rc.context.site.pages || !this.context || !homeUrl) {
			return false;
		}

		for (let i = 0; i < this.rc.context.site.pages.length; i++) {
			//check if there is a page that matches link in goHomeButton. In default, the link is /home
			if (this.rc.context.site.pages[i]['path'] === homeUrl) {
				return true;
			}
		}
		return false;
	}
}
