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
	Image,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Lead image with information
 * @id fe31fbf4-4bc4-4ffa-9b27-615af51d23fe
 */
export abstract class AbstractLeadImageWithInformationComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "acceptType": [
	 *     "jpg",
	 *     "jpeg",
	 *     "png",
	 *     "gif"
	 *   ],
	 *   "elementType": "image",
	 *   "fieldLabel": "Image",
	 *   "imageProfileId": "3428916c-b356-4b47-aeb2-5eb8e3494b00",
	 *   "key": "leadImage",
	 *   "label": "Lead image",
	 *   "required": true
	 * }
	 */
	@RenderingContextBinding('image.leadImage')
	readonly onLeadImage: Observable<Image>;

	/**
	 * @see #onLeadImage
	 */
	@RenderingContextBinding()
	readonly leadImage: Image;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCaption",
	 *   "label": "Lead image caption"
	 * }
	 */
	@RenderingContextBinding('text.leadImageCaption', '')
	readonly onLeadImageCaption: Observable<string>;

	/**
	 * @see #onLeadImageCaption
	 */
	@RenderingContextBinding()
	readonly leadImageCaption: string;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCredit",
	 *   "label": "Lead image credit"
	 * }
	 */
	@RenderingContextBinding('text.leadImageCredit', '')
	readonly onLeadImageCredit: Observable<string>;

	/**
	 * @see #onLeadImageCredit
	 */
	@RenderingContextBinding()
	readonly leadImageCredit: string;

	protected constructor() {
		super();
	}
}
