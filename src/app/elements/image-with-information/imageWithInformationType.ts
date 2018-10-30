/**
 * Do not modify this file, it is auto-generated.
 */
import {
	Category,
	CategoryElement,
	GroupElement,
	Image,
	SingleImageElement,
	SingleTextElement,
	isCategoryElement,
	isMultiGroupElement,
	isSingleGroupElement,
	isSingleImageElement,
	isSingleTextElement,
} from '@ibm-wch-sdk/ng';

export const KEY_IMAGE = 'image';
export const KEY_IMAGE_SIZE = 'imageSize';
export const KEY_IMAGE_PLACEMENT = 'imagePlacement';
export const KEY_IMAGE_CAPTION = 'imageCaption';
export const KEY_IMAGE_CREDIT = 'imageCredit';

/*
 * @name Image with information
 * @id f9e7f0b9-f57d-4d91-a257-54a64c1ff52f
 * @description Used mainly for the design articles and includes caption and credit information.
 */
export interface ImageWithInformation {
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
	 *   "imageProfileId": "92600283-a254-4965-88fb-4950254f6e67",
	 *   "key": "image",
	 *   "label": "Image",
	 *   "required": true
	 * }
	 */
	['image']: SingleImageElement;

	/**
	 * {
	 *   "elementType": "category",
	 *   "key": "imageSize",
	 *   "label": "Image size",
	 *   "required": true,
	 *   "restrictedParents": [
	 *     "0e1cd869-ee48-4ef6-ae6d-7be957c84d10"
	 *   ]
	 * }
	 */
	['imageSize']: CategoryElement;

	/**
	 * {
	 *   "elementType": "category",
	 *   "helpText": "Image placement is only used with the feature type of content.",
	 *   "key": "imagePlacement",
	 *   "label": "Image placement",
	 *   "restrictedParents": [
	 *     "6f037a1b-8f2e-4458-839e-a49fa0227dba"
	 *   ]
	 * }
	 */
	['imagePlacement']?: CategoryElement;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCaption",
	 *   "label": "Image caption"
	 * }
	 */
	['imageCaption']?: SingleTextElement;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCredit",
	 *   "label": "Image credit"
	 * }
	 */
	['imageCredit']?: SingleTextElement;
}

export interface ImageWithInformationElement extends GroupElement {
	/**
	 * Pin the type reference to the well known ID
	 */
	typeRef: {
		id: 'f9e7f0b9-f57d-4d91-a257-54a64c1ff52f';
	};
}

export interface SingleImageWithInformationElement
	extends ImageWithInformationElement {
	value: ImageWithInformation;
}

export interface MultiImageWithInformationElement
	extends ImageWithInformationElement {
	values: ImageWithInformation[];
}

/**
 * Tests if the value is of type ImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type ImageWithInformationElement else false
 */
export function isImageWithInformation(
	aValue: any
): aValue is ImageWithInformation {
	return (
		!!aValue &&
		isSingleImageElement(aValue[KEY_IMAGE]) &&
		isCategoryElement(aValue[KEY_IMAGE_SIZE]) &&
		(!aValue[KEY_IMAGE_PLACEMENT] ||
			isCategoryElement(aValue[KEY_IMAGE_PLACEMENT])) &&
		(!aValue[KEY_IMAGE_CAPTION] ||
			isSingleTextElement(aValue[KEY_IMAGE_CAPTION])) &&
		(!aValue[KEY_IMAGE_CREDIT] ||
			isSingleTextElement(aValue[KEY_IMAGE_CREDIT]))
	);
}

/**
 * Tests if the value is of type SingleImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleImageWithInformationElement else false
 */
export function isSingleImageWithInformationElement(
	aValue: any
): aValue is SingleImageWithInformationElement {
	return isSingleGroupElement(aValue) && isImageWithInformation(aValue.value);
}

/**
 * Tests if the value is of type MultiImageWithInformationElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiImageWithInformationElement else false
 */
export function isMultiImageWithInformationElement(
	aValue: any
): aValue is MultiImageWithInformationElement {
	return (
		isMultiGroupElement(aValue) &&
		aValue.values.every(isImageWithInformation)
	);
}

/*
 * @name Image with information
 * @id f9e7f0b9-f57d-4d91-a257-54a64c1ff52f
 * @description Used mainly for the design articles and includes caption and credit information.
 */
export interface ImageWithInformationType {
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
	 *   "imageProfileId": "92600283-a254-4965-88fb-4950254f6e67",
	 *   "key": "image",
	 *   "label": "Image",
	 *   "required": true
	 * }
	 */
	['image']: Image;

	/**
	 * {
	 *   "elementType": "category",
	 *   "key": "imageSize",
	 *   "label": "Image size",
	 *   "required": true,
	 *   "restrictedParents": [
	 *     "0e1cd869-ee48-4ef6-ae6d-7be957c84d10"
	 *   ]
	 * }
	 */
	['imageSize']: Category;

	/**
	 * {
	 *   "elementType": "category",
	 *   "helpText": "Image placement is only used with the feature type of content.",
	 *   "key": "imagePlacement",
	 *   "label": "Image placement",
	 *   "restrictedParents": [
	 *     "6f037a1b-8f2e-4458-839e-a49fa0227dba"
	 *   ]
	 * }
	 */
	['imagePlacement']?: Category;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCaption",
	 *   "label": "Image caption"
	 * }
	 */
	['imageCaption']?: string;

	/**
	 * {
	 *   "elementType": "text",
	 *   "fieldLabel": "Text",
	 *   "key": "imageCredit",
	 *   "label": "Image credit"
	 * }
	 */
	['imageCredit']?: string;
}
