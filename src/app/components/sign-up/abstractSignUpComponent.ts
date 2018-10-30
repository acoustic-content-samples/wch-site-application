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
	Link,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Sign up
 * @id 58fd2ad1-df13-4a75-9918-6b34852539ab
 */
export abstract class AbstractSignUpComponent extends AbstractRenderingComponent {
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
	 *   "imageProfileId": "763cc433-46d8-4a1e-9155-878ae8cf4dbc",
	 *   "key": "backgroundImage",
	 *   "label": "Background image"
	 * }
	 */
	@RenderingContextBinding('image.backgroundImage')
	readonly onBackgroundImage: Observable<Image>;

	/**
	 * @see #onBackgroundImage
	 */
	@RenderingContextBinding()
	readonly backgroundImage: Image;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "text",
	 *   "label": "Headline text"
	 * }
	 */
	@RenderingContextBinding('text.text', '')
	readonly onText: Observable<string>;

	/**
	 * @see #onText
	 */
	@RenderingContextBinding()
	readonly text: string;

	/**
	 * {
	 *   "elementType": "link",
	 *   "fieldLabel": "Link",
	 *   "key": "link",
	 *   "label": "Call to action"
	 * }
	 */
	@RenderingContextBinding('link.link')
	readonly onLink: Observable<Link>;

	/**
	 * @see #onLink
	 */
	@RenderingContextBinding()
	readonly link: Link;

	/**
	 * {
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "dialogMessage",
	 *   "label": "Confirmation message"
	 * }
	 */
	@RenderingContextBinding('formattedtext.dialogMessage', '')
	readonly onDialogMessage: Observable<string>;

	/**
	 * @see #onDialogMessage
	 */
	@RenderingContextBinding()
	readonly dialogMessage: string;

	protected constructor() {
		super();
	}
}
