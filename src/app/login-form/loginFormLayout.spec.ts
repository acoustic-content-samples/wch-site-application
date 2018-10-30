/*******************************************************************************
 * Copyright IBM Corp. 2018
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
	async,
	ComponentFixture,
	getTestBed,
	TestBed,
} from '@angular/core/testing';
import { LoginFormLayoutComponent } from './loginFormLayout';
import {
	UtilsService,
	AuthService,
} from '@ibm-wch/components-ng-shared-utilities';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WchInfoService, RefreshService } from '@ibm-wch-sdk/ng';
import { Router } from '@angular/router';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

class MockWchInfoService {
	constructor() {}
}

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

class MockRefreshService {
	constructor() {}
}

describe('LoginFormLayoutComponent', () => {
	let component: LoginFormLayoutComponent;
	let fixture: ComponentFixture<LoginFormLayoutComponent>;
	let authService: AuthService;
	let injector: TestBed;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, HttpClientModule],
			declarations: [LoginFormLayoutComponent],
			providers: [
				UtilsService,
				AuthService,
				{ provide: WchInfoService, useClass: MockWchInfoService },
				{ provide: Router, useClass: MockRouter },
				{ provide: RefreshService, useClass: MockRefreshService },
			],
		});
		injector = getTestBed();
	}));

	beforeEach(() => {
		fixture = TestBed.overrideComponent(LoginFormLayoutComponent, {
			set: {
				template: 'TODO',
			},
		}).createComponent(LoginFormLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		authService = injector.get(AuthService);
		authService.isPreviewMode = false;
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('login button should work', () => {
		component.login();
		expect(component.loginError).toBeFalsy();
	});

	it('emailPlaceholder should have value when not in preview mode', () => {
		expect(component.emailPlaceholder).toBeTruthy();
	});
});
