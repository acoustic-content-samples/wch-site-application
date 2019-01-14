import { assertSubject, TypeEmailKindComponent } from './../../components/email-kind/typeEmailKindComponent';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { WchEditableEvent } from '@ibm-wch-sdk/edit-api';
import { LayoutComponent, WchInfoService, LayoutMapping } from '@ibm-wch-sdk/ng';
import { WchInlineEditRegistrationService, WchEditInfoService } from '@ibm-wch-sdk/ng-edit';
import { toArray } from '@ibm-wch-sdk/utils';
import { combineLatest, merge, Observable } from 'rxjs';
import { map, switchMap, takeUntil, tap, startWith, take } from 'rxjs/operators';

/*
 * @name emailKindLayout
 * @id email-kind-layout
 */

@LayoutComponent({
	selector: 'email-kind-layout',
})
@LayoutMapping({ kind: 'email' })
@Component({
	selector: 'app-email-kind-layout-component',
	templateUrl: './emailKindLayout.html',
	styleUrls: ['./emailKindLayout.scss'],
	preserveWhitespaces: false,
})
export class EmailKindLayoutComponent extends TypeEmailKindComponent {
	@ViewChild('root')
	rootElement: ElementRef;
	isEdit: boolean = false;
	editableAttr: string = 'data-wch-editable';
	editIdAttr: string = 'data-content-item-id';

	constructor(aHttpClient: HttpClient, aInfoService: WchInfoService, aEditService: WchInlineEditRegistrationService, aEditInfoService: WchEditInfoService) {
		super(aHttpClient, aInfoService);

		// Our root div must be ready
		const onRoot = this.onAfterViewInit.pipe(
			tap(() => console.log('Email kind: angular root is ready')),
			map(() => this.rootElement.nativeElement as HTMLElement)
		);

		// Get pre-rendered markup
		const onEditable: Observable<Element[]> = combineLatest(onRoot, this.onMarkup).pipe(
			tap(([el, markup]) => console.log('Email kind: pre-rendered markup has changed and will be loaded now')),
			tap(([el, markup]) => (el.innerHTML = markup)),
			map(([el, markup]) => el.querySelectorAll(`[${this.editableAttr}][${this.editIdAttr}]`)),
			map(toArray)          
		);

		// Subscribe for inline edit toggle
		const onInlineEdit: Observable<boolean> = aEditInfoService.onInlineEdit.pipe(
			tap(isEdit => console.log('Email kind: inline edit has changed to', isEdit)),
			tap(isEdit => (this.isEdit = isEdit)),
			startWith(false)
		);

		//  Register inline edit for each node.
		//	The result is a stream of inline edit events occurring on these nodes. We just flatten them into one single stream.
		const onEvents: Observable<WchEditableEvent> = combineLatest(onEditable, this.onRenderingContexts, onInlineEdit).pipe(
			switchMap(([els, rcs, isEdit]) =>
				merge(
					...els.map((el: HTMLElement) => {
						if (isEdit) {
							this.processPlaceholder(el, rcs);
						}
						return aEditService.register(el, el.dataset.wchEditable, assertSubject(el.dataset.contentItemId, rcs));
					})
				)
			)
		);

		// actually perform the subscription and automatically unsubscribe
		onEvents.pipe(takeUntil(this.onOnDestroy)).subscribe();
	}

	// add or remove placeholders according to the latest rendering context data
	processPlaceholder(node, rcs) {
		const dataStr = node.getAttribute(this.editableAttr);
		const rcObs = rcs[node.getAttribute(this.editIdAttr)];
		if (dataStr && rcObs) {
			// get the rc out of the observable
			rcObs.pipe(take(1)).subscribe(
				rc => {
					// split the editable dot-notation string 'object.child.grandchild' => ['object','child','grandchild']
					const data = dataStr.split('.').reduce((c, v) => {
						const arrayInfo = /^(.+)\[(\d+)\]$/.exec(v); // catches array notation, eg: 'child[3]'
						return arrayInfo ? c[arrayInfo[1]][parseInt(arrayInfo[2])] : c[v];
					}, rc);
					// add and remove placeholders
					// console.log('Email kind: str %o data %o from rc elements %o', dataStr, data, rc.elements);
					const elementType = data && data.elementType ? data.elementType : 'text';
					const placeholderId = `placeholder-${rc.id}-${dataStr}`;
					if (this.isNodeEmpty(elementType, data)) {
						// add a placeholder if the node is empty and there is no placeholder yet
						this.addPlaceholder(node, placeholderId, rc, elementType);
					} else {
						// remove placeholder if the node is not empty
						this.removePlaceholder(node, placeholderId);
					}
				},
				e => console.error(`Email kind: could not retrieve rendering context: `, e)
			);
		} else {
			console.warn('Email kind: did not have one of the following: (dataStr, rcObs):', dataStr, rcObs);
		}
	}

	// check if the element is empty based on type
	isNodeEmpty(type, data) {
		let ret = false;
		switch (type) {
			case 'number':
			case 'datetime':
			case 'optionselection':
			case 'formattedtext':
			case 'reference':
				ret = !data.value;
				break;
			case 'file':
			case 'video':
			case 'image':
				ret = !data.url;
				break;
			case 'text':
				ret = !data;
				break;
			case 'link':
				ret = !data.linkURL;
				break;
			case 'location':
				ret = !data.latitude || !data.longitude;
				break;
			case 'category':
				ret = !data.categoryIds.length;
				break;
		}
		return ret;
	}

	// remove the placeholder from an element's node, if it exists
	removePlaceholder(node, placeholderId) {
		node.setAttribute('class', node.className.replace('hbs-hide', ''));
		node.parentNode.setAttribute('class', node.parentNode.className.replace('hbs-blue', ''));
		const placeholder = document.getElementById(placeholderId);
		if (placeholder) {
			console.log('Email kind: remove placeholder %o with parent %o for node %o', placeholder, placeholder.parentNode, node);
			placeholder.parentNode.removeChild(placeholder);
		}
	}

	// add a placeholder to an element's node, if it does not already exist
	addPlaceholder(node, placeholderId, rc, elementType) {
		// return if this node already has a placeholder
		if (document.getElementById(placeholderId)) {
			return;
		}

		console.log('Email kind: add placeholder with id %o at %o which has type %o from rendering context: %o', placeholderId, node, elementType, rc);

		// add a placeholder based on the element's type
		const deliveryUrl = rc.context.hub.deliveryUrl;
		const imageNotAvailable = `${deliveryUrl}oob-spa/images/placeholders/image.svg`;
		const videoNotAvailable = `${deliveryUrl}/oob-spa/images/placeholders/video.svg`;
		switch (elementType) {
			case 'number':
				this.addTextPlaceholder(node, 'Add a number here', placeholderId);
				break;
			case 'datetime':
				this.addTextPlaceholder(node, 'Add a date here', placeholderId);
				break;
			case 'optionselection':
				this.addTextPlaceholder(node, 'Select an option here', placeholderId);
				break;
			case 'text':
				this.addTextPlaceholder(node, 'Add text here', placeholderId);
				break;
			case 'formattedtext':
				this.addTextPlaceholder(node, 'Write and format your text here', placeholderId);
				break;
			case 'reference':
				this.addTextPlaceholder(node, 'Click here to link to another piece of content', placeholderId);
				break;
			case 'file':
				this.addTextPlaceholder(node, 'Click here to add a file', placeholderId);
				break;
			case 'link':
				this.addTextPlaceholder(node, 'Click here to add a link', placeholderId);
				// there is a timing issue on page load, where the placeholder is added AFTER the original link node gets hidden, and a clone is shown
				if (node.style.display === 'none') {
					// find the clone, which will need the placeholder to be applied
					let possibleLinkClone = node.parentNode.firstChild;
					// keep looking until the clone is found or we run out of siblings
					while (!possibleLinkClone.hasAttribute || !possibleLinkClone.hasAttribute('wch-is-link-clone')) {
						possibleLinkClone = possibleLinkClone.nextSibling;
					}
					// add the placeholder to the clone, if it exists
					if (possibleLinkClone) {
						this.addTextPlaceholder(possibleLinkClone, 'Click here to add a link', `clone-${placeholderId}`);
					}
				}
				break;
			case 'location':
				this.addTextPlaceholder(node, 'Add location data here', placeholderId);
				break;
			case 'category':
				this.addTextPlaceholder(node, 'Add categories here', placeholderId);
				break;
			case 'image':
				this.addImgPlaceholder(node, imageNotAvailable, 'Assign an image here', placeholderId);
				break;
			case 'video':
				this.addImgPlaceholder(node, videoNotAvailable, 'Assign a video here', placeholderId);
				break;
		}
	}

	// add a span with text to the given node
	addTextPlaceholder(node, text, placeholderId) {
		const span = document.createElement('span');
		span.innerHTML = text;
		span.setAttribute('id', placeholderId);
		span.setAttribute('class', 'hbs-placeholder');
		node.appendChild(span);
	}

	// add an image as a placeholder to the given node
	addImgPlaceholder(node, imageSrc, text, placeholderId) {
		node.setAttribute('class', `${node.className} hbs-hide`);
		node.parentNode.setAttribute('class', `${node.parentNode.className} hbs-blue`);
		const img = new Image(200, 200);
		img.setAttribute('id', placeholderId);
		img.setAttribute('class', 'hbs-placeholder');
		img.setAttribute('src', imageSrc);
		img.setAttribute('alt', text);
		img.setAttribute('title', text);
		node.parentNode.appendChild(img);
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
