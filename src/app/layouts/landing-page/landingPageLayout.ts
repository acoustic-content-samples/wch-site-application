import { LayoutComponent, RenderingContext } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeLandingPageComponent } from './../../components/landing-page/typeLandingPageComponent';
import { Constants } from '../../Constants';
import { Subscription } from 'rxjs';
import { WchInfoService } from '@ibm-wch-sdk/ng';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name landingPageLayout
 * @id landing-page-layout
 */
@LayoutComponent({
	selector: 'landing-page-layout',
})
@Component({
	/**
	 * Consider to code your component such that all elements will be immutable and that it only
	 * depends on its inputs. This can e.g. be achieved by basing all state changes on observables.
	 *
	 * @see https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html
	 *
	 * import { ChangeDetectionStrategy } from '@angular/core';
	 */
	// changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-landing-page-layout-component',
	templateUrl: './landingPageLayout.html',
	styleUrls: ['./landingPageLayout.scss'],
	preserveWhitespaces: false,
})
export class LandingPageLayoutComponent extends TypeLandingPageComponent {
	constructor (
		public wchService: WchInfoService,
		public utilsService: UtilsService
	) {
		super();
	}
}
