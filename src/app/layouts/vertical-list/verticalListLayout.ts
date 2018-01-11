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
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { TypeListComponent } from '../../components/list/typeListComponent';

/**
 * @name verticalList
 * @id vertical-list
 */
@LayoutComponent({
    selector: 'vertical-list'
})
@Component({
  selector: 'app-vertical-list-layout-component',
  templateUrl: './verticalListLayout.html',
  styleUrls: ['./verticalListLayout.scss']
})
export class VerticalListLayoutComponent extends TypeListComponent implements OnInit, OnDestroy {


    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();

    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
