import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractLandingPageComponent } from './abstractLandingPageComponent';
import { Subscription } from 'rxjs';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name Landing page
 * @id 5cd736ef-d01c-4dd9-9794-14b2473e9239
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-landing-page-component',
  templateUrl: './typeLandingPageComponent.html',
  styleUrls: ['./typeLandingPageComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeLandingPageComponent extends AbstractLandingPageComponent
	implements OnInit, OnDestroy {
	/*
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

	public readonly IMAGE_KEY_1: string = 'featureImage1';
	public readonly IMAGE_KEY_2: string = 'featureImage2';
	public readonly IMAGE_KEY_3: string = 'featureImage3';
	public readonly RENDITION_KEY: string = 'large';

	rContext: RenderingContext;
	rcSub: Subscription;

	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.rcSub = this.onRenderingContext.subscribe(renderingContext => {
			this.rContext = renderingContext;
		});
	}

	ngOnDestroy() {
		this.rcSub.unsubscribe();
	}
}
