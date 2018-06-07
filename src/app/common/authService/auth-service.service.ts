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
import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {USE_PUBLIC_URL} from '@ibm-wch-sdk/ng';
import {WchInfoService} from '@ibm-wch-sdk/ng';
import {Ng2LoggerFactory} from '../Ng2LoggerFactory';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/shareReplay';
import {NavigationEnd, Router} from '@angular/router';


export interface WchUser {
	externalId: string;
	firstName: string;
	lastName: string;
	displayName: string;
	roles: string[];
	id: string;
}


@Injectable()
export class AuthService implements OnDestroy {

	apiUrl = (window.location.hostname === 'localhost') ? Constants.apiUrl : `${window.location.protocol}//${window.location.hostname}/api/${window.location.pathname.split('/')[1]}`;
	userURL = `${this.apiUrl}/user-profile/v1/users/currentuser`;
	loginURL = `${this.apiUrl}/login/v1/basicauth`;
	logoutUrl = `${this.apiUrl}/login/v1/removecookies`;

	private logger = new Ng2LoggerFactory().create('AuthService');
	private _userSub: BehaviorSubject<WchUser> = new BehaviorSubject<WchUser>(null);
	private _isLoggedIn = false;
	private userSub: Subscription;
	private _user: WchUser;
	private _currentRoute = '/';
	private _previewMockUser =
		{
			'externalId': 'ibm_anonymous_user@de.ibm.com',
			'firstName': 'Anonymous',
			'lastName': 'User',
			'displayName': 'Anonymous User',
			'roles': [],
			'id': 'ebb8eba6-e5a8-fe80-8af2-6d5b53a596f0'
		};

	public isPreviewMode: boolean;

	constructor(private http: HttpClient, private wchService: WchInfoService, private router: Router) {
		this.isPreviewMode = wchService.isPreviewMode;
		this.userSub = this._getCurrentUser().subscribe((res: WchUser) => {
			this._setLoggedIn(res);
			this._user = res;
		});

		router.events.subscribe(event => {
				if (event instanceof NavigationEnd) {
					if ( event.url !== Constants.SIGN_IN_PAGE ) {
						this._currentRoute = event.url;
					}
				}
			}
			);

	}


	private _getCurrentUser(): Observable<any> {
		const httpOptions = {
			withCredentials: true
		};
		return this.http.get(this.userURL, httpOptions).shareReplay();
	}

	getCurrentUser(): Observable<WchUser> {
		return this._userSub.asObservable();

	}

	/*
		Return last good route that was not the sign-in page.
	 */
	getCurrentRoute() {
		return this._currentRoute;
	}


	isLoggedIn(): boolean {
		return this._isLoggedIn;
	}

	private _isAnonymous(user) {
		return (!user || (user && user.firstName === 'Anonymous'));
	}

	login(username, password): Observable<any> {
		if (this.isPreviewMode) {
			return this._mockLogin(username, password);
		} else {
			return this._apiLogin(username, password);
		}
	}

	private _mockLogin(username, password): Observable<WchUser> {
		this.logger.info('_mockLogin', 'Using mock login while in preview');
		const obs = Observable.of(this._user);
		obs.subscribe((res) => {
			this._setLoggedIn(res);
		});

		return obs;
	}

	private _apiLogin(username, password): Observable<WchUser> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': `Basic ${btoa(username + ':' + password)}`
			})
		};


		const obs = this.http.get(this.loginURL, httpOptions)
			.switchMap(authInf => {
				return this._getCurrentUser();
			}).shareReplay();

		obs.subscribe((res: WchUser) => {
			this._user = res;
			this._setLoggedIn(res);
		}, err => {
			this._isLoggedIn = false;
		});

		return obs;
	}


	private _setLoggedIn(user: WchUser) {
		if (this._isAnonymous(user)) {
			this.logger.info('_setLoggedIn', `Setting user to anonymous `);
			USE_PUBLIC_URL.next(true);
			this._isLoggedIn = false;
		} else {
			USE_PUBLIC_URL.next(false);
			this.logger.info('_setLoggedIn', `Setting user to: ${user.displayName} `);
			this._isLoggedIn = true;

		}
		this._userSub.next(user);
	}

	logout(): Observable<WchUser> {
		if (this.isPreviewMode) {
			return this._mockLogOut();
		} else {
			return this._apiLogout();
		}
	}

	private _mockLogOut(): Observable<WchUser> {
		this.logger.info('_mockLogOut',  'Using mock logout');
		const obs = Observable.of(this._previewMockUser);
		obs.subscribe((res) => {
			this._setLoggedIn(res);
		});

		return obs;
	}

	private _apiLogout(): Observable<WchUser> {
		const httpOptions = {
			withCredentials: true
		};
		const obs = this.http.get(this.logoutUrl, httpOptions)
			.switchMap(authInf => {
				return this._getCurrentUser();
			}).shareReplay();

		obs.subscribe((res) => {
			this._setLoggedIn(res);
		}, (err) => {
			this._isLoggedIn = true;
		});

		return obs;
	}

	ngOnDestroy() {
		this.userSub.unsubscribe();
	}


}
