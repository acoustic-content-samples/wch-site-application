/**
 * Do not modify this file, it is auto-generated.
 */
import {
	SingleImageElement,
	SingleLinkElement,
	SingleTextElement,
	RenderingContext,
} from '@ibm-wch-sdk/ng';

export const KEY_TITLE = 'title';
export const KEY_FB_IMAGE = 'fbImage';
export const KEY_FACEBOOK = 'facebook';
export const KEY_TWITTER_IMAGE = 'twitterImage';
export const KEY_TWITTER = 'twitter';
export const KEY_INSTAGRAM_IMAGE = 'instagramImage';
export const KEY_INSTAGRAM = 'instagram';

/*
 * @name Social component
 * @id 71689897-4505-4c1e-85c9-a57810158a4e
 */
export interface SocialComponentRenderingContext extends RenderingContext {
	/*
     * The ID of the content type this item belongs to.
     */
	typeId: '71689897-4505-4c1e-85c9-a57810158a4e';

	/*
     * this is the link to the content type document this content is based on.
     */
	type: 'Social component';

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
		 *   "elementType": "image",
		 *   "key": "fbImage",
		 *   "label": "Facebook image"
		 * }
		 */
		['fbImage']?: SingleImageElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "facebook",
		 *   "label": "Facebook"
		 * }
		 */
		['facebook']?: SingleLinkElement;
		/**
		 * {
		 *   "elementType": "image",
		 *   "key": "twitterImage",
		 *   "label": "Twitter image"
		 * }
		 */
		['twitterImage']?: SingleImageElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "twitter",
		 *   "label": "Twitter"
		 * }
		 */
		['twitter']?: SingleLinkElement;
		/**
		 * {
		 *   "elementType": "image",
		 *   "key": "instagramImage",
		 *   "label": "Instagram image"
		 * }
		 */
		['instagramImage']?: SingleImageElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "instagram",
		 *   "label": "Instagram"
		 * }
		 */
		['instagram']?: SingleLinkElement;
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

	image: {
		/**
		 * {
		 *   "elementType": "image",
		 *   "key": "fbImage",
		 *   "label": "Facebook image"
		 * }
		 */
		['fbImage']?: SingleImageElement;
		/**
		 * {
		 *   "elementType": "image",
		 *   "key": "twitterImage",
		 *   "label": "Twitter image"
		 * }
		 */
		['twitterImage']?: SingleImageElement;
		/**
		 * {
		 *   "elementType": "image",
		 *   "key": "instagramImage",
		 *   "label": "Instagram image"
		 * }
		 */
		['instagramImage']?: SingleImageElement;
	};

	link: {
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "facebook",
		 *   "label": "Facebook"
		 * }
		 */
		['facebook']?: SingleLinkElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "twitter",
		 *   "label": "Twitter"
		 * }
		 */
		['twitter']?: SingleLinkElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "instagram",
		 *   "label": "Instagram"
		 * }
		 */
		['instagram']?: SingleLinkElement;
	};
}
