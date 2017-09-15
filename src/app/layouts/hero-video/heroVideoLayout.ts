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
    LayoutComponent, RenderingContext, RenderingContextBinding
} from 'ibm-wch-sdk-ng';
import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { TypeHeroVideoComponent } from './../../components/hero-video/typeHeroVideoComponent';
import {Subscription} from "rxjs/Subscription";
import {NavigationStart, Router} from "@angular/router";
declare var videojs: any;

/**
 * @name heroVideoLayout
 * @id hero-video-layout
 */
@LayoutComponent({
    selector: 'hero-video-layout'
})
@Component({
  selector: 'app-hero-video-layout-component',
  templateUrl: './heroVideoLayout.html',
  styleUrls: ['./heroVideoLayout.scss']
})
export class HeroVideoLayoutComponent extends TypeHeroVideoComponent implements OnInit, OnDestroy {

    /* default to video/mp4 if not set */
    @RenderingContextBinding('video.video.asset.mediaType', 'video/mp4')
    mediaType: string;

    rContext: RenderingContext;
    routeSub: Subscription;

    itemId: string;
    player: any;

    videoNewChanges: any;

    VIDEO_KEY: string = "video";

    constructor(public router: Router) {
        super();
								this.routeSub = router.events.filter(e => e instanceof NavigationStart).subscribe((event: NavigationStart) => {
									// clean up your markup, unhook plugins, etc.
									this.player.dispose();
								});
    }

    ngOnInit() {
        super.ngOnInit();
								this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            this.itemId = `hero-video-${this.renderingContext.id}`;
        });

								this.safeSubscribe(this.onVideo, (videoChanges) => {
									this.videoNewChanges = videoChanges;
									if (this.player) {
										this.player.src({type: this.mediaType, src: this.rContext.context.hub.deliveryUrl['origin'] + this.videoNewChanges.url});
									}
								});
    }

    ngAfterViewInit(){
        super.ngAfterViewInit();
								if(!this.player) {
									this.player = videojs(this.itemId);
								}
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
    }
}
