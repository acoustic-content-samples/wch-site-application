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
	RenderingContext,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Design page
 * @id bb79c338-1e20-4d53-9ff3-9a6970ad9ed3
 * @description Design topic uses a two column layout with options for the column widths.  Decide if you want a 75/25% split in column width or 25/75% split in column width.
 */
export abstract class AbstractDesignPageComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "elementType": "reference",
	 *   "fieldLabel": "Content item",
	 *   "helpText": "Design page uses a two column layout with options for the column widths.  Decide if you want a 75/25% split in column width or 25/75% split in column width.",
	 *   "key": "designTopic",
	 *   "label": "Design article",
	 *   "required": true,
	 *   "restrictTypes": [
	 *     {
	 *       "id": "a8fa51a3-4919-4308-a0b3-6cd31ae15d7e"
	 *     }
	 *   ]
	 * }
	 */
	@RenderingContextBinding('reference.designTopic', '')
	readonly onDesignTopic: Observable<RenderingContext>;

	/**
	 * @see #onDesignTopic
	 */
	@RenderingContextBinding()
	readonly designTopic: RenderingContext;

	/**
	 * {
	 *   "elementType": "reference",
	 *   "fieldLabel": "Content item",
	 *   "key": "relatedArticles",
	 *   "label": "Related articles",
	 *   "restrictTypes": [
	 *     {
	 *       "id": "9aeeecef-85ce-4d41-a797-1ad27735d0cb"
	 *     }
	 *   ]
	 * }
	 */
	@RenderingContextBinding('reference.relatedArticles', '')
	readonly onRelatedArticles: Observable<RenderingContext>;

	/**
	 * @see #onRelatedArticles
	 */
	@RenderingContextBinding()
	readonly relatedArticles: RenderingContext;

	protected constructor() {
		super();
	}
}
