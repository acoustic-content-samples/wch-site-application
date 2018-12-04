/*******************************************************************************
 * Copyright IBM Corp. 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

import {
    LayoutComponent
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeAllTypesPageComponent } from '../../components/all-types-page/typeAllTypesPageComponent';

/** Useful imports */
// import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators';

/*
 * @name Three blocks
 * @id all-types-page-hero-2-blocks
 */
@LayoutComponent({
    selector: 'all-types-page-hero-2-blocks'
})
@Component({
  /**
  * Consider to code your component such that all elements will be immutable and that it only
  * depends on its inputs. This can e.g. be achieved by basing all state changes on observables.
  *
  * @see https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html
  *
  * import { ChangeDetectionStrategy } from '@angular/core';
  */
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-all-types-page-hero-2-blocks-layout-component',
  templateUrl: './all-types-page-hero-2-blocks.html',
  styleUrls: ['./all-types-page-hero-2-blocks.scss'],
  preserveWhitespaces: false
})
export class AllTypesPageHero2BlocksLayoutComponent extends TypeAllTypesPageComponent {

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