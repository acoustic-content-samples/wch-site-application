/**
 * Do not modify this file, it is auto-generated.
 */
import {
	SingleLinkElement,
	SingleTextElement,
	RenderingContext,
} from '@ibm-wch-sdk/ng';

export const KEY_HEADLINE = 'headline';
export const KEY_NAME = 'name';
export const KEY_EMAIL = 'email';
export const KEY_ENTER = 'enter';

/*
 * @name Form component
 * @id 7df801d8-1d55-4652-ac59-93589b032375
 */
export interface FormComponentRenderingContext extends RenderingContext {
	/*
     * The ID of the content type this item belongs to.
     */
	typeId: '7df801d8-1d55-4652-ac59-93589b032375';

	/*
     * this is the link to the content type document this content is based on.
     */
	type: 'Form component';

	/*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
	classification: 'content';

	/*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
	elements: {
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "headline",
		 *   "label": "Headline"
		 * }
		 */
		['headline']?: SingleTextElement;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "name",
		 *   "label": "Name"
		 * }
		 */
		['name']?: SingleTextElement;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "email",
		 *   "label": "Email address"
		 * }
		 */
		['email']?: SingleTextElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "enter",
		 *   "label": "Enter"
		 * }
		 */
		['enter']?: SingleLinkElement;
	};

	text: {
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "headline",
		 *   "label": "Headline"
		 * }
		 */
		['headline']?: string;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "name",
		 *   "label": "Name"
		 * }
		 */
		['name']?: string;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "email",
		 *   "label": "Email address"
		 * }
		 */
		['email']?: string;
	};

	link: {
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "enter",
		 *   "label": "Enter"
		 * }
		 */
		['enter']?: SingleLinkElement;
	};
}
