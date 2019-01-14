/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs';
import { EmailKindRenderingContext, assertEmailKindRenderingContext, isEmailKindRenderingContext } from './emailKindRenderingContext';
import { RenderingContext } from '@ibm-wch-sdk/api';
import { AbstractRenderingComponent, RenderingContextBinding } from '@ibm-wch-sdk/ng';

/*
 * @name Email kind
 * @id afaa1822-2d11-4c26-ab25-171d335751b6
 */
abstract class AbstractEmailKindComponent extends AbstractRenderingComponent {

    /**
    * Strongly typed stream of the rendering contexts
    */
    readonly onRenderingContext: Observable<RenderingContext>;

    /**
    * Strongly typed rendering context
    */
    renderingContext: RenderingContext;

    /*
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
    @RenderingContextBinding('reference.mainfeature')
    readonly onMainfeature: Observable<RenderingContext>;

    /*
     * @see #onMainfeature
     */
    @RenderingContextBinding()
    readonly mainfeature: RenderingContext;

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    EmailKindRenderingContext,
    isEmailKindRenderingContext,
    assertEmailKindRenderingContext,
    AbstractEmailKindComponent
};