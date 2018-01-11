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
import {Component, OnInit} from '@angular/core';
import { AbstractListComponent } from './abstractListComponent';

/**
 * @name List
 * @id 9aeeecef-85ce-4d41-a797-1ad27735d0cb
 * @description Use this to create curated lists of content to feature throughout your website. In Oslo we use it to create the Editor's Choice list which show up on the design.
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-list-component',
  templateUrl: './typeListComponent.html',
  styleUrls: ['./typeListComponent.scss']
})
*/
export class TypeListComponent extends AbstractListComponent implements OnInit {


    rContext: RenderingContext;
    contextList: RenderingContext[] = [];

    readonly LIST_TITLE_KEY: string = 'heading';
    readonly LIST_ITEMS_KEY: string = 'items';

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
					 	 this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            if (renderingContext.references && renderingContext.references.items) {
													this.contextList = renderingContext.references.items;
												}
        });
    }

    isButtonLinkSet(): boolean {
        return (this.renderingContext.elements.viewAllLink && this.renderingContext.elements.viewAllLink.linkURL && this.renderingContext.elements.viewAllLink.linkURL.length > 0) ? true : false;
    }
}
