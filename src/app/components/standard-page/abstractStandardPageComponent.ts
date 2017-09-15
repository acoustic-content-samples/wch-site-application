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
 * @name Standard page
 * @id 2af1d22a-fecf-41e1-a808-7301cb37b79f
 * @description Standard page has a one column layout which includes multiple sections for greater flexibility.  In the Oslo site, it's used for the Home, Events, and About us pages.
 */
export abstract class AbstractStandardPageComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Banner section",
     *   "helpText": "Add content, such as a hero banner, that you want to display at the top of your page.",
     *   "key": "banner",
     *   "label": "Banner section",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.banner', [])
    readonly onBanner: Observable<RenderingContext[]>;

    /**
     * @see #onBanner
     */
    @RenderingContextBinding()
    readonly banner: RenderingContext[];

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Section content",
     *   "helpText": "Add body content here.",
     *   "key": "sectionOne",
     *   "label": "Section one",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.sectionOne', [])
    readonly onSectionOne: Observable<RenderingContext[]>;

    /**
     * @see #onSectionOne
     */
    @RenderingContextBinding()
    readonly sectionOne: RenderingContext[];

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Section content",
     *   "helpText": "Add more related body content, lists, or images.",
     *   "key": "sectionTwo",
     *   "label": "Section two",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.sectionTwo', [])
    readonly onSectionTwo: Observable<RenderingContext[]>;

    /**
     * @see #onSectionTwo
     */
    @RenderingContextBinding()
    readonly sectionTwo: RenderingContext[];

    protected constructor() {
        super();
    }
}
