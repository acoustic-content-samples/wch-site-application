import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeStandardPageComponent } from '../../components/standard-page/typeStandardPageComponent';

/*
 * @name standardPageHero4Blocks
 * @id standard-page-hero-4-blocks
 */
@LayoutComponent({
    selector: 'standard-page-hero-4-blocks'
})
@Component({
  selector: 'app-standard-page-hero-4-blocks-layout-component',
  templateUrl: './standardPageHero4BlocksLayout.html',
  styleUrls: ['./standardPageHero4BlocksLayout.scss'],
  preserveWhitespaces: false
})
export class StandardPageHero4BlocksLayoutComponent extends TypeStandardPageComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * specific to this layout.
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
