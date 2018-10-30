import { LayoutComponent } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeSocialComponent } from './../../components/social-component/typeSocialComponent';
import { WchInfoService } from '@ibm-wch-sdk/ng';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name socialComponentLayout
 * @id social-component-layout
 */
@LayoutComponent({
	selector: 'social-component-layout',
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
	selector: 'app-social-component-layout-component',
	templateUrl: './socialComponentLayout.html',
	styleUrls: ['./socialComponentLayout.scss'],
	preserveWhitespaces: false,
})
export class SocialComponentLayoutComponent extends TypeSocialComponent {
	constructor(public wchService: WchInfoService) {
		super();
	}
}
