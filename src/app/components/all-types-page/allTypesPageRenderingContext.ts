/**
 * Do not modify this file, it is auto-generated.
 */
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllTypesPage, KEY_BANNER, KEY_SECTION_ONE, KEY_SECTION_TWO, isAllTypesPage } from './../../elements/all-types-page/allTypesPageType';
import { RenderingContext } from '@ibm-wch-sdk/api';
import { pluckPath } from '@ibm-wch-sdk/utils';
import { UnaryFunction } from 'rxjs';

/*
 * @name All types page
 * @id 9f8e8bb3-ae85-4827-9850-2397141a0f21
 * @description Include multiple sections for greater flexibility. Each section can include any type of content.
 */
export interface AllTypesPageRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: '9f8e8bb3-ae85-4827-9850-2397141a0f21';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'All types page';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: AllTypesPage;

    references: {
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
    ['banner']?: RenderingContext[];
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
    ['sectionOne']?: RenderingContext[];
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
    ['sectionTwo']?: RenderingContext[];
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link AllTypesPageRenderingContext } else false
 */
export function isAllTypesPageRenderingContext(aContext: RenderingContext): aContext is AllTypesPageRenderingContext {
    return !!aContext && isAllTypesPage(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link AllTypesPageRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link AllTypesPageRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.pipe(map(assertAllTypesPageRenderingContext));
 */
export function assertAllTypesPageRenderingContext(aContext: RenderingContext): AllTypesPageRenderingContext {
    // test if the context is as expected
    if (isAllTypesPageRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('AllTypesPageRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link AllTypesPageRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opAllTypesPageRenderingContext);
 */
export const opAllTypesPageRenderingContext: OperatorFunction<RenderingContext, AllTypesPageRenderingContext> = map<RenderingContext, AllTypesPageRenderingContext>(assertAllTypesPageRenderingContext);

/**
 * Selects the banner from the AllTypesPageRenderingContext.
 *
 * @param ctx the AllTypesPageRenderingContext
 * @return the selected value or undefined
 *
 * @example this.onRenderingContext.pipe(opAllTypesPageRenderingContext, map(selectBanner));
*/
export const selectBanner: UnaryFunction<AllTypesPageRenderingContext, RenderingContext[]> = pluckPath<RenderingContext[]>(['references', KEY_BANNER]);

/**
 * Selects the sectionOne from the AllTypesPageRenderingContext.
 *
 * @param ctx the AllTypesPageRenderingContext
 * @return the selected value or undefined
 *
 * @example this.onRenderingContext.pipe(opAllTypesPageRenderingContext, map(selectSectionOne));
*/
export const selectSectionOne: UnaryFunction<AllTypesPageRenderingContext, RenderingContext[]> = pluckPath<RenderingContext[]>(['references', KEY_SECTION_ONE]);

/**
 * Selects the sectionTwo from the AllTypesPageRenderingContext.
 *
 * @param ctx the AllTypesPageRenderingContext
 * @return the selected value or undefined
 *
 * @example this.onRenderingContext.pipe(opAllTypesPageRenderingContext, map(selectSectionTwo));
*/
export const selectSectionTwo: UnaryFunction<AllTypesPageRenderingContext, RenderingContext[]> = pluckPath<RenderingContext[]>(['references', KEY_SECTION_TWO]);