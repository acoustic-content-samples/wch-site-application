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
import { TypeAuthorProfileComponent } from '../../components/author-profile/typeAuthorProfileComponent';
import { Constants } from '../../Constants';
import { Subscription } from 'rxjs';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/**
 * @name authorProfileLayout
 * @id author-profile-layout
 */
@LayoutComponent({
	selector: 'author-profile-layout',
})
@Component({
	selector: 'app-author-profile-layout-component',
	templateUrl: './authorProfileLayout.html',
	styleUrls: ['./authorProfileLayout.scss'],
})
export class AuthorProfileLayoutComponent extends TypeAuthorProfileComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;
	constants: any = Constants;

	readonly AUTHOR_PICTURE_KEY: string = 'profilePicture';
	readonly AUTHOR_PICTURE_RENDITION_KEY: string = 'closeUp';

	constructor(private utilsService: UtilsService) {
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

	getImageUrl(): string {
		return this.utilsService.getImageUrl(
			this.rContext,
			this.AUTHOR_PICTURE_KEY,
			this.AUTHOR_PICTURE_RENDITION_KEY
		);
	}
}
