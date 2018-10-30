/*
 * Do not modify this file, it will be auto-generated.
 */
import {
	RenderingContext,
	RenderingContextBinding,
	AbstractRenderingComponent,
} from '@ibm-wch-sdk/ng';
import { Observable } from 'rxjs';

/*
 * @name Search results
 * @id 4ff02e15-3a0c-4d26-9e21-e72368ba270f
 */
export abstract class AbstractSearchResultsComponent extends AbstractRenderingComponent {
	/*
     * {
     *   "elementType": "reference",
     *   "key": "suggestedArticles",
     *   "label": "Suggested articles"
     * }
     */
	@RenderingContextBinding('reference.suggestedArticles')
	readonly onSuggestedArticles: Observable<RenderingContext>;

	/*
     * @see #onSuggestedArticles
     */
	@RenderingContextBinding()
	readonly suggestedArticles: RenderingContext;

	protected constructor() {
		super();
	}
}
