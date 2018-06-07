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
	Input, OnDestroy,
	ViewEncapsulation,
} from '@angular/core';
import {RenderingContext} from '@ibm-wch-sdk/ng';
import 'slick-carousel';
import {Constants} from '../../../Constants';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy{

	@Input()
	public set renderingContexts(aValue: RenderingContext[]) {
		if (aValue) {
			this.slides = aValue;
		}
	}

	constants: any = Constants;
	slides: RenderingContext[] = [];
	private resizeSub: Subscription;
	private screenWidth: number;
	slideConfig: any;
	slidesToShow: number;

	constructor() {
		this.resizeSub = Observable.fromEvent(window, 'resize')
			.debounceTime(500)
			.distinctUntilChanged()
			.subscribe((screen: any) => {
				this.screenWidth = screen.target.innerWidth;

				this._initializeConfig();
			});


		this.screenWidth = window.innerWidth;


		this._initializeConfig();
	}

	 _initializeConfig () {
			// set default configuration
			const slidesToShow = this.getSlidesToShow();

			this.slideConfig = {
				'speed': 500, 'slidesToShow': slidesToShow, 'slidesToScroll': slidesToShow, 'dots': false, 'arrows': true
			};
	}

	isBreakpoint(breakpoint: string = '') {
		let res = false;

		switch (breakpoint.toLowerCase()) {
			case 'small': {
				res = (this.screenWidth <= 640);
				break;
			}
			case 'medium': {
				res =  (641 <= this.screenWidth && this.screenWidth <= 1024);
				break;
			}
			case 'large': {
				res =  (1025 <= this.screenWidth && this.screenWidth <= 1440);
				break;
			}
			case 'xlarge': {
				res =  (1441 <= this.screenWidth && this.screenWidth <= 1920);
				break;
			}
			case 'xxlarge': {
				res =  (1921 <= this.screenWidth);
				break;
			}
		}

		return res;

	}

	getBreakpoint() {
		if (this.screenWidth <= 640) {
			return 'small';
		} else if (641 <= this.screenWidth && this.screenWidth <= 1024) {
			return 'medium';
		} else if (1025 <= this.screenWidth && this.screenWidth <= 1440) {
			return 'large';
		} else if (1441 <= this.screenWidth && this.screenWidth <= 1920) {
			return 'xlarge';
		} else if (1921 <= this.screenWidth) {
			return 'xxlarge';
		}
	}

	getSlidesToShow() {
		if (this.isBreakpoint('small')) {
			return 1;
		} else if ( this.isBreakpoint('medium')) {
			return 2;
		} else if ( this.isBreakpoint('large')) {
			return 3;
		} else if ( this.isBreakpoint('xlarge')) {
			return 4;
		}
	}


	/*
	 speed: number <transition speed in milliseconds>
	 slidesToShow: number <number of slides displayed at once>
	 slidesToScroll: number <how many slides to skip at a time>
	 dots: boolean <toggle slide position indicator>
	 */


	trackById(index, item) {
		return item.id;
	}

	ngOnDestroy() {
		this.resizeSub.unsubscribe();
	}


}
