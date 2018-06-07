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
import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import {
	HttpModule,
	Http,
	Response,
	ResponseOptions,
	XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AuthService } from './auth-service.service';
import {WchInfoService, WchNgModule} from '@ibm-wch-sdk/ng';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { Router } from "@angular/router";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

class MockWchInfoService {

	constructor() {

	}

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


describe('AuthService', () => {

	let injector: TestBed;
	let authService: AuthService;
	let httpMock: HttpTestingController;
	let wchServiceMock: MockWchInfoService;

	const someUser = 	 {
		'externalId': 'someUser@de.ibm.com',
		'firstName': 'Some',
		'lastName': 'User',
		'displayName': 'Some User',
		'roles': ['Editor'],
		'id': '123456',
		'links': {
			'self': {
				'href': '/user-profile/v1/users/123456',
				'methods': ['GET', 'PUT']
			}
		}
	};

	const anonymousUser = {
			'externalId': 'ibm_anonymous_user@de.ibm.com',
			'firstName': 'Anonymous',
			'lastName': 'User',
			'displayName': 'Anonymous User',
			'roles': [],
			'id': 'ebb8eba6-e5a8-fe80-8af2-6d5b53a596f0'
		};

	beforeEach(() => {

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				AuthService,
				{ provide: XHRBackend, useClass: MockBackend },
				{ provide: WchInfoService, useClass: MockWchInfoService },
				{ provide: Router, useClass: MockRouter}
			],
			schemas: [ NO_ERRORS_SCHEMA ]
		});
		injector = getTestBed();
		authService = injector.get(AuthService);
		httpMock = injector.get(HttpTestingController);


	});

	afterEach(() => {
		//httpMock.verify();
	})

	it('should be logged in', () => {
    authService.isPreviewMode = false;

    authService.login('someUser', 'somepassword').subscribe(
			(user) => {
				expect(user).toEqual(someUser, 'expected user');
				expect(authService.isLoggedIn()).toBe(true);
				},
					fail
		);

		const loginReq = httpMock.expectOne(`${authService.loginURL}`);
    expect(loginReq.request.method).toEqual('GET');
		loginReq.flush(someUser);

  });

	// test login failure
	it('should handle login failure', () => {
    authService.isPreviewMode = false;
    authService.login('someUser', 'somepassword').subscribe(
				fail
			,
			(err) => {
				expect(authService.isLoggedIn()).toBe(false);
			}
		);

		const loginReq = httpMock.expectOne(`${authService.loginURL}`);
    expect(loginReq.request.method).toEqual('GET');
    loginReq.flush(null, {status: 401, statusText: 'Unauthorized'});

	});

	// test logout
	it('should be logged out', () => {
    authService.isPreviewMode = false;
    authService.logout().subscribe(
			(user) => {
				expect(user).toEqual(anonymousUser, 'expected user');
				expect(authService.isLoggedIn()).toBe(false);
			},
			fail
		);

		const loginReq = httpMock.expectOne(`${authService.logoutUrl}`);
    expect(loginReq.request.method).toEqual('GET');
    loginReq.flush(anonymousUser);
	});

	// test logout failure
	it('should handle logout failure', () => {
    authService.isPreviewMode = false;
    authService.logout().subscribe(
			fail,
			(error) => {
				expect(authService.isLoggedIn()).toBe(true);
			}
		);

		const logoutReq = httpMock.expectOne(`${authService.logoutUrl}`);
    expect(logoutReq.request.method).toEqual('GET');
    logoutReq.flush(null, {status: 401, statusText: 'some error'});


	});

	// test login in preview
	it('should handle login in preview', () => {
    authService.isPreviewMode = true;

		authService.login('someUser', 'somepassword').subscribe(
			(user) => {
				// no user really logged.  testing that the login was not called again in preview
        expect(user).not.toEqual(someUser, 'expected user');
        expect(authService.isLoggedIn()).toBe(false);
      },
			fail
		);

		const loginReq = httpMock.expectNone(`${authService.loginURL}`);

  });

	// test logout in preview
	it('should handle logout in preview', () => {
    authService.isPreviewMode = true;

		authService.logout().subscribe(
			(user) => {
				expect(user).toEqual(anonymousUser, 'expected user');
				expect(authService.isLoggedIn()).toBe(false);
			},
			fail
		);


		const logoutReq = httpMock.expectNone(`${authService.logoutUrl}`);

  });

});
