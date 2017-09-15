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
	Input,
	AfterViewInit,
	OnChanges,
	OnDestroy,
	ViewEncapsulation,
	SimpleChanges,
	ViewChildren,
	QueryList
} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import 'script-loader!slick-carousel';
import {Constants} from '../../../Constants';


declare var $: any;

@Component({
 	encapsulation: ViewEncapsulation.None,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

	 @Input()
		renderingContexts: RenderingContext[];

	 constants: any = Constants;
	 carouselChanged: boolean = false;
	 carouselSub = null;
	 routeSub = null;
	 @ViewChildren('carousel') carousel: QueryList<any>;

		// set default configuration
		slideConfig = {'speed': 500, 'slidesToShow': 4, 'slidesToScroll': 4, 'dots': false, 'arrows': true,
			'responsive': [{
				'breakpoint': 1250,
				'settings': {
					'slidesToShow': 3,
					'slidesToScroll': 3
				}
			},
				{
				'breakpoint': 700,
				'settings': {
					'slidesToShow': 2,
					'slidesToScroll': 2
				}
			},
				{
					'breakpoint': 400,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}]
		};
		/*
			speed: number <transition speed in milliseconds>
			slidesToShow: number <number of slides displayed at once>
			slidesToScroll: number <how many slides to skip at a time>
			dots: boolean <toggle slide position indicator>
			*/

  constructor(public router: Router) {
  	this.routeSub = this.router.events.filter(e => e instanceof NavigationStart).subscribe((event: NavigationStart) => {
		if($('.carousel').length > 0) {
			$('.carousel').slick('unslick');
		}
  	});
  }

  ngAfterViewInit () {
  	$('.carousel').slick(this.slideConfig);
  	this.carouselSub = this.carousel.changes.subscribe(item => {
		if (this.carouselChanged) {
			try {
				$('.carousel').slick('unslick');
				this.carouselChanged = false;
				
			} catch (e) {}
		}
		$('.carousel').slick(this.slideConfig);
	});
  }

  ngOnChanges (changes: SimpleChanges) {
    	if (changes.renderingContexts.currentValue !== changes.renderingContexts.previousValue) {
    		this.carouselChanged = true;
	  	}
  }

  ngOnDestroy () {
  	this.carouselSub.unsubscribe();
  	this.routeSub.unsubscribe();
  }

}
