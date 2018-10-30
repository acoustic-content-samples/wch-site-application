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
import { ConfigServiceService } from '@ibm-wch/components-ng-shared-utilities';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '@ibm-wch/components-ng-shared-utilities';
import { WchInfoService } from '@ibm-wch-sdk/ng';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

class MockRouter {
	public url: string = '/';
	navigate = jasmine.createSpy('navigate');
	navigateByUrl = jasmine.createSpy('navigate');
	start = new NavigationStart(0, '/home');
	end = new NavigationEnd(1, '/home', '/signin');
	events = new Observable(observer => {
		observer.next(this.start);
		observer.next(this.end);
		observer.complete();
	});
	initialNavigation = jasmine.createSpy('navigate');
}

class MockWchInfoService {
	constructor() {}
}

describe('PageNotFoundComponent', () => {
	let component: PageNotFoundComponent;
	let fixture: ComponentFixture<PageNotFoundComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PageNotFoundComponent],
			imports: [HttpClientModule],
			providers: [
				ConfigServiceService,
				AuthService,
				{ provide: WchInfoService, useClass: MockWchInfoService },
				{ provide: Router, useClass: MockRouter },
			],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.overrideComponent(PageNotFoundComponent, {
			set: {
				template: 'TODO',
			},
		}).createComponent(PageNotFoundComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
