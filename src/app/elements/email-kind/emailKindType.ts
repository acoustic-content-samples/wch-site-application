/**
 * Do not modify this file, it is auto-generated.
 */
import { GroupElement, RenderingContext, SingleReferenceElement } from '@ibm-wch-sdk/api';
import { isMultiGroupElement as _isMultiGroupElement, isNil as _isNil, isSingleGroupElement as _isSingleGroupElement, isSingleReferenceElement as _isSingleReferenceElement } from '@ibm-wch-sdk/utils';

export const TYPE_ID = 'afaa1822-2d11-4c26-ab25-171d335751b6';
export const TYPE_NAME = 'Email kind';
export const KEY_MAINFEATURE = 'mainfeature';

/*
 * @name Email kind
 * @id afaa1822-2d11-4c26-ab25-171d335751b6
 */
export interface EmailKind {

    /**
     * {
     *   "elementType": "reference",
     *   "key": "mainfeature",
     *   "label": "mainFeature",
     *   "restrictTypes": [
     *     {
     *       "id": "02d4e81b-7a06-4da5-bdc9-ea300babab48"
     *     }
     *   ]
     * }
    */
    ['mainfeature']?: SingleReferenceElement;
}

export interface EmailKindElement extends GroupElement {
    /**
    * Pin the type reference to the well known ID
    */
    typeRef: {
        id: 'afaa1822-2d11-4c26-ab25-171d335751b6'
    };
}

export interface SingleEmailKindElement extends EmailKindElement {
    value: EmailKind;
}

export interface MultiEmailKindElement extends EmailKindElement {
    values: EmailKind[];
}

/**
 * Tests if the value is of type EmailKindElement
 *
 * @param aValue the value to test
 * @return true if the value is of type EmailKindElement else false
*/
export function isEmailKind(aValue: any): aValue is EmailKind {
    return !!aValue
        && (!aValue[KEY_MAINFEATURE] || _isSingleReferenceElement(aValue[KEY_MAINFEATURE], true))
        ;
}

/**
 * Tests if the value is of type SingleEmailKindElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleEmailKindElement else false
*/
export function isSingleEmailKindElement(aValue: any, bOptional?: boolean): aValue is SingleEmailKindElement {
    return _isSingleGroupElement(aValue, bOptional) && ((bOptional && _isNil(aValue.value)) || isEmailKind(aValue.value));
}

/**
 * Tests if the value is of type MultiEmailKindElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiEmailKindElement else false
*/
export function isMultiEmailKindElement(aValue: any, bOptional?: boolean): aValue is MultiEmailKindElement {
    return _isMultiGroupElement(aValue, bOptional) && ((bOptional && _isNil(aValue.values)) || aValue.values.every(isEmailKind));
}

/*
 * @name Email kind
 * @id afaa1822-2d11-4c26-ab25-171d335751b6
 */
export interface EmailKindType {

    /**
     * {
     *   "elementType": "reference",
     *   "key": "mainfeature",
     *   "label": "mainFeature",
     *   "restrictTypes": [
     *     {
     *       "id": "02d4e81b-7a06-4da5-bdc9-ea300babab48"
     *     }
     *   ]
     * }
    */
    ['mainfeature']?: RenderingContext;
}