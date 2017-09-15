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
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Dynamic list
 * @id 84c0e928-6585-4d34-ba02-5ed1b2e4c21c
 * @description The dynamic list lets you define what content to include without selecting specific content.  It keeps your website fresh without having to constantly care for it. In Oslo, the dynamic list is used on the latest design topics page.
 */
export abstract class AbstractDynamicListComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Text",
     *   "key": "listTitle",
     *   "label": "List title"
     * }
     */
    @RenderingContextBinding('text.listTitle', '')
    readonly onListTitle: Observable<string>;

    /**
     * @see #onListTitle
     */
    @RenderingContextBinding()
    readonly listTitle: string;

    /**
     * {
     *   "elementType": "category",
     *   "key": "contentType",
     *   "label": "Content to include",
     *   "required": true,
     *   "restrictedParents": [
     *     "8a1cca57-4e5b-4d66-b8fa-668490b8e9b1"
     *   ]
     * }
     */
    @RenderingContextBinding('category.contentType')
    readonly onContentType: Observable<Category>;

    /**
     * @see #onContentType
     */
    @RenderingContextBinding()
    readonly contentType: Category;

    /**
     * {
     *   "elementType": "category",
     *   "key": "datesToInclude",
     *   "label": "Dates to include",
     *   "restrictedParents": [
     *     "111fd225-b22f-470c-8bfb-425f3f664b52"
     *   ]
     * }
     */
    @RenderingContextBinding('category.datesToInclude')
    readonly onDatesToInclude: Observable<Category>;

    /**
     * @see #onDatesToInclude
     */
    @RenderingContextBinding()
    readonly datesToInclude: Category;

    /**
     * {
     *   "elementType": "category",
     *   "key": "sortOrder",
     *   "label": "List order",
     *   "restrictedParents": [
     *     "52265429-9349-49fe-b35d-f7b71493190e"
     *   ]
     * }
     */
    @RenderingContextBinding('category.sortOrder')
    readonly onSortOrder: Observable<Category>;

    /**
     * @see #onSortOrder
     */
    @RenderingContextBinding()
    readonly sortOrder: Category;

    /**
     * {
     *   "elementType": "number",
     *   "fieldLabel": "Number",
     *   "fieldType": "integer",
     *   "key": "maxItem",
     *   "label": "Maximum number of list items"
     * }
     */
    @RenderingContextBinding('number.maxItem', 0)
    readonly onMaxItem: Observable<number>;

    /**
     * @see #onMaxItem
     */
    @RenderingContextBinding()
    readonly maxItem: number;

    /**
     * {
     *   "elementType": "link",
     *   "fieldLabel": "Link",
     *   "key": "viewAllLink",
     *   "label": "View all link"
     * }
     */
    @RenderingContextBinding('link.viewAllLink')
    readonly onViewAllLink: Observable<Link>;

    /**
     * @see #onViewAllLink
     */
    @RenderingContextBinding()
    readonly viewAllLink: Link;

    protected constructor() {
        super();
    }
}
