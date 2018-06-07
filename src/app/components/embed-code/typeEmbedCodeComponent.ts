import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractEmbedCodeComponent } from './abstractEmbedCodeComponent';

/*
 * @name Embed code
 * @id fdee49eb-1367-4005-8bfe-7e634a4d7e0f
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-embed-code-component',
  templateUrl: './typeEmbedCodeComponent.html',
  styleUrls: ['./typeEmbedCodeComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeEmbedCodeComponent extends AbstractEmbedCodeComponent {

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
