import { LayoutComponent } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeContestRulesComponent } from './../../components/contest-rules/typeContestRulesComponent';
import { WchInfoService } from '@ibm-wch-sdk/ng';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name contestRulesLayout
 * @id contest-rules-layout
 */
@LayoutComponent({
	selector: 'contest-rules-layout',
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
	selector: 'app-contest-rules-layout-component',
	templateUrl: './contestRulesLayout.html',
	styleUrls: ['./contestRulesLayout.scss'],
	preserveWhitespaces: false,
})
export class ContestRulesLayoutComponent extends TypeContestRulesComponent {
	constructor(public wchService: WchInfoService) {
		super();
	}
}
