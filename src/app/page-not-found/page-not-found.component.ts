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
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ComponentsService, LayoutComponent, RenderingContext} from 'ibm-wch-sdk-ng';
import {ConfigServiceService} from '../common/configService/config-service.service';
import {Subscription} from 'rxjs/Subscription';

@LayoutComponent({
  selector: ComponentsService.PAGE_NOT_FOUND_LAYOUT
})

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  @Input()
  public set renderingContext(aValue: RenderingContext) {
    this.rc = aValue;
  }

  context: any;
  configSub: Subscription;
  rc: RenderingContext;

  constructor(configService: ConfigServiceService) {

    this.configSub = configService.getConfig('404 Error page').subscribe((context) => {
      this.context = context;
    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.configSub.unsubscribe();
  }

}
