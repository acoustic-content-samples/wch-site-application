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
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
export abstract class AbstractDesignArticleComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Text",
     *   "key": "heading",
     *   "label": "Topic title",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.heading')
    readonly onHeading: Observable<string>;

    /**
     * @see #onHeading
     */
    @RenderingContextBinding()
    readonly heading: string;

    /**
     * {
     *   "elementType": "reference",
     *   "fieldLabel": "Content item",
     *   "key": "mainImage",
     *   "label": "Lead image",
     *   "required": true,
     *   "restrictTypes": [
     *     {
     *       "id": "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.mainImage')
    readonly onMainImage: Observable<RenderingContext>;

    /**
     * @see #onMainImage
     */
    @RenderingContextBinding()
    readonly mainImage: RenderingContext;

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Text",
     *   "helpText": "",
     *   "key": "author",
     *   "label": "Author name"
     * }
     */
    @RenderingContextBinding('text.author', '')
    readonly onAuthor: Observable<string>;

    /**
     * @see #onAuthor
     */
    @RenderingContextBinding()
    readonly author: string;

    /**
     * {
     *   "elementType": "datetime",
     *   "fieldLabel": "Date",
     *   "fieldType": "date-time",
     *   "helpText": "Date and time is used when ordering a list of design articles.  The time will not display in the website.",
     *   "key": "date",
     *   "label": "Date",
     *   "required": true
     * }
     */
    @RenderingContextBinding('datetime.date')
    readonly onDate: Observable<Date>;

    /**
     * @see #onDate
     */
    @RenderingContextBinding()
    readonly date: Date;

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "formattedtext",
     *   "fieldLabel": "Text chunk",
     *   "helpText": "The design topic, when displayed in the website, will interleave the text chunks and images to create a fluid layout.",
     *   "key": "body",
     *   "label": "Text for body section",
     *   "minimumValues": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtexts.body')
    readonly onBody: Observable<string[]>;

    /**
     * @see #onBody
     */
    @RenderingContextBinding()
    readonly body: string[];

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Design article image",
     *   "key": "bodyImage",
     *   "label": "Images for body section",
     *   "minimumValues": 3,
     *   "required": true,
     *   "restrictTypes": [
     *     {
     *       "id": "f9e7f0b9-f57d-4d91-a257-54a64c1ff52f"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('references.bodyImage')
    readonly onBodyImage: Observable<RenderingContext[]>;

    /**
     * @see #onBodyImage
     */
    @RenderingContextBinding()
    readonly bodyImage: RenderingContext[];

    /**
     * {
     *   "elementType": "reference",
     *   "fieldLabel": "Content item",
     *   "key": "authorBio",
     *   "label": "Author bio",
     *   "restrictTypes": [
     *     {
     *       "id": "b0b91aad-8a9a-4d46-9aff-e35d004f0a1f"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.authorBio')
    readonly onAuthorBio: Observable<RenderingContext>;

    /**
     * @see #onAuthorBio
     */
    @RenderingContextBinding()
    readonly authorBio: RenderingContext;

    protected constructor() {
        super();
    }
}
