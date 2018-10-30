import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractSearchResultsComponent } from './abstractSearchResultsComponent';

/*
 * @name Search results
 * @id 4ff02e15-3a0c-4d26-9e21-e72368ba270f
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-search-results-component',
  templateUrl: './typeSearchResultsComponent.html',
  styleUrls: ['./typeSearchResultsComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeSearchResultsComponent extends AbstractSearchResultsComponent {
	/*
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

	constructor() {
		super();
		/*
         * TODO initialize your custom fields here, note that
         * you can refer to the values bound via @RenderingContextBinding from
         * your super class.
         *
         * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
         */
	}
}
