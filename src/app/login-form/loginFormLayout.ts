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
import { Component, Input } from '@angular/core';
import { AuthService } from '@ibm-wch/components-ng-shared-utilities';
import { Router } from '@angular/router';
import {
	ComponentsService,
	LayoutComponent,
	RefreshService,
	RenderingContext,
} from '@ibm-wch-sdk/ng';

@Component({
	selector: 'app-login-form-layout-component',
	templateUrl: './loginFormLayout.html',
	styleUrls: ['./loginFormLayout.scss'],
	preserveWhitespaces: false,
})
export class LoginFormLayoutComponent {
	user: any = {};
	loginError = false;
	emailPlaceholder: string;
	private readonly EMAIL_PLACEHOLDER = 'name@domain.com';
	title = 'SIGN IN';
	emailLabel = 'Email';
	passwordLabel = 'Password';
	loginButtonLabel = 'SIGN IN';
	previewLoginMessage =
		'Click continue to stop previewing as an anonymous user.';
	previewLoginButton = 'CONTINUE';
	loginFailedErrorMessage =
		'Incorrect email or password entered. Please try again.';

	private rc: RenderingContext;

	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	constructor(
		public authService: AuthService,
		private router: Router,
		private SDKRefreshService: RefreshService
	) {
		this.emailPlaceholder = authService.isPreviewMode
			? ''
			: this.EMAIL_PLACEHOLDER;
	}

	login() {
		this.loginError = false;
		this.authService
			.login(this.user.username, this.user.password)
			.subscribe(
				res => {
					this.SDKRefreshService.refresh();
					console.log('SDK is refreshed after logging in');
					this.router.navigate([this.authService.getCurrentRoute()]);
				},
				err => {
					this.loginError = true;
				}
			);
	}
}
