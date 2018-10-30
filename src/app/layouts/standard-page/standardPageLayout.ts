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
import { LayoutComponent, RenderingContext } from '@ibm-wch-sdk/ng';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypeStandardPageComponent } from '../../components/standard-page/typeStandardPageComponent';

/**
 * @name standardPageLayout
 * @id standard-page-layout
 */
@LayoutComponent({
	selector: 'standard-page-layout',
})
@Component({
	selector: 'app-standard-page-layout-component',
	templateUrl: './standardPageLayout.html',
	styleUrls: ['./standardPageLayout.scss'],
})
export class StandardPageLayoutComponent extends TypeStandardPageComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;

	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
