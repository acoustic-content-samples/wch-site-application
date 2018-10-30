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
import { TypeImageWithInformationComponent } from '../../components/image-with-information/typeImageWithInformationComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/**
 * @name imageLayout
 * @id image-layout
 */
@LayoutComponent({
	selector: 'article-image-layout',
})
@Component({
	selector: 'app-image-with-information-layout-component',
	templateUrl: './imageWithInformationLayout.html',
	styleUrls: ['./imageWithInformationLayout.scss'],
})
export class ImageWithInformationLayoutComponent
	extends TypeImageWithInformationComponent
	implements OnInit, OnDestroy {
	public readonly IMAGE_KEY: string = 'image';
	public readonly IMAGE_SIZE_KEY: string = 'imageSize';
	public readonly CAPTION_KEY: string = 'imageCaption';
	public readonly CREDIT_KEY: string = 'imageCredit';
	public readonly IMAGE_PLACEMENT_KEY: string = 'imagePlacement';

	rContext: RenderingContext;
	imageSizeStr: string;
	imagePlacementStr: string;

	constructor(private utilsService: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.imageSizeStr = this.utilsService.getFirstCategory(
				this.rContext,
				this.IMAGE_SIZE_KEY,
				'medium',
				true
			);
			this.imagePlacementStr = this.utilsService.getFirstCategory(
				this.rContext,
				this.IMAGE_PLACEMENT_KEY,
				'left',
				true
			);
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	getImageClass() {
		return `article-${this.imageSizeStr}-image place-image-${
			this.imagePlacementStr
		}`;
	}
}
