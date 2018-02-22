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
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-link',
	template: `
		<div *ngIf="isRouterLink(); then router else href"></div>
		<ng-template #router><a [routerLink]="href" [class]="classString">{{text}}</a></ng-template>
		<ng-template #href><a [href]="href" [class]="classString">{{text}}</a></ng-template>
	`
})
export class Link {

	@Input() href: string;
	@Input() classString: string;
	@Input() text: string;

	constructor () {}

	isRouterLink () {
		return !this.href.startsWith('http');
	}
}
