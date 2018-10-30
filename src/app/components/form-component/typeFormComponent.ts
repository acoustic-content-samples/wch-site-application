import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractFormComponent } from './abstractFormComponent';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name Form component
 * @id 7df801d8-1d55-4652-ac59-93589b032375
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-form-component',
  templateUrl: './typeFormComponent.html',
  styleUrls: ['./typeFormComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeFormComponent extends AbstractFormComponent {
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

		/*
          * Sample
          *
          * const that = this;
          * const onDestroy = that.onOnDestroy;
          */
	}
}
