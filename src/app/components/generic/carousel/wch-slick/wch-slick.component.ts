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
	AfterViewInit, Component, Directive, ElementRef, forwardRef, Host, Input, NgZone,
	OnDestroy, QueryList, ViewChildren
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var $: any;

@Component({
	selector: 'wch-slick',
	template: '<ng-content></ng-content>'
})
export class WchSlickComponent implements OnDestroy, AfterViewInit {

	@Input() config: any;

	public slides: any[] = [];
	public carouselInstance: any;
	public carouselInitialized: boolean = false;

	constructor(private elem: ElementRef, private zone: NgZone) {
	}


	ngAfterViewInit(){
		this.setupCarousel();
	}

	setupCarousel() {
		this.zone.runOutsideAngular(() => {
			//setup carousel
			$(this.elem.nativeElement).on('init', (event, slick) => {
				this.carouselInitialized = true;

				this.carouselInstance = slick;

				//first clear all the existing slides, this will allow us to verify only desired slides are added
				this._removeAllSlides();

				//add all slides back
				this._addAllSlides();

				//go to the first slide
				this.carouselInstance.slickGoTo(0);
			});
			$(this.elem.nativeElement).slick(this.config);

		})
	}

	addSlide(item: WchSlickSlideDirective, pushItem: boolean) {
		if(pushItem) {
			this.slides.push(item);
		}
		if(this.carouselInitialized) {
			this.carouselInstance.slickAdd(item.el.nativeElement);
		}
	}

	removeSlide(item: WchSlickSlideDirective) {
		if (this.carouselInitialized) {
			this.slides = this.slides.filter(slide => slide != item);
			this._removeAllSlides();
			this._addAllSlides();
		}
	}

	_addAllSlides(){
		this.slides.forEach((slide) => {
			this.addSlide(slide, false);
		});
	}

	_removeAllSlides(){
		//first clear all the existing slides
		for(let x = this.carouselInstance.slideCount; x >= 0; x--){
			this.carouselInstance.slickRemove(x);
		}
	}

	public unslick() {
		this.zone.run(() => {
			this.carouselInstance.unslick();
		});
	}

	ngOnDestroy() {
		this.unslick();
	}


}

@Directive({
	selector: '[wchSlickSlide]',
})
export class WchSlickSlideDirective implements AfterViewInit, OnDestroy {
	constructor(public el: ElementRef, @Host() private carousel: WchSlickComponent) {
	}

	ngAfterViewInit() {
		this.carousel.addSlide(this, true);
	}

	ngOnDestroy() {
		this.carousel.removeSlide(this);
	}
}
