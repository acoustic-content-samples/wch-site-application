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
import {AfterViewInit, Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {isNil} from 'lodash';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Constants} from './Constants';
import {HighlightService} from './common/highlightService/highlight.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app',
	styleUrls: ['app.scss'],
	templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
	@Output()
	onRenderingContext: Observable<RenderingContext>;

	constructor(router: Router, private highlightService: HighlightService, private translate: TranslateService) {
		console.info(`Build date: ${version}`);
		console.info(`SDK version: ${sdkVersion}`);
	}

	ngOnInit () {
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}

	onActivate(aEvent: any) {
		const onRenderingContext = aEvent.onRenderingContext;
		if (!isNil(onRenderingContext)) {
			this.onRenderingContext = onRenderingContext;
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
