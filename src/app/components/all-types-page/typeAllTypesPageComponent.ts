import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractAllTypesPageComponent } from './abstractAllTypesPageComponent';

/** Useful imports */
// import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators/map';

/*
 * @name All types page
 * @id 9f8e8bb3-ae85-4827-9850-2397141a0f21
 * @description Include multiple sections for greater flexibility. Each section can include any type of content.
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-all-types-page-component',
  templateUrl: './typeAllTypesPageComponent.html',
  styleUrls: ['./typeAllTypesPageComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeAllTypesPageComponent extends AbstractAllTypesPageComponent {

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