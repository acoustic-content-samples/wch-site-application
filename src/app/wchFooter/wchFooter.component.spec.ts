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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { WchFooterComponent } from './wchFooter.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ConfigServiceService } from '@ibm-wch/components-ng-shared-utilities';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
	XHRBackend,
	ResponseOptions,
	Response,
	BaseRequestOptions,
} from '@angular/http';

describe('WchFooterComponent', () => {
	let component: WchFooterComponent;
	let fixture: ComponentFixture<WchFooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'test/page/home',
						component: RouterMockTestComponent,
					},
				]),
			],
			declarations: [WchFooterComponent, RouterMockTestComponent],
			providers: [ConfigServiceService],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WchFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	xit('create an instance', () => {
		expect(component).toBeTruthy();
	});
});

@Component({
	template: `
    <a routerLink="/test/page/{{pageName}}">link</a>
    <router-outlet></router-outlet>
  `,
})
@Component({
	template: '',
})

/**
 * Mocks routerLink
 */
class RouterMockTestComponent {}
