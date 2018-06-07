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
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {
	AbstractRenderingComponent,
	LayoutComponent,
	RenderingContext
} from '@ibm-wch-sdk/ng';

import { UtilsService } from '../../common/utils/utils.service';

@LayoutComponent({
	selector: 'article-body-image'
})
@Component({
  selector: 'app-article-body-image',
  templateUrl: './article-body-image.component.html',
  styleUrls: ['./article-body-image.component.scss']
})
export class ArticleBodyImageComponent extends AbstractRenderingComponent implements OnInit, OnDestroy {

	public readonly IMAGE_KEY: string = 'image';
	public readonly IMAGE_SIZE_KEY: string = 'imageSize';
	public readonly CAPTION_KEY: string = 'imageCaption';
	public readonly CREDIT_KEY: string = 'imageCredit';
	public readonly IMAGE_PLACEMENT_KEY: string = 'imagePlacement';

	rContext: RenderingContext;
	rcSub: Subscription;
	imageSize: string;
	imagePlacement: string;


	constructor(private utilsService: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.rcSub = this.onRenderingContext.subscribe((renderingContext) => {
			this.rContext = renderingContext;
			this.imageSize = this.utilsService.getFirstCategory(this.rContext, this.IMAGE_SIZE_KEY, 'medium');
			this.imagePlacement = this.utilsService.getFirstCategory(this.rContext, this.IMAGE_PLACEMENT_KEY, 'left');
		});
	}

	ngOnDestroy() {
		this.rcSub.unsubscribe();
	}

	getImageClass() {

		return `article-${this.imageSize}-image wrap-text-${this.imagePlacement}`;
	}
}
