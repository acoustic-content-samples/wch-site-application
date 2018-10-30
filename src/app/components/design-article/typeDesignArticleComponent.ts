import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractDesignArticleComponent } from './abstractDesignArticleComponent';

/** Useful imports */
// import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators/map';

/*
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-design-article-component',
  templateUrl: './typeDesignArticleComponent.html',
  styleUrls: ['./typeDesignArticleComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeDesignArticleComponent extends AbstractDesignArticleComponent {
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
         * Expose your custom fields as observables in your class
         * and subscribe from the template via the async pipe.
         */

		/*
          * Sample
          *
          * const that = this;
          * const onDestroy = that.onOnDestroy;
          */
	}
}
