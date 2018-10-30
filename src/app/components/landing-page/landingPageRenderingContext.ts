/**
 * Do not modify this file, it is auto-generated.
 */
import {
	SingleFormattedTextElement,
	SingleImageElement,
	SingleLinkElement,
	SingleReferenceElement,
	SingleTextElement,
	RenderingContext,
} from '@ibm-wch-sdk/ng';

export const KEY_HERO_IMAGE = 'heroImage';
export const KEY_HERO_HEADLINE = 'heroHeadline';
export const KEY_HERO_LINK = 'heroLink';
export const KEY_FEATURE_HEADLINE_1 = 'featureHeadline1';
export const KEY_FEATURE_1 = 'feature1';
export const KEY_FEATURE_IMAGE_1 = 'featureImage1';
export const KEY_FEATURE_HEADLINE_2 = 'featureHeadline2';
export const KEY_FEATURE_2 = 'feature2';
export const KEY_FEATURE_IMAGE_2 = 'featureImage2';
export const KEY_FEATURE_HEADLINE_3 = 'featureHeadline3';
export const KEY_FEATURE_3 = 'feature3';
export const KEY_FEATURE_IMAGE_3 = 'featureImage3';
export const KEY_ENTRY_COMPONENT = 'entryComponent';
export const KEY_SHARE_COMPONENT = 'shareComponent';
export const KEY_CONTEST_RULES = 'contestRules';

/*
 * @name Landing page
 * @id 5cd736ef-d01c-4dd9-9794-14b2473e9239
 */
export interface LandingPageRenderingContext extends RenderingContext {
	/*
     * The ID of the content type this item belongs to.
     */
	typeId: '5cd736ef-d01c-4dd9-9794-14b2473e9239';

	/*
     * this is the link to the content type document this content is based on.
     */
	type: 'Landing page';

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
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "30caaaf4-227c-4b7c-8f40-a019f5fa7519",
		 *   "key": "heroImage",
		 *   "label": "Hero image",
		 *   "required": true
		 * }
		 */
		['heroImage']: SingleImageElement;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "heroHeadline",
		 *   "label": "Hero headline",
		 *   "required": true
		 * }
		 */
		['heroHeadline']: SingleFormattedTextElement;
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "heroLink",
		 *   "label": "Hero link"
		 * }
		 */
		['heroLink']?: SingleLinkElement;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline1",
		 *   "label": "Feature headline 1",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline1']: SingleTextElement;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature1",
		 *   "label": "Feature 1",
		 *   "required": true
		 * }
		 */
		['feature1']: SingleFormattedTextElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage1",
		 *   "label": "Feature image 1",
		 *   "required": true
		 * }
		 */
		['featureImage1']: SingleImageElement;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline2",
		 *   "label": "Feature headline 2",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline2']: SingleTextElement;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature2",
		 *   "label": "Feature 2",
		 *   "required": true
		 * }
		 */
		['feature2']: SingleFormattedTextElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage2",
		 *   "label": "Feature image 2",
		 *   "required": true
		 * }
		 */
		['featureImage2']: SingleImageElement;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline3",
		 *   "label": "Feature headline 3",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline3']: SingleTextElement;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature3",
		 *   "label": "Feature 3",
		 *   "required": true
		 * }
		 */
		['feature3']: SingleFormattedTextElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage3",
		 *   "label": "Feature image 3",
		 *   "required": true
		 * }
		 */
		['featureImage3']: SingleImageElement;
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "entryComponent",
		 *   "label": "Entry component",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "7df801d8-1d55-4652-ac59-93589b032375"
		 *     }
		 *   ]
		 * }
		 */
		['entryComponent']?: SingleReferenceElement;
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "shareComponent",
		 *   "label": "Share component",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "71689897-4505-4c1e-85c9-a57810158a4e"
		 *     }
		 *   ]
		 * }
		 */
		['shareComponent']?: SingleReferenceElement;
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "contestRules",
		 *   "label": "Contest rules",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "b77f0bfd-d068-44cc-a41c-fc15a0123c09"
		 *     }
		 *   ]
		 * }
		 */
		['contestRules']?: SingleReferenceElement;
	};

	image: {
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "30caaaf4-227c-4b7c-8f40-a019f5fa7519",
		 *   "key": "heroImage",
		 *   "label": "Hero image",
		 *   "required": true
		 * }
		 */
		['heroImage']: SingleImageElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage1",
		 *   "label": "Feature image 1",
		 *   "required": true
		 * }
		 */
		['featureImage1']: SingleImageElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage2",
		 *   "label": "Feature image 2",
		 *   "required": true
		 * }
		 */
		['featureImage2']: SingleImageElement;
		/**
		 * {
		 *   "acceptType": [
		 *     "jpg",
		 *     "jpeg",
		 *     "png",
		 *     "gif"
		 *   ],
		 *   "elementType": "image",
		 *   "imageProfileId": "72359553-b371-4746-81da-67263751e6c4",
		 *   "key": "featureImage3",
		 *   "label": "Feature image 3",
		 *   "required": true
		 * }
		 */
		['featureImage3']: SingleImageElement;
	};

	formattedtext: {
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "heroHeadline",
		 *   "label": "Hero headline",
		 *   "required": true
		 * }
		 */
		['heroHeadline']: string;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature1",
		 *   "label": "Feature 1",
		 *   "required": true
		 * }
		 */
		['feature1']: string;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature2",
		 *   "label": "Feature 2",
		 *   "required": true
		 * }
		 */
		['feature2']: string;
		/**
		 * {
		 *   "elementType": "formattedtext",
		 *   "key": "feature3",
		 *   "label": "Feature 3",
		 *   "required": true
		 * }
		 */
		['feature3']: string;
	};

	link: {
		/**
		 * {
		 *   "elementType": "link",
		 *   "key": "heroLink",
		 *   "label": "Hero link"
		 * }
		 */
		['heroLink']?: SingleLinkElement;
	};

	text: {
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline1",
		 *   "label": "Feature headline 1",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline1']: string;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline2",
		 *   "label": "Feature headline 2",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline2']: string;
		/**
		 * {
		 *   "elementType": "text",
		 *   "key": "featureHeadline3",
		 *   "label": "Feature headline 3",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['featureHeadline3']: string;
	};

	reference: {
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "entryComponent",
		 *   "label": "Entry component",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "7df801d8-1d55-4652-ac59-93589b032375"
		 *     }
		 *   ]
		 * }
		 */
		['entryComponent']?: RenderingContext;
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "shareComponent",
		 *   "label": "Share component",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "71689897-4505-4c1e-85c9-a57810158a4e"
		 *     }
		 *   ]
		 * }
		 */
		['shareComponent']?: RenderingContext;
		/**
		 * {
		 *   "elementType": "reference",
		 *   "key": "contestRules",
		 *   "label": "Contest rules",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "b77f0bfd-d068-44cc-a41c-fc15a0123c09"
		 *     }
		 *   ]
		 * }
		 */
		['contestRules']?: RenderingContext;
	};
}
