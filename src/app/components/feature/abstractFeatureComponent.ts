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
	Link,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/**
 * @name Feature
 * @id 68dea62b-0f3a-479f-a1be-cb3ce9820527
 */
export abstract class AbstractFeatureComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "featureHeadline",
	 *   "label": "Feature headline"
	 * }
	 */
	@RenderingContextBinding('text.featureHeadline', '')
	readonly onFeatureHeadline: Observable<string>;

	/**
	 * @see #onFeatureHeadline
	 */
	@RenderingContextBinding()
	readonly featureHeadline: string;

	/**
	 * {
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "descriptionOfFeature",
	 *   "label": "Description of feature"
	 * }
	 */
	@RenderingContextBinding('formattedtext.descriptionOfFeature', '')
	readonly onDescriptionOfFeature: Observable<string>;

	/**
	 * @see #onDescriptionOfFeature
	 */
	@RenderingContextBinding()
	readonly descriptionOfFeature: string;

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
	 *   "imageProfileId": "a3b413ea-d7d6-44b4-9a05-ad885dbeb710",
	 *   "key": "image",
	 *   "label": "Image"
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
	 *   "restrictedParents": [
	 *     "f38cf87e-0485-4b38-a0e6-6b9c420efed0"
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
	 *   "elementType": "link",
	 *   "fieldLabel": "Link",
	 *   "key": "readMoreLink",
	 *   "label": "Read more"
	 * }
	 */
	@RenderingContextBinding('link.readMoreLink')
	readonly onReadMoreLink: Observable<Link>;

	/**
	 * @see #onReadMoreLink
	 */
	@RenderingContextBinding()
	readonly readMoreLink: Link;

	protected constructor() {
		super();
	}
}
