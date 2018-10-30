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
import { LAYOUTS } from './layouts';
import { SAMPLE_MODULE } from './sample.module';
import { NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { Ng2LoggerFactory } from './common/Ng2LoggerFactory';

import 'jquery';
import 'foundation-sites';

import {
	WchNgModule,
	PageComponent,
	SiteBootstrap,
	Site,
	WchLoggerFactory,
	SelectFirstRootPageGuard,
} from '@ibm-wch-sdk/ng';
import { WchNgEditModule } from '@ibm-wch-sdk/ng-edit';

import { WchPlaceholderIconComponent } from './wch-placeholder-icon/wch-placeholder-icon.component';

import { WchFooterComponent } from './wchFooter/wchFooter.component';
import { ResponsiveHeaderModule } from './responsiveHeader/responsiveMenu.module';
import { AppComponent } from './app.component';
import { environment } from './environment/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightService } from '@ibm-wch/components-ng-shared-utilities';

import { DesignArticleSummaryComponent } from './layouts/design-article-summary/design-article-summary.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginFormLayoutComponent } from './login-form/loginFormLayout';
import { PreviewComponent } from './preview-component/preview.component';
import { ShareSocialComponent } from './components/share-social/share-social.component';
import { SiteCommonModule } from '@ibm-wch/components-ng-shared-utilities';
import { SPASharedComponentModule } from '@ibm-wch/components-ng-shared-components';

const pageRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [SelectFirstRootPageGuard],
		component: PageComponent,
	},
	{ path: 'sign-in', component: LoginFormLayoutComponent },
	{ path: 'component-preview', component: PreviewComponent },
	{ path: '**', component: PageComponent },
];

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './oob-spa/locales/', '.json');
}

@NgModule({
	imports: [
		AngularSvgIconModule,
		RouterModule.forRoot(pageRoutes),
		BrowserModule,
		FormsModule,
		HttpClientModule,
		WchNgModule.forRoot(environment),
		WchNgEditModule.forRoot({
			defaultPlaceholderText: 'Insert text here',
		}),
		BrowserAnimationsModule,
		ResponsiveHeaderModule,
		SAMPLE_MODULE,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		SiteCommonModule,
		SPASharedComponentModule,
	],
	declarations: [
		AppComponent,
		LoginFormLayoutComponent,
		WchPlaceholderIconComponent,
		WchFooterComponent,
		PageNotFoundComponent,
		PreviewComponent,
		DesignArticleSummaryComponent,
		ShareSocialComponent,
		...LAYOUTS,
	],
	providers: [
		{ provide: WchLoggerFactory, useClass: Ng2LoggerFactory },
		HighlightService,
	],
	entryComponents: [PageNotFoundComponent, ...LAYOUTS],
	bootstrap: [AppComponent],
})
export class AppModule {
	// cleue: add some fallback content
	/*	@SiteBootstrap()
	static defaultSite: Site = {
		id: 'default',
		pages: [{
			contentId: '908a3f7e-3c09-40d0-98a9-d30984f7f5ef',
			id: '41781ed4-2cc6-4320-b52a-aeb6a66f8f62',
			route: '/Home',
			decodedRoute: '/Home',
			name: 'Name',
			children: []
		}]
	}; */
}
