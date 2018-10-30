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
import {
	AbstractRenderingComponent,
	LayoutComponent,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng2LoggerFactory } from '../../common/Ng2LoggerFactory';
import { Logger } from '@ibm-wch-sdk/ng';

/**
 * @name scriptAppLayout
 * @id script=app-layout
 */
@LayoutComponent({
	selector: 'script-app-layout',
})
@Component({
	selector: 'app-script-app-layout-component',
	templateUrl: './scriptAppLayout.html',
	styleUrls: ['./scriptAppLayout.scss'],
})
export class ScriptAppLayoutComponent extends AbstractRenderingComponent
	implements OnInit, AfterViewInit, OnDestroy {
	iframeHeight = 500; // default height is 500px;
	kickerUrl: string;
	origin: string;
	logger: Logger = new Ng2LoggerFactory().create('scriptAppComponent');
	@ViewChild('scriptApp')
	appElem: ElementRef;

	constructor(private http: HttpClient) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.http
			.get(
				this.renderingContext.context.hub.deliveryUrl.href.concat(
					'dxconfig/',
					this.renderingContext.type,
					'.json'
				)
			)
			.subscribe(
				res => {
					const path = res['path'];
					this.kickerUrl = path;
					if (path.match(/^https?:\/\//gi)) {
						this.origin = path.match(/^https?:\/\/.+\//gi)[0];
					}
				},
				error => {
					this.logger.error(
						'Unable to retrieve the config file for this application',
						error
					);
				}
			);

		// subscribe to renderingContext changes and reload the script app
		this.safeSubscribe(this.onRenderingContext, () => {
			if (
				this.appElem &&
				this.appElem.nativeElement &&
				this.appElem.nativeElement.contentWindow &&
				this.appElem.nativeElement.contentWindow.location
			) {
				this.appElem.nativeElement.contentWindow.location.reload();
			}
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();

		// listen for messages from script app
		window.addEventListener('message', event => {
			if (event.data.message === 'update renderingContext') {
				this.sendPostMessage({
					message: 'updated renderingContext',
					renderingContext: this.renderingContext,
				});
				if (
					this.appElem &&
					this.appElem.nativeElement &&
					this.appElem.nativeElement.contentDocument &&
					this.appElem.nativeElement.contentDocument.documentElement
				) {
					// check if the script app needs to be resized
					if (
						this.iframeHeight <
						this.appElem.nativeElement.contentDocument
							.documentElement.offsetHeight
					) {
						this.iframeHeight = this.appElem.nativeElement.contentDocument.documentElement.offsetHeight;
					}
				}
			} else if (event.data.message === 'resize iFrame') {
				this.iframeHeight = event.data.height;
			}
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	iframeLoaded() {
		this.sendPostMessage({
			message: 'updated renderingContext',
			renderingContext: this.renderingContext,
		});
	}

	sendPostMessage(message) {
		if (
			this.appElem &&
			this.appElem.nativeElement &&
			this.appElem.nativeElement.contentWindow
		) {
			this.appElem.nativeElement.contentWindow.postMessage(
				message,
				this.origin
					? this.origin
					: this.renderingContext.context.hub.deliveryUrl.origin
			);
		} else {
			this.logger.error(
				'Could not complete the  postMessage to the iframe because the contentWindow does not exist'
			);
		}
	}
}
