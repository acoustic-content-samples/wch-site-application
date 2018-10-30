/**
 * Do not modify this file, it is auto-generated.
 */
import {
	Link,
	RenderingContext,
	RenderingContextBinding,
	isLinkElement,
	isTextElement,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';
import { FormComponentRenderingContext } from './formComponentRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link FormComponentRenderingContext } else false
 */
function isFormComponentRenderingContext(
	aContext: RenderingContext
): aContext is FormComponentRenderingContext {
	// cache access to the elements
	const el = aContext ? aContext.elements || [] : [];
	return (
		!!aContext &&
		(!el['headline'] || isTextElement(el['headline'])) &&
		(!el['name'] || isTextElement(el['name'])) &&
		(!el['email'] || isTextElement(el['email'])) &&
		(!el['enter'] || isLinkElement(el['enter']))
	);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link FormComponentRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link FormComponentRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertFormComponentRenderingContext);
 */
function assertFormComponentRenderingContext(
	aContext: RenderingContext
): FormComponentRenderingContext {
	// test if the context is as expected
	if (isFormComponentRenderingContext(aContext)) {
		return aContext;
	}
	// type failure
	throw new TypeError('FormComponentRenderingContext');
}

/*
 * @name Form component
 * @id 7df801d8-1d55-4652-ac59-93589b032375
 */
abstract class AbstractFormComponent extends AbstractRenderingComponent {
	/**
	 * Strongly typed stream of the rendering contexts
	 */
	readonly onRenderingContext: Observable<FormComponentRenderingContext>;

	/**
	 * Strongly typed rendering context
	 */
	renderingContext: FormComponentRenderingContext;

	/*
     * {
     *   "elementType": "text",
     *   "key": "headline",
     *   "label": "Headline"
     * }
     */
	@RenderingContextBinding('text.headline', '')
	readonly onHeadline: Observable<string>;

	/*
     * @see #onHeadline
     */
	@RenderingContextBinding()
	readonly headline: string;

	/*
     * {
     *   "elementType": "text",
     *   "key": "name",
     *   "label": "Name"
     * }
     */
	@RenderingContextBinding('text.name', '')
	readonly onName: Observable<string>;

	/*
     * @see #onName
     */
	@RenderingContextBinding()
	readonly name: string;

	/*
     * {
     *   "elementType": "text",
     *   "key": "email",
     *   "label": "Email address"
     * }
     */
	@RenderingContextBinding('text.email', '')
	readonly onEmail: Observable<string>;

	/*
     * @see #onEmail
     */
	@RenderingContextBinding()
	readonly email: string;

	/*
     * {
     *   "elementType": "link",
     *   "key": "enter",
     *   "label": "Enter"
     * }
     */
	@RenderingContextBinding('link.enter')
	readonly onEnter: Observable<Link>;

	/*
     * @see #onEnter
     */
	@RenderingContextBinding()
	readonly enter: Link;

	protected constructor() {
		super();
	}
}

/**
 * 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
 */
export {
	FormComponentRenderingContext,
	isFormComponentRenderingContext,
	assertFormComponentRenderingContext,
	AbstractFormComponent,
};
