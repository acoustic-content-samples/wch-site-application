/**
 * Do not modify this file, it is auto-generated.
 */
import {
	Image,
	Link,
	RenderingContext,
	RenderingContextBinding,
	isImageElement,
	isLinkElement,
	isTextElement,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';
import { SocialComponentRenderingContext } from './socialComponentRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link SocialComponentRenderingContext } else false
 */
function isSocialComponentRenderingContext(
	aContext: RenderingContext
): aContext is SocialComponentRenderingContext {
	// cache access to the elements
	const el = aContext ? aContext.elements || [] : [];
	return (
		!!aContext &&
		(!el['title'] || isTextElement(el['title'])) &&
		(!el['fbImage'] || isImageElement(el['fbImage'])) &&
		(!el['facebook'] || isLinkElement(el['facebook'])) &&
		(!el['twitterImage'] || isImageElement(el['twitterImage'])) &&
		(!el['twitter'] || isLinkElement(el['twitter'])) &&
		(!el['instagramImage'] || isImageElement(el['instagramImage'])) &&
		(!el['instagram'] || isLinkElement(el['instagram']))
	);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link SocialComponentRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link SocialComponentRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertSocialComponentRenderingContext);
 */
function assertSocialComponentRenderingContext(
	aContext: RenderingContext
): SocialComponentRenderingContext {
	// test if the context is as expected
	if (isSocialComponentRenderingContext(aContext)) {
		return aContext;
	}
	// type failure
	throw new TypeError('SocialComponentRenderingContext');
}

/*
 * @name Social component
 * @id 71689897-4505-4c1e-85c9-a57810158a4e
 */
abstract class AbstractSocialComponent extends AbstractRenderingComponent {
	/**
	 * Strongly typed stream of the rendering contexts
	 */
	readonly onRenderingContext: Observable<SocialComponentRenderingContext>;

	/**
	 * Strongly typed rendering context
	 */
	renderingContext: SocialComponentRenderingContext;

	/*
     * {
     *   "elementType": "text",
     *   "key": "title",
     *   "label": "Title"
     * }
     */
	@RenderingContextBinding('text.title', '')
	readonly onTitle: Observable<string>;

	/*
     * @see #onTitle
     */
	@RenderingContextBinding()
	readonly title: string;

	/*
     * {
     *   "elementType": "image",
     *   "key": "fbImage",
     *   "label": "Facebook image"
     * }
     */
	@RenderingContextBinding('image.fbImage')
	readonly onFbImage: Observable<Image>;

	/*
     * @see #onFbImage
     */
	@RenderingContextBinding()
	readonly fbImage: Image;

	/*
     * {
     *   "elementType": "link",
     *   "key": "facebook",
     *   "label": "Facebook"
     * }
     */
	@RenderingContextBinding('link.facebook')
	readonly onFacebook: Observable<Link>;

	/*
     * @see #onFacebook
     */
	@RenderingContextBinding()
	readonly facebook: Link;

	/*
     * {
     *   "elementType": "image",
     *   "key": "twitterImage",
     *   "label": "Twitter image"
     * }
     */
	@RenderingContextBinding('image.twitterImage')
	readonly onTwitterImage: Observable<Image>;

	/*
     * @see #onTwitterImage
     */
	@RenderingContextBinding()
	readonly twitterImage: Image;

	/*
     * {
     *   "elementType": "link",
     *   "key": "twitter",
     *   "label": "Twitter"
     * }
     */
	@RenderingContextBinding('link.twitter')
	readonly onTwitter: Observable<Link>;

	/*
     * @see #onTwitter
     */
	@RenderingContextBinding()
	readonly twitter: Link;

	/*
     * {
     *   "elementType": "image",
     *   "key": "instagramImage",
     *   "label": "Instagram image"
     * }
     */
	@RenderingContextBinding('image.instagramImage')
	readonly onInstagramImage: Observable<Image>;

	/*
     * @see #onInstagramImage
     */
	@RenderingContextBinding()
	readonly instagramImage: Image;

	/*
     * {
     *   "elementType": "link",
     *   "key": "instagram",
     *   "label": "Instagram"
     * }
     */
	@RenderingContextBinding('link.instagram')
	readonly onInstagram: Observable<Link>;

	/*
     * @see #onInstagram
     */
	@RenderingContextBinding()
	readonly instagram: Link;

	protected constructor() {
		super();
	}
}

/**
 * 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
 */
export {
	SocialComponentRenderingContext,
	isSocialComponentRenderingContext,
	assertSocialComponentRenderingContext,
	AbstractSocialComponent,
};
