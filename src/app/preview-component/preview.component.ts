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
import { LayoutComponent, luceneEscapeKeyValue, SearchService, RenderingContext } from '@ibm-wch-sdk/ng';
import { isNotNil, typedPluck, shareLast, DEFAULT_LAYOUT_MODE, LAYOUT_TYPE_ANGULAR } from '@ibm-wch-sdk/utils';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import FileSaver from 'file-saver';
import domtoimage from '../../../node_modules/dom-to-image/dist/dom-to-image.min';

@LayoutComponent({
	selector: 'preview-page-layout'
})
@Component({
  selector: 'app-preview-page-layout-component',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  preserveWhitespaces: false
})
export class PreviewComponent implements OnInit {

	sampleRC: RenderingContext;	// the type/layout/content combo to preview
	layoutId: string;			// preview layout
	contentId: string;			// preview content item
	errorMsg: string;

	constructor(private searchService: SearchService) { }

	ngOnInit() {
		this.getSampleIds();
		this.getSampleRenderingContext();
	}

	// URL to this page: component-preview?layout=${this.props.name}&content=${this.props.contentId}
	// retrieve the layout and content item IDs from the browser query params
	// 		display an error if either are missing
	getSampleIds() {
		const params = new URL(location.toString()).searchParams;
		this.layoutId = params.get('layout');
		this.contentId = params.get('content');
		if(!this.layoutId || !this.contentId) {
			const msg = !this.layoutId && !this.contentId ? 'A layout and content item' : !this.layoutId ? 'A layout' : 'A content item';
			this.errorMsg = `${msg} must be provided to preview.`;
		}
	}

	// retrieve the rendering context for the content item, and force it to use the given layout
	getSampleRenderingContext() {

		// search for the content item
		const query = {
			q: luceneEscapeKeyValue('id', this.contentId),
			rows: 1
		};

		console.log('layout-preview: Sample content query: ', query);

		this.searchService
			.getRenderingContexts(query)
			.pipe(
				// make sure we found an element
				filter(res => res.numFound > 0 && isNotNil(res.renderingContexts)),
				// get the array of results, this has one item
				typedPluck('renderingContexts'),
				// get that item
				map(rcs => rcs[0]),
				// change the layout to the one given as a query param
				map(rc => ({
					...rc,
					layouts: {
						[DEFAULT_LAYOUT_MODE]: {
							templateType: LAYOUT_TYPE_ANGULAR,
							template: this.layoutId   // <--------- layout changed here
						}
					}
				})),
				shareLast()
			).subscribe(
				// set the rendering context to this one we have just altered (or show an error is something went wrong)
				rc => { console.log('layout-preview:  Success => edited rendering context is: ', rc); this.sampleRC = rc; },
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
			width: nodeWidth/4,				// overall width of the image
			height: nodeHeight/4,			// overall height of the image
			quality: 0.9, 					// png quality option
			style: {						// styles applied to the node before it is screenshot
				width: nodeWidth + 'px',
				height: nodeHeight + 'px',
				overflow: 'hidden',
				transform: 'scale(0.25)',	// shrink to 1/4 size
				transformOrigin: '0 0',
				backgroundColor: 'white',
				padding: '0',
				margin: '0'
			},
			filter: n => !n.tagName || n.tagName.toLowerCase() !== 'app-share-social'  // remove all "socialComponent" instances, the iframes result in cross-site errors
		};
		console.log('Creating ${nodeWidth/4}x${nodeHeight/4} thumbnail of %o', node);

		// save the resulting screenshot to the user's computer
		domtoimage.toBlob(node, blobOptions).then(blob => {
			FileSaver.saveAs(blob, `thumbnail_${this.layoutId}.png`);
		}).catch(e => {
			console.error('Could not create thumbnail', e);
			confirm('Could not create thumbnail');
		});

		// this is an alternate way of creating an PNG, the blob way seemed to work better
		/*domtoimage.toPng(node, {bgcolor:'white',filter:filter}).then(url => {
			const a = document.createElement('a');
			a.href = url;
			a.download = `thumbnail_${this.layoutId}.png`;
			//a.className = 'download-thumbnail';
			a.textContent = `Download thumbnail_${this.layoutId}.png`;
			document.body.appendChild(a);
			//a.click();
		}).catch(e => {
			console.error('Could not create thumbnail', e);
			confirm('Could not create thumbnail');
		});*/
	}
}
