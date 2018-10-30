import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from '../../Constants';

import 'rxjs/add/operator/map';

declare var $: any;

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnDestroy {
	@Output()
	onSearch = new EventEmitter<boolean>();

	query: string = '';
	navSub: Subscription;
	constants: any = Constants;

	constructor(private router: Router, private activeRoute: ActivatedRoute) {
		this.navSub = activeRoute.queryParamMap
			.map(params => params.get('searchTerm') || '')
			.subscribe(searchTerm => {
				this.query = searchTerm;
			});
	}

	ngOnDestroy() {
		this.navSub.unsubscribe();
	}

	search() {
		this.onSearch.emit();
		let navigationExtras: NavigationExtras = {
			queryParams: { searchTerm: this.query },
		};

		this.router.navigate(
			[this.constants.SEARCH_RESULTS_PAGE_PATH],
			navigationExtras
		);
		return false;
	}

	keyDown($event: any) {
		if ($event.which === 13) {
			this.search();
		}
	}

	clearSearch() {
		this.query = '';
	}
}
