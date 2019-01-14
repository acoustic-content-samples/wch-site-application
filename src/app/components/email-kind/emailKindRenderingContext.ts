/**
 * Do not modify this file, it is auto-generated.
 */
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmailKind, KEY_MAINFEATURE, isEmailKind } from './../../elements/email-kind/emailKindType';
import { RenderingContext } from '@ibm-wch-sdk/api';
import { pluckPath } from '@ibm-wch-sdk/utils';
import { UnaryFunction } from 'rxjs';

/*
 * @name Email kind
 * @id afaa1822-2d11-4c26-ab25-171d335751b6
 */
export interface EmailKindRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: 'afaa1822-2d11-4c26-ab25-171d335751b6';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'Email kind';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: EmailKind;

    reference: {
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
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link EmailKindRenderingContext } else false
 */
export function isEmailKindRenderingContext(aContext: RenderingContext): aContext is EmailKindRenderingContext {
    return !!aContext && isEmailKind(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link EmailKindRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link EmailKindRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.pipe(map(assertEmailKindRenderingContext));
 */
export function assertEmailKindRenderingContext(aContext: RenderingContext): EmailKindRenderingContext {
    // test if the context is as expected
    if (isEmailKindRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('EmailKindRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link EmailKindRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opEmailKindRenderingContext);
 */
export const opEmailKindRenderingContext: OperatorFunction<RenderingContext, EmailKindRenderingContext> = map<RenderingContext, EmailKindRenderingContext>(assertEmailKindRenderingContext);

/**
 * Selects the mainfeature from the EmailKindRenderingContext.
 *
 * @param ctx the EmailKindRenderingContext
 * @return the selected value or undefined
 *
 * @example this.onRenderingContext.pipe(opEmailKindRenderingContext, map(selectMainfeature));
*/
export const selectMainfeature: UnaryFunction<EmailKindRenderingContext, RenderingContext> = pluckPath<RenderingContext>(['reference', KEY_MAINFEATURE]);