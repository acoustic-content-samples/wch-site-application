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
	LayoutComponent,
	RenderingContext,
	RenderingContextBinding,
} from '@ibm-wch-sdk/ng';
import {
	AfterViewInit,
	Component,
	OnChanges,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { TypeHeroVideoComponent } from '../../components/hero-video/typeHeroVideoComponent';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { logger } from 'codelyzer/util/logger';

declare var videojs: any;

/**
 * @name heroVideoLayout
 * @id hero-video-layout
 */
@LayoutComponent({
	selector: 'hero-video-layout',
})
@Component({
	selector: 'app-hero-video-layout-component',
	templateUrl: './heroVideoLayout.html',
	styleUrls: ['./heroVideoLayout.scss'],
})
export class HeroVideoLayoutComponent extends TypeHeroVideoComponent
	implements OnInit, OnDestroy, AfterViewInit {
	/* default to video/mp4 if not set */
	@RenderingContextBinding('video.video.asset.mediaType', 'video/mp4')
	mediaType: string;

	rContext: RenderingContext;
	routeSub: Subscription;

	videoJsLoaded: Promise<any>;

	itemId: string;
	player: any;

	videoNewChanges: any;

	constructor(public router: Router) {
		super();

		this.videoJsLoaded = new Promise((resolve, reject) => {
			if (!document.getElementById('videojs-script-tag')) {
				let styleTag = document.createElement('link');
				styleTag.setAttribute(
					'href',
					'//vjs.zencdn.net/6.2.8/video-js.css'
				);
				styleTag.setAttribute('rel', 'stylesheet');
				styleTag.setAttribute('async', 'true');
				document.head.appendChild(styleTag);

				let scriptTag = document.createElement('script');
				scriptTag.setAttribute('id', 'videojs-script-tag');
				scriptTag.setAttribute('type', 'application/javascript');
				scriptTag.setAttribute('async', 'true');
				scriptTag.setAttribute(
					'src',
					'//vjs.zencdn.net/6.2.8/video.js'
				);
				scriptTag.addEventListener('load', resolve);
				scriptTag.addEventListener('error', () =>
					reject('Error loading script.')
				);
				scriptTag.addEventListener('abort', () =>
					reject('Script loading aborted.')
				);
				document.body.appendChild(scriptTag);
			} else {
				resolve();
			}
		});

		this.routeSub = router.events
			.filter(e => e instanceof NavigationStart)
			.subscribe((event: NavigationStart) => {
				// clean up your markup, unhook plugins, etc.
			});
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.itemId = `hero-video-${this.renderingContext.id}`;
		});

		this.safeSubscribe(this.onVideo, videoChanges => {
			this.videoNewChanges = videoChanges;
			if (videoChanges && videoChanges.url) {
				if (this.player) {
					this.player.src({
						type: this.mediaType,
						src:
							this.rContext.context.hub.deliveryUrl['origin'] +
							this.videoNewChanges.url,
					});
				}
			}
		});
	}

	isVideoSet() {
		return this.video && this.video.url;
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
		if (!this.player) {
			this.videoJsLoaded.then(() => (this.player = videojs(this.itemId)));
		}
	}

	ngOnDestroy() {
		try {
			this.player.dispose();
		} catch (e) {
			console.error(e);
		}
		this.routeSub.unsubscribe();
	}
}
