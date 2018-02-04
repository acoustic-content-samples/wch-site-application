import {
	LayoutComponent
} from 'ibm-wch-sdk-ng';
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {trigger, style, transition, animate, group} from '@angular/animations';
import {TypeSearchResultsComponent} from './../../components/search-results/typeSearchResultsComponent';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {Constants} from "../../Constants";

const lucene = require('lucene-query-string-builder');

import * as _ from 'lodash';

declare var $: any;


/**
	* @name searchResultsLayout
	* @id search-results-layout
	*/
@LayoutComponent({
	selector: 'search-results-layout'
})
@Component({
	selector: 'app-search-results-layout-component',
	templateUrl: './searchResultsLayout.html',
	styleUrls: ['./searchResultsLayout.scss'],
	animations: [
		trigger('itemAnim', [
			transition(':enter', [
				style({opacity: 0}),
				animate(300)
			])
		])
	]
})
export class SearchResultsLayoutComponent extends TypeSearchResultsComponent implements AfterViewInit, OnDestroy, OnInit {
	searchResults: any[] = [];
	numFound: number;
	constants: any = Constants;
	searchTerm: string = '';
	navSub: Subscription;
	inFlight: boolean;
	searchError: boolean = false;
	searchTypes: string[] = [];


	//rowsPerRequest is used for customization purpose. It defines the # of search results returned from server per API request. In default, it is 3.
	rowsPerRequest: number = 3;

	start: number = 0;

	@ViewChild('loadIcon') loadIndicator: ElementRef;
	public readonly SEARCH_CONTENT_TYPE_KEY = 'pageTypesToSearch';

	constructor(route: ActivatedRoute, private http: Http) {
		super();

		this.navSub = route
			.queryParamMap
			.map(params => params.get('searchTerm') || '')
			.subscribe((searchTerm) => {
				searchTerm = searchTerm.trim();
				if (searchTerm.length > 0) {
					this.searchTerm = searchTerm;
					this.inFlight = true;
					this.searchResults = [];
					this.start = 0;
					this.searchError = false;
					this.searchTypes = Constants.PAGE_TYPES_SEARCHED;
					this._search();
				}
			});
	}

	ngOnInit() {
		super.ngOnInit();
	}

	_scrollHandler = () => {
		/*
		 On page load we need to check in the loading icon is on screen.  If so, load more items until it is not longer
		 visible or scroll reaches 70%
		 */

		let scrollTop = $(document).scrollTop();
		let scrollPercentage = (scrollTop / ($(document).height() - $(window).height()));

		if (this.loadIndicator) {
			let rect = this.loadIndicator.nativeElement.getBoundingClientRect();
			let clientHeight = document.documentElement.clientHeight;
			let windowHeight = $(window).innerHeight();
			let viewHeight = Math.max(clientHeight, windowHeight);
			if (scrollPercentage > 0.70 || !(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
				this.getMoreResults();
			}
		}
	}

	ngAfterViewInit() {
		//throttle the scroll event to improve performance
		$(window).on(
			'scroll',
			_.throttle(this._scrollHandler, 300)
		);
	}

	_getTerms(){
		const builder = lucene.builder((str) => {
			if((str.charAt(0) === '"') && str.charAt(str.length - 1) === '"'){
				let term = str;
				return lucene.group(lucene.or(
					lucene.field('text', term),
					lucene.field('name', term)
				));
			} else {
				let fields = [];
				str.trim().split(/[\s]/).forEach((term) => {
					fields.push(lucene.group(
						lucene.or(
							lucene.field('text', term),
							lucene.field('name', term)
						)))
				});
				return lucene.group(lucene.and(...fields));
			}
		});
		return encodeURIComponent(builder(this.searchTerm));
	}

	_getTypes() {
		if (this.searchTypes.length === 0)	{
			return '';
		}

		const builder = lucene.builder((str) => {
				let fields = [];
				this.searchTypes.forEach((item) => {
					fields.push(lucene.field('type', lucene.term(item)));
				});
				return lucene.group(lucene.or(...fields));
		});
		return encodeURIComponent(`&fq=` + builder(this.searchTerm));
	}

	_search() {
		let apiUrl = (window.location.hostname === 'localhost') ? Constants.apiUrl : `${window.location.protocol}//${window.location.hostname}/api/${window.location.pathname.split('/')[1]}`;
		let baseUrl = `${apiUrl}/delivery/v1/search`;
		let queryString = `?q=siteId:default`
			+ this._getTypes()
			+ `&fq={!join from=id to=aggregatedContentIds}classification:content AND ${this._getTerms()}`
			+ `&rows=${this.rowsPerRequest}&start=${this.start * this.rowsPerRequest}&fl=*`;


		let searchURL = `${baseUrl}${queryString}`;
		console.log(`searchURL: ${searchURL}`);

		this.start++;
		this.http.get(searchURL).map((response) => {
			return response.json();
		}).subscribe(
			(res) => {
				this.inFlight = false;
				this.numFound = res.numFound;
				this.searchResults = this.searchResults.concat(res.documents);
				this._scrollHandler();
			},
			(err) => {
				this.searchError = true;
				this.inFlight = false;
			});
	}

	getMoreResults() {
		if (this.moreToLoad()) {
			this._search();
		}
	}

	moreToLoad() {
		return this.numFound > (this.rowsPerRequest * this.start);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		this.navSub.unsubscribe();
		$(window).off(
			'scroll',
			_.throttle(this._scrollHandler, 300)
		);
	}
}
