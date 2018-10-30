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
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewEncapsulation,
} from '@angular/core';
import {
	AbstractRenderingComponent,
	LayoutComponent,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import { TypeDesignArticleComponent } from '../../components/design-article/typeDesignArticleComponent';
import { Constants } from '../../Constants';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';
import { Subscription } from 'rxjs';

@LayoutComponent({
	selector: 'design-article-summary',
})
@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-design-article-summary',
	templateUrl: './design-article-summary.component.html',
	styleUrls: ['./design-article-summary.component.scss'],
})
export class DesignArticleSummaryComponent extends TypeDesignArticleComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	constants: any = Constants;
	rcSub: Subscription;

	readonly TOPIC_TITLE_KEY: string = 'heading';
	readonly LEAD_IMG_KEY: string = 'mainImage';

	@Input()
	layoutMode: string;

	constructor(public utils: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.rcSub = this.onRenderingContext.subscribe(renderingContext => {
			this.rContext = renderingContext;
			this.layoutMode = this.layoutMode || this.constants.SUMMARY;
		});
	}

	ngOnDestroy() {
		this.rcSub.unsubscribe();
	}
}
