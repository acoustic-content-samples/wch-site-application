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
import { TypeHeroImageComponent } from '../../components/hero-image/typeHeroImageComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/**
 * @name heroImageLayout
 * @id hero-image-layout
 */
@LayoutComponent({
	selector: 'hero-image-layout',
})
@Component({
	selector: 'app-hero-image-layout-component',
	templateUrl: './heroImageLayout.html',
	styleUrls: ['./heroImageLayout.scss'],
})
export class HeroImageLayoutComponent extends TypeHeroImageComponent
	implements OnInit, OnDestroy {
	rContext: RenderingContext;

	public readonly IMAGE_KEY: string = 'image';

	userouterLink = false;

	constructor(public utilService: UtilsService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
		});

		this.safeSubscribe(this.onLink, link => {
			this.userouterLink = this.utilService.useRouterLink(link);
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
