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
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewAllComponent } from './view-all.component';
import {WchNgModule, PageComponent, ComponentsService, RenderingContext} from 'ibm-wch-sdk-ng';

@Component({
  template: `
    <a routerLink="/settings/{{collName}}/edit/{{item._id}}">link</a>
    <router-outlet></router-outlet>
  `
})
class TestComponent {
  renderingContext = {"elements" : {"viewAllLink": {"linkURL" : "https://www.ibm.com"}}};
  collName = 'testing';
  item = {
    _id: 1
  };
}

@Component({
  template: ''
})
class DummyComponent {
}

describe('ViewAllComponent', () => {
  let component: ViewAllComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'test/:page/edit/:item', component: DummyComponent }
        ])
      ],
      declarations: [ ViewAllComponent, DummyComponent, TestComponentWrapper],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();

  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<a [href]="renderingContext.elements.viewAllLink.linkURL"></a>'
})
class TestComponentWrapper {
  renderingContext = {"elements" : {"viewAllLink": {"linkURL" : "https://www.ibm.com"}}};
}
