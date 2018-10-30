/**
 * Do not modify this file, it is auto-generated.
 */
import {
	ImageWithInformationType,
	MultiImageWithInformationElement,
	isMultiImageWithInformationElement,
} from './../image-with-information/imageWithInformationType';
import {
	LeadImageWithInformationType,
	SingleLeadImageWithInformationElement,
	isSingleLeadImageWithInformationElement,
} from './../lead-image-with-information/leadImageWithInformationType';
import {
	GroupElement,
	MultiFormattedTextElement,
	RenderingContext,
	SingleDateElement,
	SingleReferenceElement,
	SingleTextElement,
	isMultiFormattedTextElement,
	isMultiGroupElement,
	isSingleDateElement,
	isSingleGroupElement,
	isSingleReferenceElement,
	isSingleTextElement,
} from '@ibm-wch-sdk/ng';

export const KEY_HEADING = 'heading';
export const KEY_MAIN_IMAGE = 'mainImage';
export const KEY_AUTHOR = 'author';
export const KEY_DATE = 'date';
export const KEY_BODY = 'body';
export const KEY_BODY_IMAGE = 'bodyImage';
export const KEY_AUTHOR_BIO = 'authorBio';

/*
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
export interface DesignArticle {
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
	['heading']: SingleTextElement;

	/**
	 * {
	 *   "elementType": "group",
	 *   "key": "mainImage",
	 *   "label": "Lead image",
	 *   "required": true,
	 *   "typeRef": {
	 *     "id": "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe"
	 *   }
	 * }
	 */
	['mainImage']: SingleLeadImageWithInformationElement;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "helpText": "",
	 *   "key": "author",
	 *   "label": "Author name"
	 * }
	 */
	['author']?: SingleTextElement;

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
	['date']: SingleDateElement;

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
	['body']: MultiFormattedTextElement;

	/**
	 * {
	 *   "allowMultipleValues": true,
	 *   "elementType": "group",
	 *   "fieldLabel": "Design article image",
	 *   "key": "bodyImage",
	 *   "label": "images for body sections",
	 *   "minimumValues": 3,
	 *   "required": true,
	 *   "typeRef": {
	 *     "id": "f9e7f0b9-f57d-4d91-a257-54a64c1ff52f"
	 *   }
	 * }
	 */
	['bodyImage']: MultiImageWithInformationElement;

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
	['authorBio']?: SingleReferenceElement;
}

export interface DesignArticleElement extends GroupElement {
	/**
	 * Pin the type reference to the well known ID
	 */
	typeRef: {
		id: 'a8fa51a3-4919-4308-a0b3-6cd31ae15d7e';
	};
}

export interface SingleDesignArticleElement extends DesignArticleElement {
	value: DesignArticle;
}

export interface MultiDesignArticleElement extends DesignArticleElement {
	values: DesignArticle[];
}

/**
 * Tests if the value is of type DesignArticleElement
 *
 * @param aValue the value to test
 * @return true if the value if of type DesignArticleElement else false
 */
export function isDesignArticle(aValue: any): aValue is DesignArticle {
	return (
		!!aValue &&
		isSingleTextElement(aValue[KEY_HEADING]) &&
		isSingleLeadImageWithInformationElement(aValue[KEY_MAIN_IMAGE]) &&
		(!aValue[KEY_AUTHOR] || isSingleTextElement(aValue[KEY_AUTHOR])) &&
		isSingleDateElement(aValue[KEY_DATE]) &&
		isMultiFormattedTextElement(aValue[KEY_BODY]) &&
		isMultiImageWithInformationElement(aValue[KEY_BODY_IMAGE]) &&
		(!aValue[KEY_AUTHOR_BIO] ||
			isSingleReferenceElement(aValue[KEY_AUTHOR_BIO]))
	);
}

/**
 * Tests if the value is of type SingleDesignArticleElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleDesignArticleElement else false
 */
export function isSingleDesignArticleElement(
	aValue: any
): aValue is SingleDesignArticleElement {
	return isSingleGroupElement(aValue) && isDesignArticle(aValue.value);
}

/**
 * Tests if the value is of type MultiDesignArticleElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiDesignArticleElement else false
 */
export function isMultiDesignArticleElement(
	aValue: any
): aValue is MultiDesignArticleElement {
	return isMultiGroupElement(aValue) && aValue.values.every(isDesignArticle);
}

/*
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
export interface DesignArticleType {
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
	['heading']: string;

	/**
	 * {
	 *   "elementType": "group",
	 *   "key": "mainImage",
	 *   "label": "Lead image",
	 *   "required": true,
	 *   "typeRef": {
	 *     "id": "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe"
	 *   }
	 * }
	 */
	['mainImage']: LeadImageWithInformationType;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "helpText": "",
	 *   "key": "author",
	 *   "label": "Author name"
	 * }
	 */
	['author']?: string;

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
	['date']: Date;

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
	['body']: string;

	/**
	 * {
	 *   "allowMultipleValues": true,
	 *   "elementType": "group",
	 *   "fieldLabel": "Design article image",
	 *   "key": "bodyImage",
	 *   "label": "images for body sections",
	 *   "minimumValues": 3,
	 *   "required": true,
	 *   "typeRef": {
	 *     "id": "f9e7f0b9-f57d-4d91-a257-54a64c1ff52f"
	 *   }
	 * }
	 */
	['bodyImage']: ImageWithInformationType;

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
	['authorBio']?: RenderingContext;
}
