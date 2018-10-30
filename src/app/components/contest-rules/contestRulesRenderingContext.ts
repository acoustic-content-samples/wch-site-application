/**
 * Do not modify this file, it is auto-generated.
 */
import {
	SingleFormattedTextElement,
	SingleTextElement,
	RenderingContext,
} from '@ibm-wch-sdk/ng';

export const KEY_TITLE = 'title';
export const KEY_CONTEST_RULES = 'contestRules';

/*
 * @name Contest rules
 * @id b77f0bfd-d068-44cc-a41c-fc15a0123c09
 */
export interface ContestRulesRenderingContext extends RenderingContext {
	/*
     * The ID of the content type this item belongs to.
     */
	typeId: 'b77f0bfd-d068-44cc-a41c-fc15a0123c09';

	/*
     * this is the link to the content type document this content is based on.
     */
	type: 'Contest rules';

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
		 *   "key": "title",
		 *   "label": "Title"
		 * }
		 */
		['title']?: SingleTextElement;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "contestRules",
		 *   "label": "Contest rules"
		 * }
		 */
		['contestRules']?: SingleFormattedTextElement;
	};

	text: {
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "title",
		 *   "label": "Title"
		 * }
		 */
		['title']?: string;
	};

	formattedtext: {
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "contestRules",
		 *   "label": "Contest rules"
		 * }
		 */
		['contestRules']?: string;
	};
}
