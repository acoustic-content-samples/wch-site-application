import { RenderingContext } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractSocialComponent } from './abstractSocialComponent';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name Social component
 * @id 71689897-4505-4c1e-85c9-a57810158a4e
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-social-component',
  templateUrl: './typeSocialComponent.html',
  styleUrls: ['./typeSocialComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeSocialComponent extends AbstractSocialComponent {
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
