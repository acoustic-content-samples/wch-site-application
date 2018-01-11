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
    RenderingContext, RenderingContextBinding
} from 'ibm-wch-sdk-ng';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { AbstractDynamicListComponent } from './abstractDynamicListComponent';
import {Subscription} from 'rxjs/Subscription';
import {UtilsService} from '../../common/utils/utils.service';
import {Constants} from '../../Constants';

/**
 * @name Dynamic list
 * @id 84c0e928-6585-4d34-ba02-5ed1b2e4c21c
 * @description The dynamic list lets you define what content to include without selecting specific content.  It keeps your website fresh without having to constantly care for it. In Oslo, the dynamic list is used on the latest design topics page.
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-dynamic-list-component',
  templateUrl: './typeDynamicListComponent.html',
  styleUrls: ['./typeDynamicListComponent.scss']
})
*/

const ROWS = 100;


export class TypeDynamicListComponent extends AbstractDynamicListComponent implements OnInit, OnDestroy {


    public readonly LIST_TITLE_KEY = 'listTitle';
    public readonly CONTENT_TYPE_KEY = 'contentType';
    public readonly DATE_TO_INCLUDE_KEY = 'datesToInclude';
    public readonly LIST_ORDER_KEY = 'sortOrder';
    public readonly MAX_ITEM_KEY = 'maxItem';


    rContext: RenderingContext;
    sortOrderStr: string;
    sortField: string;
    dateFilterStr: string;
    maxItemsToDisplay: number;
    constants: any;
    rcSub: Subscription;
    queryString: string;

    constructor(private utilsService: UtilsService) {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();
        this.rcSub = this.onRenderingContext
			.subscribe((rc) => {
                this.rContext = rc;
                // Only search on the first "type" selected
                const type = this.utilsService.getFirstCategory(rc, this.CONTENT_TYPE_KEY);
                this.sortOrderStr = this.utilsService.getFirstCategory(rc, this.LIST_ORDER_KEY);
                this.dateFilterStr = this.utilsService.getFirstCategory(rc, this.DATE_TO_INCLUDE_KEY);
                this.sortField = (type === this.constants.ALPHABETICAL_ASCENDING || type === this.constants.ALPHABETICAL_DESCENDING) ? this.constants.ALPHABETICAL_FIELD : this.constants.DATE_FIELD;
                this.maxItemsToDisplay = (rc.number && rc.number[this.MAX_ITEM_KEY]) ? rc.number.maxItem : null;

                this.queryString = `q=type:%22${type}%22&fq=classification:(content)&fq=isManaged:(%22true%22)&sort=lastModified desc&fl=document:%5Bjson%5D,lastModified&rows=${ROWS}`;
            });
    }

    ngOnDestroy() {
        this.rcSub.unsubscribe();
    }


}
