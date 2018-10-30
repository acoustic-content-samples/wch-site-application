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
	luceneEscapeKeyValue,
	SearchService,
	RenderingContext,
} from '@ibm-wch-sdk/ng';
import {
	isNotNil,
	typedPluck,
	shareLast,
	DEFAULT_LAYOUT_MODE,
	LAYOUT_TYPE_ANGULAR,
} from '@ibm-wch-sdk/utils';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import FileSaver from 'file-saver';
import domtoimage from '../../../node_modules/dom-to-image/dist/dom-to-image.min';

@LayoutComponent({
	selector: 'preview-page-layout',
})
@Component({
	selector: 'app-preview-page-layout-component',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss'],
	preserveWhitespaces: false,
})
export class PreviewComponent implements OnInit {
	sampleRC: RenderingContext; // the type/layout/content combo to preview
	typeId: string; // preview type
	layoutId: string; // preview layout
	contentId: string; // preview content item
	sampleContentTag: string = 'kind:sample';
	sampleKind: string = 'sample';
	fullScreen: boolean = false;
	errorMsg: string;

	constructor(private searchService: SearchService) {}

	ngOnInit() {
		this.getSampleIds();
		if (this.contentId || this.typeId) {
			this.getRenderingContext();
		} else {
			this.errorMsg = `Either a type or content item must be provided to preview.`;
		}
	}

	// URL to this page: component-preview?type=${this.typeId}&content=${this.contentId}&layout=${this.layoutId}&full=true
	// retrieve the type, layout, content item IDs from the browser query params
	// required: type OR content (with optional layout)
	// optional full screen parameter indicates that the dev buttons should be hidden and preview takes up the entire window
	getSampleIds() {
		const params = new URL(location.toString()).searchParams;
		this.typeId = params.get('type');
		this.contentId = params.get('content');
		this.layoutId = params.get('layout');
		this.fullScreen = !!params.get('full');
	}

	// retrieve the rendering context for the type or content item, and force it to use the given layout if available
	getRenderingContext() {
		// search for the content item
		const query = { rows: 1 };
		this.contentId ? Object.assign(query, { q: luceneEscapeKeyValue('id', this.contentId) })
					   : Object.assign(query, { fq: [ luceneEscapeKeyValue('type', this.typeId), luceneEscapeKeyValue('tags', this.sampleContentTag) ] })
																								 // &fq=kind:(sample) => luceneEscapeKeyValue('kind', this.sampleKind)

		const msg = this.contentId ? `Query content item with id "${this.contentId}"`
					+ (this.layoutId ? ` and use layout "${this.layoutId}"` : '')
					: `Query sample content for type "${this.typeId}"`;
		console.log(`layout-preview: ${msg}: `, query);

		this.searchService
			.getRenderingContexts(query)
			.pipe(
				// make sure we found an element
				filter(res => { 
					if(!res.numFound) {
						const eMsg = this.contentId ? `Cannot find content item with id "${this.contentId}"` : `No sample content to display for type "${this.typeId}"`;
						this.errorMsg = eMsg;
						throw new Error(eMsg);
					}
					return res.numFound > 0 && isNotNil(res.renderingContexts)
				}),
				// get the array of results, this has one item
				typedPluck('renderingContexts'),
				// get that item
				map(rcs => rcs[0]),
				// change the layout to the one given as a query param
				map(rc => {
					return !this.layoutId ? rc : ({
						...rc,
						layouts: {
							[DEFAULT_LAYOUT_MODE]: {
								templateType: LAYOUT_TYPE_ANGULAR,
								template: this.layoutId // <--------- layout changed here
							}
						}
					})
				}),
				shareLast()
			)
			.subscribe(
				// set the rendering context to this one we have just altered (or show an error is something went wrong)
				rc => {
					console.log('layout-preview:  Success => edited rendering context is: ', rc);
					this.sampleRC = rc;
				},
				e => console.error('layout-preview:  Error => could not retrieve/edit rendering context: ', e),
				() => console.log('layout-preview:  Done => got a complete notification')
			);
	}

	// create a small screenshot of the previewed component, users can add this as a thumbnail for the Type in WCH
	createThumbnail() {
		// grab the node that contains the previewed rendering context, find its height and width
		// the height should be no more than 1600px
		// the width should be no more than 2400px
		const node = document.getElementById('preview-container');
		const nodeWidth = node.offsetWidth > 1600 ? 1600 : node.offsetWidth;
		const nodeHeight = node.offsetHeight > 2400 ? 2400 : node.offsetHeight;

		// options to transform the screenshot into a thumbnail image
		// the image is scaled to 1/4 its size and capped at width = 1600/4 = 400px, and height = 2400/4 = 600px
		const blobOptions = {
			width: nodeWidth / 4, // overall width of the image
			height: nodeHeight / 4, // overall height of the image
			quality: 0.9, // png quality option
			style: {
				// styles applied to the node before it is screenshot
				width: nodeWidth + 'px',
				height: nodeHeight + 'px',
				overflow: 'hidden',
				transform: 'scale(0.25)', // shrink to 1/4 size
				transformOrigin: '0 0',
				backgroundColor: 'white',
				padding: '0',
				margin: '0',
			},
			filter: n =>
				!n.tagName || n.tagName.toLowerCase() !== 'app-share-social', // remove all "socialComponent" instances, the iframes result in cross-site errors
		};
		console.log(
			'Creating ${nodeWidth/4}x${nodeHeight/4} thumbnail of %o',
			node
		);

		// save the resulting screenshot to the user's computer
		domtoimage
			.toBlob(node, blobOptions)
			.then(blob => {
				FileSaver.saveAs(blob, `thumbnail_${this.layoutId}.png`);
			})
			.catch(e => {
				console.error('Could not create thumbnail', e);
				confirm('Could not create thumbnail');
			});
	}
}
