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
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveHeaderComponent } from './responsiveHeader.component';
import { WCHMenuComponent } from './wch-menu/wchMenu.component';
import { WCHMenuItemComponent } from './wch-menu-item/wchMenuItem.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteCommonModule } from '@ibm-wch/components-ng-shared-utilities';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		SiteCommonModule,
		AngularSvgIconModule,
	],
	declarations: [
		ResponsiveHeaderComponent,
		SearchBoxComponent,
		WCHMenuComponent,
		WCHMenuItemComponent,
	],
	providers: [],
	exports: [ResponsiveHeaderComponent],
})
export class ResponsiveHeaderModule {}
