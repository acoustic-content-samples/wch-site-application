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
 * @name Event
 * @id 10ed9f3f-ab41-45a9-ba24-d988974affa7
 * @description Content created from this template is included on the events page in the Oslo site.
 */
export abstract class AbstractEventComponent extends AbstractRenderingComponent {
	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "heading",
	 *   "label": "Event title"
	 * }
	 */
	@RenderingContextBinding('text.heading', '')
	readonly onHeading: Observable<string>;

	/**
	 * @see #onHeading
	 */
	@RenderingContextBinding()
	readonly heading: string;

	/**
	 * {
	 *   "elementType": "datetime",
	 *   "fieldLabel": "Date",
	 *   "key": "date",
	 *   "label": "Event date"
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
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "body",
	 *   "label": "Event description"
	 * }
	 */
	@RenderingContextBinding('formattedtext.body', '')
	readonly onBody: Observable<string>;

	/**
	 * @see #onBody
	 */
	@RenderingContextBinding()
	readonly body: string;

	/**
	 * {
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "eventDetails",
	 *   "label": "Event details"
	 * }
	 */
	@RenderingContextBinding('formattedtext.eventDetails', '')
	readonly onEventDetails: Observable<string>;

	/**
	 * @see #onEventDetails
	 */
	@RenderingContextBinding()
	readonly eventDetails: string;

	/**
	 * {
	 *   "elementType": "formattedtext",
	 *   "fieldLabel": "Formatted Text",
	 *   "key": "eventLocation",
	 *   "label": "Event location"
	 * }
	 */
	@RenderingContextBinding('formattedtext.eventLocation', '')
	readonly onEventLocation: Observable<string>;

	/**
	 * @see #onEventLocation
	 */
	@RenderingContextBinding()
	readonly eventLocation: string;

	/**
	 * {
	 *   "elementType": "link",
	 *   "fieldLabel": "Link",
	 *   "key": "link",
	 *   "label": "Link"
	 * }
	 */
	@RenderingContextBinding('link.link')
	readonly onLink: Observable<Link>;

	/**
	 * @see #onLink
	 */
	@RenderingContextBinding()
	readonly link: Link;

	protected constructor() {
		super();
	}
}
