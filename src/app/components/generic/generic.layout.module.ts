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

import {environment} from '../../environment/environment';
import {WchNgModule, PageComponent, ComponentsService} from 'ibm-wch-sdk-ng';

import { GalleryComponent } from './gallery/gallery.component';
import { ListComponent } from './list/list.component';
import { CarouselComponent } from './carousel/carousel.component';

import { SiteCommonModule } from '../../common/site.common.module';
import { WchSlickModule } from './carousel/wch-slick/wch-slick.module';


@NgModule({
	imports: [
		WchNgModule.forRoot(environment),
		CommonModule,
		RouterModule,
		FormsModule,
		SiteCommonModule,
		WchSlickModule
	],
	declarations: [
		CarouselComponent,
		GalleryComponent,
		ListComponent
	],
	entryComponents: [
		CarouselComponent,
		GalleryComponent,
		ListComponent
	],
	exports: [
		CarouselComponent,
		GalleryComponent,
		ListComponent
	]
})
export class GenericLayoutModule {
}
