import { LayoutComponent, RenderingContext } from '@ibm-wch-sdk/ng';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { TypeFormComponent } from './../../components/form-component/typeFormComponent';
import { WchInfoService } from '@ibm-wch-sdk/ng';
import * as $ from 'jquery';

/** Useful imports */
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/operator/distinctUntilChanged';

/*
 * @name formComponentLayout
 * @id form-component-layout
 */
@LayoutComponent({
	selector: 'form-component-layout',
})
@Component({
	/**
	 * Consider to code your component such that all elements will be immutable and that it only
	 * depends on its inputs. This can e.g. be achieved by basing all state changes on observables.
	 *
	 * @see https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html
	 *
	 * import { ChangeDetectionStrategy } from '@angular/core';
	 */
	// changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-form-component-layout-component',
	templateUrl: './formComponentLayout.html',
	styleUrls: ['./formComponentLayout.scss'],
	preserveWhitespaces: false,
})
export class FormComponentLayoutComponent extends TypeFormComponent
	implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('revealModal')
	revealModal: ElementRef;
	rContext: RenderingContext;
	itemId: string;
	reveal: any;

	nameValue: string;
	emailValue: string;

	dialogMessageTitle: string;
	dialogMessageBody: string;

	constructor(public wchService: WchInfoService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();

		this.safeSubscribe(this.onRenderingContext, renderingContext => {
			this.rContext = renderingContext;
			this.itemId = `form-${this.rContext.id}`;
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
		try {
			this.reveal = <any>$(`#${this.itemId}`);
			this.reveal.foundation();
		} catch (e) {
			console.error('error in form layout afterview init ', e);
		}
	}

	ngOnDestroy() {
		// clean up reveal modal
		try {
			const elem = this.reveal.$element.foundation('destroy');
			$(elem).remove();
		} catch (e) {
			console.error('error in form layout ondestroy ', e);
		}
		super.ngOnDestroy();
	}

	openModal() {
		this.submitForm();
		try {
			(<any>$('#' + this.revealModal)).foundation('open');
		} catch (e) {
			console.error('error in form layout openModal ', e);
		}
	}

	submitForm() {
		if (this.nameValue && !this.emailValue) {
			this.dialogMessageTitle = 'Error';
			this.dialogMessageBody =
				'Name and email are required. Please enter them in the form';
			return false;
		} else if (!this.nameValue) {
			this.dialogMessageTitle = 'Error';
			this.dialogMessageBody =
				'Name is required. Please enter it in the form';
			return false;
		} else if (!this.emailValue) {
			this.dialogMessageTitle = 'Error';
			this.dialogMessageBody =
				'Email is required. Please enter it in the form';
			return false;
		} else {
			this.dialogMessageTitle = 'Thank you';
			this.dialogMessageBody = "We'll be in touch.";
			return true;
		}
	}
}
