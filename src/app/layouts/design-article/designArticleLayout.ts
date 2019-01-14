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
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TypeDesignArticleComponent } from '../../components/design-article/typeDesignArticleComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';
import { Constants } from '../../Constants';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

/**
 * @name designArticleLayout
 * @id design-article-layout
 */
@LayoutComponent({
	selector: 'design-article-layout',
})
@Component({
	selector: 'app-design-article-layout-component',
	templateUrl: './designArticleLayout.html',
	styleUrls: ['./designArticleLayout.scss'],
})
export class DesignArticleLayoutComponent extends TypeDesignArticleComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	matchingBodyImages: any[];
	matchingBodyImages$: Observable<any[]>;
	leftoverBodyImages: any[];
	constants: any = Constants;

	public numOfBodyTexts: number;
	public readonly LEAD_IMAGE_KEY: string = 'leadImage';
	public readonly IMAGE_KEY: string = 'image';
	public readonly IMAGE_SIZE_KEY: string = 'imageSize';
	public readonly CAPTION_KEY: string = 'imageCaption';
	public readonly CREDIT_KEY: string = 'imageCredit';
	public readonly IMAGE_PLACEMENT_KEY: string = 'imagePlacement';

	@Input()
	layoutMode: string;

	constructor(public utilsService: UtilsService) {
		super();
    this.matchingBodyImages$ = this.onRenderingContext.pipe(map(renderingContext => {
      const body = renderingContext.elements.body;
      const bodyImage = renderingContext.elements.bodyImage;
      let returnValue = [];
      if (body && body.values && bodyImage && bodyImage.values) {
        const numOfBodyTexts = body.values.length;


        const numOfBodyImages = bodyImage.values.length;
        if (numOfBodyTexts > 0) {

          returnValue = bodyImage.values.slice(
            0,
            numOfBodyTexts
          );
        }

        if (numOfBodyImages > numOfBodyTexts) {
          this.leftoverBodyImages = this.bodyImage.slice(
            this.numOfBodyTexts
          );
        }


      }
      return returnValue;
    }));

  }

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.layoutMode = this.layoutMode || this.constants.DETAIL;
			this.matchingBodyImages = [];
			// in draft the formattedtexts may not be populated
			if (this.body) {
				this.numOfBodyTexts = this.body.length;

				if (this.bodyImage) {
					const numOfBodyImages = this.bodyImage.length;
					if (this.numOfBodyTexts > 0) {
						this.matchingBodyImages = this.bodyImage.slice(
							0,
							this.numOfBodyTexts
						);
					}
					if (numOfBodyImages > this.numOfBodyTexts) {
						this.leftoverBodyImages = this.bodyImage.slice(
							this.numOfBodyTexts
						);
					}
				}
			}
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	getImageClass(imageContext) {
		if (imageContext) {
			const imageSize = this.utilsService
				.getFirstCategoryValue(
					imageContext[this.IMAGE_SIZE_KEY],
					'medium'
				)
				.toLowerCase();
			return `article-${imageSize}-image`;
		}
		return '';
	}

	getImageContainerClass(imageContext) {
		if (imageContext) {
			const imagePlacement = this.utilsService
				.getFirstCategoryValue(
					imageContext[this.IMAGE_PLACEMENT_KEY],
					'left'
				)
				.toLowerCase();
			return `article-image-container place-image-${imagePlacement}`;
		}
		return '';
	}

	getBodyImageURL(imageContext) {
		if (imageContext) {
			const imageSize = this.utilsService
				.getFirstCategoryValue(
					imageContext[this.IMAGE_SIZE_KEY],
					'medium'
				)
				.toLowerCase();
			return this.utilsService.getBodyImageUrl(
				this.rContext,
				imageContext,
				this.IMAGE_KEY,
				imageSize
			);
		}
		return '';
	}
}
