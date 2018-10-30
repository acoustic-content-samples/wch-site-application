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
/**
 * Do not modify this file, it will be auto-generated.
 */
import {
	RenderingContextBinding,
	Video,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Hero video
 * @id a47af09a-9315-4a01-ad30-cd998d341b0b
 */
export abstract class AbstractHeroVideoComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "elementType": "video",
	 *   "fieldLabel": "Video",
	 *   "key": "video",
	 *   "label": "Video"
	 * }
	 */
	@RenderingContextBinding('video.video')
	readonly onVideo: Observable<Video>;

	/**
	 * @see #onVideo
	 */
	@RenderingContextBinding()
	readonly video: Video;

	protected constructor() {
		super();
	}
}
