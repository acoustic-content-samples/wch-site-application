/**
 * Do not modify this file, it is auto-generated.
 */
import {
	RenderingContext,
	RenderingContextBinding,
	isFormattedTextElement,
	isTextElement,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';
import { ContestRulesRenderingContext } from './contestRulesRenderingContext';

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link ContestRulesRenderingContext } else false
 */
function isContestRulesRenderingContext(
	aContext: RenderingContext
): aContext is ContestRulesRenderingContext {
	// cache access to the elements
	const el = aContext ? aContext.elements || [] : [];
	return (
		!!aContext &&
		(!el['title'] || isTextElement(el['title'])) &&
		(!el['contestRules'] || isFormattedTextElement(el['contestRules']))
	);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link ContestRulesRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link ContestRulesRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertContestRulesRenderingContext);
 */
function assertContestRulesRenderingContext(
	aContext: RenderingContext
): ContestRulesRenderingContext {
	// test if the context is as expected
	if (isContestRulesRenderingContext(aContext)) {
		return aContext;
	}
	// type failure
	throw new TypeError('ContestRulesRenderingContext');
}

/*
 * @name Contest rules
 * @id b77f0bfd-d068-44cc-a41c-fc15a0123c09
 */
abstract class AbstractContestRulesComponent extends AbstractRenderingComponent {
	/**
	 * Strongly typed stream of the rendering contexts
	 */
	readonly onRenderingContext: Observable<ContestRulesRenderingContext>;

	/**
	 * Strongly typed rendering context
	 */
	renderingContext: ContestRulesRenderingContext;

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
     *   "elementType": "formattedtext",
     *   "key": "contestRules",
     *   "label": "Contest rules"
     * }
     */
	@RenderingContextBinding('formattedtext.contestRules', '')
	readonly onContestRules: Observable<string>;

	/*
     * @see #onContestRules
     */
	@RenderingContextBinding()
	readonly contestRules: string;

	protected constructor() {
		super();
	}
}

/**
 * 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
 */
export {
	ContestRulesRenderingContext,
	isContestRulesRenderingContext,
	assertContestRulesRenderingContext,
	AbstractContestRulesComponent,
};
