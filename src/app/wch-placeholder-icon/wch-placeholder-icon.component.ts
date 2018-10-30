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
import { Component, Input, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'wch-placeholder-icon',
	styleUrls: ['./wch-placeholder-icon.scss'],
	templateUrl: './wch-placeholder-icon.html',
})
export class WchPlaceholderIconComponent implements OnInit {
	@Input()
	type: string;

	@Input()
	width: number;

	@Input()
	height: number;

	svgSrc: String = 'oob-spa/images/placeholders/image.svg';
	svgSize: String = '30px';

	constructor (private elementRef: ElementRef) {}

	ngOnInit () {
		this.svgSize = `${Math.round(Math.min(this.width, this.height) / 2)}px`;
		this.svgSrc = `oob-spa/images/placeholders/${this.type}.svg`;
	}
}
