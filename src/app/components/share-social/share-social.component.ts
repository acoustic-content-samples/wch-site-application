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
	Component,
	ViewContainerRef,
	Input,
	OnChanges,
	OnDestroy,
	ViewChild,
	SimpleChanges,
} from '@angular/core';
import { RenderingContext } from '@ibm-wch-sdk/ng';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var window: any;

@Component({
	selector: 'app-share-social',
	templateUrl: './share-social.component.html',
	styleUrls: ['./share-social.component.scss'],
})
export class ShareSocialComponent implements OnChanges, OnDestroy {
	facebookLink: SafeResourceUrl;
	twitterLink: SafeResourceUrl;
	rc: RenderingContext;

	@ViewChild('twitter', { read: ViewContainerRef })
	twitterContainer;

	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	constructor(private sanitizer: DomSanitizer) {}

	ngOnChanges(changes: SimpleChanges) {
		// change the iFrame when the article changes
		if (
			changes['renderingContext'].currentValue !==
			changes['renderingContext'].previousValue
		) {
			if (this.rc.elements.heading.value) {
				const tweetOptions = {
					baseUrl:
						'https://platform.twitter.com/widgets/tweet_button.html',
					url: encodeURIComponent(window.location.href),
					hashtags: `${this.rc.elements.author.value}`,
					text: `${this.rc.elements.heading.value}`,
					buttonSize: 's',
				};

				const facebookOptions = {
					baseUrl:
						'https://www.facebook.com/plugins/share_button.php',
					url: `${encodeURIComponent(window.location.href)}`,
					layout: 'button',
					size: 'small',
					mobile_iframe: false,
				};

				// build the iFrame urls for the social media links
				this.facebookLink = this.sanitizer.bypassSecurityTrustResourceUrl(
					`${facebookOptions.baseUrl}?href=${
						facebookOptions.url
					}&layout=${facebookOptions.layout}&size=${
						facebookOptions.size
					}&mobile_iframe=${facebookOptions.mobile_iframe}&appId`
				);
				this.twitterLink = this.sanitizer.bypassSecurityTrustResourceUrl(
					`${tweetOptions.baseUrl}?size=${
						tweetOptions.buttonSize
					}&url=${tweetOptions.url}&text=${
						tweetOptions.text
					}&hashtags=${tweetOptions.hashtags}`
				);
			}
		}
	}

	ngOnDestroy() {}
}
