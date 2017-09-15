/*******************************************************************************
 * Copyright IBM Corp. 2017
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
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractDesignArticleComponent } from './abstractDesignArticleComponent';

/**
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-design-article-component',
  templateUrl: './typeDesignArticleComponent.html',
  styleUrls: ['./typeDesignArticleComponent.scss']
})
*/
export class TypeDesignArticleComponent extends AbstractDesignArticleComponent {

    /**
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

    constructor() {
        super();
        /**
        * TODO initialize your custom fields here, note that
        * you can refer to the values bound via @RenderingContextBinding from
        * your super class.
        *
        * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
        */
    }

}
