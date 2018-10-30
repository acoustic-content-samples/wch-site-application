import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {
	WchNgModule,
	PageComponent,
	ComponentsService,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import { FormsModule } from '@angular/forms';

import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
	let component: SearchBoxComponent;
	let fixture: ComponentFixture<SearchBoxComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'test/page/home',
						component: RouterMockTestComponent,
					},
				]),
			],
			declarations: [SearchBoxComponent, RouterMockTestComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBoxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	xit('should be able to search', () => {
		component.query = 'test';
		expect(component.query).toEqual('test');

		component.search();
	});

	it('should be able clear search', () => {
		component.query = 'test';
		expect(component.query).toEqual('test');

		component.clearSearch();
		expect(component.query).toEqual('');
	});
});

@Component({
	template: `
    <a routerLink="/test/page/{{pageName}}">link</a>
    <router-outlet></router-outlet>
  `,
})
@Component({
	template: '',
})

/**
 * Mocks routerLink
 */
class RouterMockTestComponent {}
