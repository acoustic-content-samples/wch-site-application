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
import {CommonModule} from '@angular/common';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {environment} from '../environment/environment';
import {WchNgModule, PageComponent, ComponentsService} from 'ibm-wch-sdk-ng';

/* utility pipes */
import {FormattedTextPipe} from './formattedtext/formatted-text.pipe';
import {ItemSortPipe} from './itemSort/item-sort.pipe';

import { ConfigServiceService } from './configService/config-service.service';
import { DateFilterPipe } from './dateFilter/date-filter.pipe';
import { UtilsService } from './utils/utils.service';
import { Link } from './link.component';
import { ViewAllComponent } from '../components/view-all/view-all.component';
import { ShareSocialComponent } from '../components/share-social/share-social.component';


@NgModule({
	imports: [
		WchNgModule.forRoot(environment),
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		FormattedTextPipe,
		ItemSortPipe,
		DateFilterPipe,
		Link,
		ViewAllComponent,
		ShareSocialComponent
	],
	entryComponents: [
	],
	providers: [
		ConfigServiceService,
		UtilsService
	],
	exports: [
		FormattedTextPipe,
		ItemSortPipe,
		DateFilterPipe,
		Link,
		ViewAllComponent,
		ShareSocialComponent
	]
})
export class SiteCommonModule {
}
