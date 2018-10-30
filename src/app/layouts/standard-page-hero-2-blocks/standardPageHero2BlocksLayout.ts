import { LayoutComponent } from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeStandardPageComponent } from '../../components/standard-page/typeStandardPageComponent';

/*
 * @name standardPageHero2Blocks
 * @id standard-page-hero-2-blocks
 */
@LayoutComponent({
	selector: 'standard-page-hero-2-blocks',
})
@Component({
	selector: 'app-standard-page-hero-2-blocks-layout-component',
	templateUrl: './standardPageHero2BlocksLayout.html',
	styleUrls: ['./standardPageHero2BlocksLayout.scss'],
	preserveWhitespaces: false,
})
export class StandardPageHero2BlocksLayoutComponent extends TypeStandardPageComponent {
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
