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
	ViewEncapsulation,
} from '@angular/core';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import 'script-loader!slick-carousel';
import {Constants} from '../../../Constants';




@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {

	@Input()
	public set renderingContexts(aValue: RenderingContext[]) {
		if (aValue) {
			this.slides = aValue;
		}
	}

	constants: any = Constants;
	slides: RenderingContext[] = [];

	// set default configuration
	slideConfig = {
		'speed': 500, 'slidesToShow': 4, 'slidesToScroll': 4, 'dots': false, 'arrows': true,
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


	trackById(index, item) {
		return item.id;
	}


}
