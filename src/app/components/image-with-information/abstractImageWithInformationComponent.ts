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
	Category,
	Image,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Image with information
 * @id f9e7f0b9-f57d-4d91-a257-54a64c1ff52f
 * @description Used mainly for the design articles and includes caption and credit information.
 */
export abstract class AbstractImageWithInformationComponent extends AbstractRenderingComponent {
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
	 *   "imageProfileId": "92600283-a254-4965-88fb-4950254f6e67",
	 *   "key": "image",
	 *   "label": "Image",
	 *   "required": true
	 * }
	 */
	@RenderingContextBinding('image.image')
	readonly onImage: Observable<Image>;

	/**
	 * @see #onImage
	 */
	@RenderingContextBinding()
	readonly image: Image;

	/**
	 * {
	 *   "elementType": "category",
	 *   "key": "imageSize",
	 *   "label": "Image size",
	 *   "required": true,
	 *   "restrictedParents": [
	 *     "0e1cd869-ee48-4ef6-ae6d-7be957c84d10"
	 *   ]
	 * }
	 */
	@RenderingContextBinding('category.imageSize')
	readonly onImageSize: Observable<Category>;

	/**
	 * @see #onImageSize
	 */
	@RenderingContextBinding()
	readonly imageSize: Category;

	/**
	 * {
	 *   "elementType": "category",
	 *   "helpText": "Image placement is only used with the feature type of content.",
	 *   "key": "imagePlacement",
	 *   "label": "Image placement",
	 *   "restrictedParents": [
	 *     "6f037a1b-8f2e-4458-839e-a49fa0227dba"
	 *   ]
	 * }
	 */
	@RenderingContextBinding('category.imagePlacement')
	readonly onImagePlacement: Observable<Category>;

	/**
	 * @see #onImagePlacement
	 */
	@RenderingContextBinding()
	readonly imagePlacement: Category;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCaption",
	 *   "label": "Image caption"
	 * }
	 */
	@RenderingContextBinding('text.imageCaption', '')
	readonly onImageCaption: Observable<string>;

	/**
	 * @see #onImageCaption
	 */
	@RenderingContextBinding()
	readonly imageCaption: string;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCredit",
	 *   "label": "Image credit"
	 * }
	 */
	@RenderingContextBinding('text.imageCredit', '')
	readonly onImageCredit: Observable<string>;

	/**
	 * @see #onImageCredit
	 */
	@RenderingContextBinding()
	readonly imageCredit: string;

	protected constructor() {
		super();
	}
}
