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
import { environment } from '../environments/environment';

import {Component, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {NavigationEnd, Router} from '@angular/router';
import {HighlightService} from './common/highlightService/highlight.service';
import { TranslateService } from '@ngx-translate/core';
import {Subscription} from 'rxjs/Subscription';
import { Ng2LoggerFactory } from './common/Ng2LoggerFactory';
import { Logger } from 'ibm-wch-sdk-ng';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app',
	styleUrls: ['app.scss'],
	templateUrl: './app.component.html'

})
export class AppComponent implements OnInit, OnDestroy {
	@Output()
	onRenderingContext: Observable<RenderingContext>;
	routerSub: Subscription;
	rcontextSub: Subscription;
	logger: Logger = new Ng2LoggerFactory().create('AppComponent');
	soloMode = false;
	readonly LANDING_PAGE_KIND = 'landing-page';

	constructor(router: Router, private highlightService: HighlightService, private translate: TranslateService) {
		console.info(`Build date: ${environment.version}`);
		console.info(`SDK version: ${environment.sdkVersion}`);
		this.routerSub = router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe(( event: NavigationEnd ) => {
				this.logger.info('SPA navigation changed', event.url);
			})
	}

	ngOnInit () {
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}

	ngOnDestroy () {
		this.routerSub.unsubscribe();
		this.rcontextSub.unsubscribe();
	}

	onActivate(aEvent: any) {
		const onRenderingContext = aEvent.onRenderingContext;
		if (!(onRenderingContext == null)) {
			this.onRenderingContext = onRenderingContext;
			this.soloMode = false;
			this.rcontextSub = this.onRenderingContext
				.filter((rContext: any) => {
					return (rContext && rContext.kind) ? rContext.kind.indexOf(this.LANDING_PAGE_KIND) > -1 : false;
				})
				.subscribe((isLandingPage) => {
					this.soloMode = true;
				});
		}
	}

	// This is the code in the parent page that contains SPA's iframe
	/*
		var button = document.querySelector('button');
		var iframe = document.querySelector('iframe');
		var inputBox = document.getElementById("message-box");
		var clickHandler = function(){
		//iframe.contentWindow.postMessage({"for":"user","data":"anything"},'http://localhost:4200');
		iframe.contentWindow.postMessage(inputBox.value,'http://localhost:4200');
		}
		button.addEventListener('click',clickHandler,false);
		*/

}
