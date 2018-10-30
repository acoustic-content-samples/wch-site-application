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
import { SocialComponentLayoutComponent } from './socialComponentLayout';
import { WchInfoService } from '@ibm-wch-sdk/ng';

class MockWchInfoService {
	constructor() {}
}

describe('SocialComponentLayoutComponent', () => {
	let component: SocialComponentLayoutComponent;
	let fixture: ComponentFixture<SocialComponentLayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SocialComponentLayoutComponent],
			providers: [
				{ provide: WchInfoService, useClass: MockWchInfoService },
			],
		});
	}));

	beforeEach(() => {
		fixture = TestBed.overrideComponent(SocialComponentLayoutComponent, {
			set: {
				template: 'TODO',
			},
		}).createComponent(SocialComponentLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
