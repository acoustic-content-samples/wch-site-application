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
	LayoutComponent,
	RenderingContext,
	RenderingContextBinding,
} from '@ibm-wch-sdk/ng';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	ViewChild,
} from '@angular/core';
import { TypeEventComponent } from '../../components/event/typeEventComponent';
import { Subscription } from 'rxjs';

import * as $ from 'jquery';

/**
 * @name eventLayout
 * @id event-layout
 */
@LayoutComponent({
	selector: 'event-layout',
})
@Component({
	selector: 'app-event-layout-component',
	templateUrl: './eventLayout.html',
	styleUrls: ['./eventLayout.scss'],
})
export class EventLayoutComponent extends TypeEventComponent
	implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('event')
	eventElem: ElementRef;

	rContext: RenderingContext;
	eventId: any;
	reveal: any = null;

	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.eventId = `event-card-${this.rContext.id}`;
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
		try {
				if (this.reveal === null) {
					this.reveal = new Foundation.Reveal($(`#${this.eventId}`));
				}
		} catch (e) {
			console.log('error in eventLayout reveal on init');
		}
	}

	ngOnDestroy() {
		try {
				if (this.reveal) {
					const elem = this.reveal.$element.foundation('destroy');
					$(elem).remove();
				}
		} catch (e) {
			console.log('error in eventLayout reveal on destroy ');
		}
		super.ngOnDestroy();
	}
}
