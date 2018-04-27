import {
  LayoutComponent
} from 'ibm-wch-sdk-ng';
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {trigger, style, transition, animate, group} from '@angular/animations';
import {TypeSearchResultsComponent} from './../../components/search-results/typeSearchResultsComponent';
import {Subscription} from "rxjs/Subscription";
import {Observable} from 'rxjs/Observable';
import {throttle} from 'rxjs/operators';
import {interval} from 'rxjs/observable/interval';
import 'rxjs/add/observable/fromEvent';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../Constants";
import {AuthService} from '../../common/authService/auth-service.service';

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
  searchKeywords: string[] = [];
  navSub: Subscription;
  inFlight: boolean;
  searchError: boolean = false;
  searchTypes: string[] = [];
  scrollEvent: Subscription;


  //rowsPerRequest is used for customization purpose. It defines the # of search results returned from server per API request. In default, it is 3.
  rowsPerRequest: number = 3;

  start: number = 0;

  @ViewChild('loadIcon') loadIndicator: ElementRef;
  public readonly SEARCH_CONTENT_TYPE_KEY = 'pageTypesToSearch';

  constructor(route: ActivatedRoute, private http: HttpClient, private authService: AuthService) {
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
          this.searchKeywords = searchTerm.split(/[\s&#.,]/);
          this.searchKeywords.forEach(function(word, index, array) {
            array[index] = word.replace(/[-[\]{}()+\-*"&!~?:\\^|]/g, '\\$&');
          });
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
    let scroll = Observable.fromEvent(window, 'scroll');
    scroll = scroll.pipe(throttle(value => interval(300)));
    this.scrollEvent =  scroll.subscribe(() => this._scrollHandler());
  }


  _search() {
    let apiUrl = (window.location.hostname === 'localhost') ? Constants.apiUrl : `${window.location.protocol}//${window.location.hostname}/api/${window.location.pathname.split('/')[1]}`;
    let deliveryQuery = this.authService.isLoggedIn() ? 'mydelivery' : 'delivery';
    let textQuery = this.searchKeywords.reduce((query, currentVal,index) => {
      return (index === 0) ? `${currentVal}~1` : `${query} AND ${currentVal}~1`;
    },'');
    let typeQuery = this.searchTypes.reduce((types, currentVal, index) => {
      return (index === 0) ? `&fq=type:"${currentVal}"` : `${types} OR type:"${currentVal}"`;
    }, '');

    let searchURL = `${apiUrl}/${deliveryQuery}/v1/search?q=classification:page`
      + typeQuery
      + `&fq={!join%20from=id%20to=aggregatedIds}`
      + `text:(${textQuery})`
      + `&rows=${this.rowsPerRequest}&start=${this.start * this.rowsPerRequest}&fl=*`;

    console.log(`searchURL: ${searchURL}`);
    this.start++;
    this.http.get(searchURL).subscribe(
      (res: any) => {
        this.inFlight = false;
        this.numFound = res.numFound;
        this.searchResults = this.searchResults.concat(res.documents);
        this._scrollHandler();
      },
      (err) => {
        this.searchError = true;
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
    this.scrollEvent.unsubscribe();
	}
}
