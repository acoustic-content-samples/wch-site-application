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
	Link,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Error page
 * @id 16f3938f-90a7-44e9-baf0-751d861a6164
 */
export abstract class AbstractErrorPageComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "errorMessage",
	 *   "label": "Error message",
	 *   "required": true
	 * }
	 */
	@RenderingContextBinding('formattedtext.errorMessage')
	readonly onErrorMessage: Observable<string>;

	/**
	 * @see #onErrorMessage
	 */
	@RenderingContextBinding()
	readonly errorMessage: string;

	/**
	 * {
	 *   "elementType": "link",
	 *   "fieldLabel": "Link",
	 *   "key": "goHomeButton",
	 *   "label": "Go home button"
	 * }
	 */
	@RenderingContextBinding('link.goHomeButton')
	readonly onGoHomeButton: Observable<Link>;

	/**
	 * @see #onGoHomeButton
	 */
	@RenderingContextBinding()
	readonly goHomeButton: Link;

	protected constructor() {
		super();
	}
}
