/**
 * Do not modify this file, it is auto-generated.
 */
import { GroupElement, MultiReferenceElement, RenderingContext } from '@ibm-wch-sdk/api';
import { isMultiGroupElement as _isMultiGroupElement, isMultiReferenceElement as _isMultiReferenceElement, isNil as _isNil, isSingleGroupElement as _isSingleGroupElement } from '@ibm-wch-sdk/utils';

export const TYPE_ID = '9f8e8bb3-ae85-4827-9850-2397141a0f21';
export const TYPE_NAME = 'All types page';
export const KEY_BANNER = 'banner';
export const KEY_SECTION_ONE = 'sectionOne';
export const KEY_SECTION_TWO = 'sectionTwo';

/*
 * @name All types page
 * @id 9f8e8bb3-ae85-4827-9850-2397141a0f21
 * @description Include multiple sections for greater flexibility. Each section can include any type of content.
 */
export interface AllTypesPage {

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
    ['banner']?: MultiReferenceElement;

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
    ['sectionOne']?: MultiReferenceElement;

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
    ['sectionTwo']?: MultiReferenceElement;
}

export interface AllTypesPageElement extends GroupElement {
    /**
    * Pin the type reference to the well known ID
    */
    typeRef: {
        id: '9f8e8bb3-ae85-4827-9850-2397141a0f21'
    };
}

export interface SingleAllTypesPageElement extends AllTypesPageElement {
    value: AllTypesPage;
}

export interface MultiAllTypesPageElement extends AllTypesPageElement {
    values: AllTypesPage[];
}

/**
 * Tests if the value is of type AllTypesPageElement
 *
 * @param aValue the value to test
 * @return true if the value is of type AllTypesPageElement else false
*/
export function isAllTypesPage(aValue: any): aValue is AllTypesPage {
    return !!aValue
        && (!aValue[KEY_BANNER] || _isMultiReferenceElement(aValue[KEY_BANNER], true))
        && (!aValue[KEY_SECTION_ONE] || _isMultiReferenceElement(aValue[KEY_SECTION_ONE], true))
        && (!aValue[KEY_SECTION_TWO] || _isMultiReferenceElement(aValue[KEY_SECTION_TWO], true))
        ;
}

/**
 * Tests if the value is of type SingleAllTypesPageElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleAllTypesPageElement else false
*/
export function isSingleAllTypesPageElement(aValue: any, bOptional?: boolean): aValue is SingleAllTypesPageElement {
    return _isSingleGroupElement(aValue, bOptional) && ((bOptional && _isNil(aValue.value)) || isAllTypesPage(aValue.value));
}

/**
 * Tests if the value is of type MultiAllTypesPageElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiAllTypesPageElement else false
*/
export function isMultiAllTypesPageElement(aValue: any, bOptional?: boolean): aValue is MultiAllTypesPageElement {
    return _isMultiGroupElement(aValue, bOptional) && ((bOptional && _isNil(aValue.values)) || aValue.values.every(isAllTypesPage));
}

/*
 * @name All types page
 * @id 9f8e8bb3-ae85-4827-9850-2397141a0f21
 * @description Include multiple sections for greater flexibility. Each section can include any type of content.
 */
export interface AllTypesPageType {

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
    ['banner']?: RenderingContext;

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
    ['sectionOne']?: RenderingContext;

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
    ['sectionTwo']?: RenderingContext;
}