/**
 * Do not modify this file, it is auto-generated.
 */
import {
	Image,
	Link,
	RenderingContext,
	RenderingContextBinding,
	isFormattedTextElement,
	isImageElement,
	isLinkElement,
	isReferenceElement,
	isTextElement,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';
import { LandingPageRenderingContext } from './landingPageRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link LandingPageRenderingContext } else false
 */
function isLandingPageRenderingContext(
	aContext: RenderingContext
): aContext is LandingPageRenderingContext {
	// cache access to the elements
	const el = aContext ? aContext.elements || [] : [];
	return (
		!!aContext &&
		isImageElement(el['heroImage']) &&
		isFormattedTextElement(el['heroHeadline']) &&
		(!el['heroLink'] || isLinkElement(el['heroLink'])) &&
		isTextElement(el['featureHeadline1']) &&
		isFormattedTextElement(el['feature1']) &&
		isImageElement(el['featureImage1']) &&
		isTextElement(el['featureHeadline2']) &&
		isFormattedTextElement(el['feature2']) &&
		isImageElement(el['featureImage2']) &&
		isTextElement(el['featureHeadline3']) &&
		isFormattedTextElement(el['feature3']) &&
		isImageElement(el['featureImage3']) &&
		(!el['entryComponent'] || isReferenceElement(el['entryComponent'])) &&
		(!el['shareComponent'] || isReferenceElement(el['shareComponent'])) &&
		(!el['contestRules'] || isReferenceElement(el['contestRules']))
	);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link LandingPageRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link LandingPageRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertLandingPageRenderingContext);
 */
function assertLandingPageRenderingContext(
	aContext: RenderingContext
): LandingPageRenderingContext {
	// test if the context is as expected
	if (isLandingPageRenderingContext(aContext)) {
		return aContext;
	}
	// type failure
	throw new TypeError('LandingPageRenderingContext');
}

/*
 * @name Landing page
 * @id 5cd736ef-d01c-4dd9-9794-14b2473e9239
 */
abstract class AbstractLandingPageComponent extends AbstractRenderingComponent {
	/**
	 * Strongly typed stream of the rendering contexts
	 */
	readonly onRenderingContext: Observable<LandingPageRenderingContext>;

	/**
	 * Strongly typed rendering context
	 */
	renderingContext: LandingPageRenderingContext;

	/*
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
	@RenderingContextBinding('image.heroImage')
	readonly onHeroImage: Observable<Image>;

	/*
     * @see #onHeroImage
     */
	@RenderingContextBinding()
	readonly heroImage: Image;

	/*
     * {
     *   "elementType": "formattedtext",
     *   "key": "heroHeadline",
     *   "label": "Hero headline",
     *   "required": true
     * }
     */
	@RenderingContextBinding('formattedtext.heroHeadline')
	readonly onHeroHeadline: Observable<string>;

	/*
     * @see #onHeroHeadline
     */
	@RenderingContextBinding()
	readonly heroHeadline: string;

	/*
     * {
     *   "elementType": "link",
     *   "key": "heroLink",
     *   "label": "Hero link"
     * }
     */
	@RenderingContextBinding('link.heroLink')
	readonly onHeroLink: Observable<Link>;

	/*
     * @see #onHeroLink
     */
	@RenderingContextBinding()
	readonly heroLink: Link;

	/*
     * {
     *   "elementType": "text",
     *   "key": "featureHeadline1",
     *   "label": "Feature headline 1",
     *   "minLength": 1,
     *   "required": true
     * }
     */
	@RenderingContextBinding('text.featureHeadline1')
	readonly onFeatureHeadline1: Observable<string>;

	/*
     * @see #onFeatureHeadline1
     */
	@RenderingContextBinding()
	readonly featureHeadline1: string;

	/*
     * {
     *   "elementType": "formattedtext",
     *   "key": "feature1",
     *   "label": "Feature 1",
     *   "required": true
     * }
     */
	@RenderingContextBinding('formattedtext.feature1')
	readonly onFeature1: Observable<string>;

	/*
     * @see #onFeature1
     */
	@RenderingContextBinding()
	readonly feature1: string;

	/*
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
	@RenderingContextBinding('image.featureImage1')
	readonly onFeatureImage1: Observable<Image>;

	/*
     * @see #onFeatureImage1
     */
	@RenderingContextBinding()
	readonly featureImage1: Image;

	/*
     * {
     *   "elementType": "text",
     *   "key": "featureHeadline2",
     *   "label": "Feature headline 2",
     *   "minLength": 1,
     *   "required": true
     * }
     */
	@RenderingContextBinding('text.featureHeadline2')
	readonly onFeatureHeadline2: Observable<string>;

	/*
     * @see #onFeatureHeadline2
     */
	@RenderingContextBinding()
	readonly featureHeadline2: string;

	/*
     * {
     *   "elementType": "formattedtext",
     *   "key": "feature2",
     *   "label": "Feature 2",
     *   "required": true
     * }
     */
	@RenderingContextBinding('formattedtext.feature2')
	readonly onFeature2: Observable<string>;

	/*
     * @see #onFeature2
     */
	@RenderingContextBinding()
	readonly feature2: string;

	/*
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
	@RenderingContextBinding('image.featureImage2')
	readonly onFeatureImage2: Observable<Image>;

	/*
     * @see #onFeatureImage2
     */
	@RenderingContextBinding()
	readonly featureImage2: Image;

	/*
     * {
     *   "elementType": "text",
     *   "key": "featureHeadline3",
     *   "label": "Feature headline 3",
     *   "minLength": 1,
     *   "required": true
     * }
     */
	@RenderingContextBinding('text.featureHeadline3')
	readonly onFeatureHeadline3: Observable<string>;

	/*
     * @see #onFeatureHeadline3
     */
	@RenderingContextBinding()
	readonly featureHeadline3: string;

	/*
     * {
     *   "elementType": "formattedtext",
     *   "key": "feature3",
     *   "label": "Feature 3",
     *   "required": true
     * }
     */
	@RenderingContextBinding('formattedtext.feature3')
	readonly onFeature3: Observable<string>;

	/*
     * @see #onFeature3
     */
	@RenderingContextBinding()
	readonly feature3: string;

	/*
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
	@RenderingContextBinding('image.featureImage3')
	readonly onFeatureImage3: Observable<Image>;

	/*
     * @see #onFeatureImage3
     */
	@RenderingContextBinding()
	readonly featureImage3: Image;

	/*
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
	@RenderingContextBinding('reference.entryComponent')
	readonly onEntryComponent: Observable<RenderingContext>;

	/*
     * @see #onEntryComponent
     */
	@RenderingContextBinding()
	readonly entryComponent: RenderingContext;

	/*
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
	@RenderingContextBinding('reference.shareComponent')
	readonly onShareComponent: Observable<RenderingContext>;

	/*
     * @see #onShareComponent
     */
	@RenderingContextBinding()
	readonly shareComponent: RenderingContext;

	/*
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
	@RenderingContextBinding('reference.contestRules')
	readonly onContestRules: Observable<RenderingContext>;

	/*
     * @see #onContestRules
     */
	@RenderingContextBinding()
	readonly contestRules: RenderingContext;

	protected constructor() {
		super();
	}
}

/**
 * 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
 */
export {
	LandingPageRenderingContext,
	isLandingPageRenderingContext,
	assertLandingPageRenderingContext,
	AbstractLandingPageComponent,
};
