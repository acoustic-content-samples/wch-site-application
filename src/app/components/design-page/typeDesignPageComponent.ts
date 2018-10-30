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
import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractDesignPageComponent } from './abstractDesignPageComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';
import { Subscription } from 'rxjs';
import { Constants } from '../../Constants';
import { luceneEscapeTerm } from '@ibm-wch-sdk/utils';


/**
 * @name Design page
 * @id bb79c338-1e20-4d53-9ff3-9a6970ad9ed3
 * @description Design topic uses a two column layout with options for the column widths.  Decide if you want a 75/25% split in column width or 25/75% split in column width.
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
 @Component({
 selector: 'app-type-design-page-component',
 templateUrl: './typeDesignPageComponent.html',
 styleUrls: ['./typeDesignPageComponent.scss']
 })
 */
export class TypeDesignPageComponent extends AbstractDesignPageComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	layoutMode: string;

	constants: any = Constants;

	constructor(public utils: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.layoutMode = this.layoutMode || this.constants.DETAIL;
			this.rContext = renderingContext;
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	navLink() {
		const decodedLink = decodeURIComponent(this.utils.getNavLink(
			this.renderingContext,
			this.renderingContext.id
		));
		return decodedLink;
	}
}
