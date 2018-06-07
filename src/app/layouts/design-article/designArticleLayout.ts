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
	LayoutComponent, RenderingContext
} from '@ibm-wch-sdk/ng';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { TypeDesignArticleComponent } from '../../components/design-article/typeDesignArticleComponent';
import { UtilsService } from '../../common/utils/utils.service';
import {Constants} from '../../Constants';

/**
 * @name designArticleLayout
 * @id design-article-layout
 */
@LayoutComponent({
	selector: 'design-article-layout'
})
@Component({
	selector: 'app-design-article-layout-component',
	templateUrl: './designArticleLayout.html',
	styleUrls: ['./designArticleLayout.scss']
})
export class DesignArticleLayoutComponent extends TypeDesignArticleComponent implements OnInit, OnDestroy {

	rContext: RenderingContext;
	matchingBodyImages: any[];
	leftoverBodyImages: any[];
	constants: any = Constants;

	readonly TOPIC_TITLE_KEY: string = 'heading';
	readonly LEAD_IMG_KEY: string = 'mainImage';
	readonly BYLINE_KEY: string = 'byline';
	readonly AUTHOR_KEY: string = 'author';
	readonly DATE_KEY: string = 'date';
	readonly TEXT_FOR_BODY_KEY: string = 'body';
	readonly IMAGE_FOR_BODY_KEY: string = 'bodyImage';
	readonly AUTHOR_BIO_KEY: string = 'authorBio';



	@Input() layoutMode: string;

	constructor(utilsService: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
			this.rContext = renderingContext;

			this.layoutMode = this.layoutMode || this.constants.DETAIL;

			this.matchingBodyImages = [];
			// in draft the formattedtexts may not be populated
			if (this.rContext.formattedtexts) {
				const numOfBodyTexts = this.rContext.formattedtexts[this.TEXT_FOR_BODY_KEY].length;

				if (this.rContext.references && this.rContext.references[this.IMAGE_FOR_BODY_KEY]) {
					const numOfBodyImages = this.rContext.references[this.IMAGE_FOR_BODY_KEY].length;
					if (numOfBodyTexts > 0) {
						this.matchingBodyImages = this.rContext.references[this.IMAGE_FOR_BODY_KEY].slice(0, numOfBodyTexts);
					}
					if (numOfBodyImages > numOfBodyTexts) {
						this.leftoverBodyImages = this.rContext.references[this.IMAGE_FOR_BODY_KEY].slice(numOfBodyTexts);
					}
				}
			}
		});
	}

	ngOnDestroy () {
		super.ngOnDestroy();
	}

}
