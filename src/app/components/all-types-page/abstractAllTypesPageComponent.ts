/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs';
import { AllTypesPageRenderingContext, assertAllTypesPageRenderingContext, isAllTypesPageRenderingContext } from './allTypesPageRenderingContext';
import { RenderingContext } from '@ibm-wch-sdk/api';
import { AbstractRenderingComponent, RenderingContextBinding } from '@ibm-wch-sdk/ng';

/*
 * @name All types page
 * @id 9f8e8bb3-ae85-4827-9850-2397141a0f21
 * @description Include multiple sections for greater flexibility. Each section can include any type of content.
 */
abstract class AbstractAllTypesPageComponent extends AbstractRenderingComponent {

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
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Banner section",
     *   "helpText": "Add content, such as a hero banner, that you want to display at the top of your page.",
     *   "key": "banner",
     *   "label": "Banner section",
     *   "minimumValues": 0
     * }
     */
    @RenderingContextBinding('references.banner', [])
    readonly onBanner: Observable<RenderingContext[]>;

    /*
     * @see #onBanner
     */
    @RenderingContextBinding()
    readonly banner: RenderingContext[];

    /*
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
    @RenderingContextBinding('references.sectionOne', [])
    readonly onSectionOne: Observable<RenderingContext[]>;

    /*
     * @see #onSectionOne
     */
    @RenderingContextBinding()
    readonly sectionOne: RenderingContext[];

    /*
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
    @RenderingContextBinding('references.sectionTwo', [])
    readonly onSectionTwo: Observable<RenderingContext[]>;

    /*
     * @see #onSectionTwo
     */
    @RenderingContextBinding()
    readonly sectionTwo: RenderingContext[];

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    AllTypesPageRenderingContext,
    isAllTypesPageRenderingContext,
    assertAllTypesPageRenderingContext,
    AbstractAllTypesPageComponent
};