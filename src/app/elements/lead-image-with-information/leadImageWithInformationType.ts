/**
 * Do not modify this file, it is auto-generated.
 */
import {
	GroupElement,
	Image,
	SingleImageElement,
	SingleTextElement,
	isMultiGroupElement,
	isSingleGroupElement,
	isSingleImageElement,
	isSingleTextElement,
} from '@ibm-wch-sdk/ng';

export const KEY_LEAD_IMAGE = 'leadImage';
export const KEY_LEAD_IMAGE_CAPTION = 'leadImageCaption';
export const KEY_LEAD_IMAGE_CREDIT = 'leadImageCredit';

/*
 * @name Lead image with information
 * @id fe31fbf4-4bc4-4ffa-9b27-615af51d23fe
 */
export interface LeadImageWithInformation {
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
	 *   "imageProfileId": "3428916c-b356-4b47-aeb2-5eb8e3494b00",
	 *   "key": "leadImage",
	 *   "label": "Lead image",
	 *   "required": true
	 * }
	 */
	['leadImage']: SingleImageElement;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCaption",
	 *   "label": "Lead image caption"
	 * }
	 */
	['leadImageCaption']?: SingleTextElement;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCredit",
	 *   "label": "Lead image credit"
	 * }
	 */
	['leadImageCredit']?: SingleTextElement;
}

export interface LeadImageWithInformationElement extends GroupElement {
	/**
	 * Pin the type reference to the well known ID
	 */
	typeRef: {
		id: 'fe31fbf4-4bc4-4ffa-9b27-615af51d23fe';
	};
}

export interface SingleLeadImageWithInformationElement
	extends LeadImageWithInformationElement {
	value: LeadImageWithInformation;
}

export interface MultiLeadImageWithInformationElement
	extends LeadImageWithInformationElement {
	values: LeadImageWithInformation[];
}

/**
 * Tests if the value is of type LeadImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type LeadImageWithInformationElement else false
 */
export function isLeadImageWithInformation(
	aValue: any
): aValue is LeadImageWithInformation {
	return (
		!!aValue &&
		isSingleImageElement(aValue[KEY_LEAD_IMAGE]) &&
		(!aValue[KEY_LEAD_IMAGE_CAPTION] ||
			isSingleTextElement(aValue[KEY_LEAD_IMAGE_CAPTION])) &&
		(!aValue[KEY_LEAD_IMAGE_CREDIT] ||
			isSingleTextElement(aValue[KEY_LEAD_IMAGE_CREDIT]))
	);
}

/**
 * Tests if the value is of type SingleLeadImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleLeadImageWithInformationElement else false
 */
export function isSingleLeadImageWithInformationElement(
	aValue: any
): aValue is SingleLeadImageWithInformationElement {
	return (
		isSingleGroupElement(aValue) && isLeadImageWithInformation(aValue.value)
	);
}

/**
 * Tests if the value is of type MultiLeadImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiLeadImageWithInformationElement else false
 */
export function isMultiLeadImageWithInformationElement(
	aValue: any
): aValue is MultiLeadImageWithInformationElement {
	return (
		isMultiGroupElement(aValue) &&
		aValue.values.every(isLeadImageWithInformation)
	);
}

/*
 * @name Lead image with information
 * @id fe31fbf4-4bc4-4ffa-9b27-615af51d23fe
 */
export interface LeadImageWithInformationType {
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
	 *   "imageProfileId": "3428916c-b356-4b47-aeb2-5eb8e3494b00",
	 *   "key": "leadImage",
	 *   "label": "Lead image",
	 *   "required": true
	 * }
	 */
	['leadImage']: Image;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCaption",
	 *   "label": "Lead image caption"
	 * }
	 */
	['leadImageCaption']?: string;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "leadImageCredit",
	 *   "label": "Lead image credit"
	 * }
	 */
	['leadImageCredit']?: string;
}
