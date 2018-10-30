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
import { FormComponentLayoutComponent } from './formComponentLayout';
import { WchInfoService } from '@ibm-wch-sdk/ng';

class MockWchInfoService {
	constructor() {}
}

describe('FormComponentLayoutComponent', () => {
	let component: FormComponentLayoutComponent;
	let fixture: ComponentFixture<FormComponentLayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FormComponentLayoutComponent],
			providers: [
				{ provide: WchInfoService, useClass: MockWchInfoService },
			],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.overrideComponent(FormComponentLayoutComponent, {
			set: {
				template: 'TODO',
			},
		}).createComponent(FormComponentLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('form can be submitted', () => {
		component.nameValue = 'test';
		component.emailValue = 'test@test.com';
		expect(component.submitForm()).toBeTruthy();
	});

	it('form cannot be submitted when name is unavailable', () => {
		component.nameValue = '';
		component.emailValue = 'test@test.com';
		expect(component.submitForm()).toBeFalsy();
	});

	it('form cannot be submitted when email is unavailable', () => {
		component.nameValue = 'test';
		component.emailValue = '';
		expect(component.submitForm()).toBeFalsy();
	});

	it('form cannot be submitted when name and email are unavailable', () => {
		component.nameValue = '';
		component.emailValue = '';
		expect(component.submitForm()).toBeFalsy();
	});
});
