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
    LayoutComponent, RenderingContext
} from 'ibm-wch-sdk-ng';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { TypeDynamicListComponent } from '../../components/dynamic-list/typeDynamicListComponent';
import {UtilsService} from '../../common/utils/utils.service';

/**
 * @name verticalDynamicList
 * @id vertical-dynamic-list
 */
@LayoutComponent({
    selector: 'vertical-dynamic-list'
})
@Component({
  selector: 'app-vertical-dynamic-list-layout-component',
  templateUrl: './verticalDynamicListLayout.html',
  styleUrls: ['./verticalDynamicListLayout.scss']
})
export class VerticalDynamicListLayoutComponent extends TypeDynamicListComponent implements OnInit, OnDestroy {
    @Input()
    renderingContext: RenderingContext;


    constructor(private utils: UtilsService) {
        super(utils);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
