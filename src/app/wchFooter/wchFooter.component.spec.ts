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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WchFooterComponent } from './wchFooter.component';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ConfigServiceService } from './../common/configService/config-service.service';
import {
  Http, HttpModule, XHRBackend, ResponseOptions,
  Response, BaseRequestOptions
} from '@angular/http';


describe('WchFooterComponent', () => {
  let component: WchFooterComponent;
  let fixture: ComponentFixture<WchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WchFooterComponent ],
      imports: [
       HttpModule
    ],
      providers: [ConfigServiceService]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(WchFooterComponent, {
      set: {
        template: 'TODO'
      }})
      .createComponent(WchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO testing for directive
  xit('create an instance', () => {
    expect(component).toBeTruthy();
  });
});
