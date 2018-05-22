/*******************************************************************************
 * Copyright IBM Corp. 2018
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import {TestBed, async, inject, getTestBed} from '@angular/core/testing';

import {UtilsService} from './utils.service';


describe('UtilsService', () => {

	let injector: TestBed;
	let utilsService: UtilsService;
	let emptyContext: any;


	beforeEach(() => {


		TestBed.configureTestingModule({
			providers: [
				UtilsService
			]
		});
		injector = getTestBed();
		utilsService = injector.get(UtilsService);
		emptyContext = {
			id: '00000000-0000-0000-0000-000000000000',
			layouts: {},
			markups: {},
			elements: {},
			context: {
				sibling: [],
				breadcrumb: [],
				children: [],
				site: {
					pages: [],
					id: null
				},
				hub: {
					deliveryUrl: {
						origin: 'http://ibm.com',
						apiUrl: 'http://ibm.com'
					}
				}
			}
		};


	});


	it('should be able to getImageURL', () => {

		const rContext = Object.assign({}, emptyContext);
		rContext.elements = {
			image: {
				'renditions': {
					'banner': {
						'url': '/banner.jpg'
					},
					'default': {
						'url': '/default.jpg'
					},
					'short': {
						'url': '/short.jpg'
					}
				},
				'url': '/default.jpg'
			}
		};


		const url = utilsService.getImageUrl(rContext, 'image', 'short');
		expect(url).toEqual('http://ibm.com/short.jpg');

	});


	it('should be able to fallback to default for missing rendition getImageURL', () => {

		const rContext = Object.assign({}, emptyContext);
		rContext.elements = {
			image: {
				'renditions': {
					'banner': {
						'url': '/banner.jpg'
					},
					'default': {
						'url': '/default.jpg'
					},
					'short': {
						'url': '/short.jpg'
					}
				},
				'url': '/default.jpg'
			}
		};


		const url = utilsService.getImageUrl(rContext, 'image', 'tall');
		expect(url).toEqual('http://ibm.com/default.jpg');

	});


	it('should be able to handle group for getImageURL', () => {

		const rContext = Object.assign({}, emptyContext);
		rContext.elements = {
			image: {
				'renditions': {
					'banner': {
						'url': '/banner.jpg'
					},
					'default': {
						'url': '/default.jpg'
					},
					'short': {
						'url': '/short.jpg'
					}
				},
				'url': '/default.jpg'
			}
		};

		rContext['group'] = {
			'imageGroup': {
				'image': {
					'renditions': {
						'banner': {
							'url': '/banner.jpg'
						},
						'default': {
							'url': '/default.jpg'
						},
						'short': {
							'url': '/short.jpg'
						}
					},
					'url': '/default.jpg'
				}
			}
		}


		const url = utilsService.getImageUrl(rContext, 'image', 'short', 'imageGroup');
		expect(url).toEqual('http://ibm.com/short.jpg');

	});


	it('should be able to handle fallback for missing group for getImageURL', () => {

		const rContext = Object.assign({}, emptyContext);
		rContext.elements = {
			image: {
				'renditions': {
					'banner': {
						'url': '/banner.jpg'
					},
					'default': {
						'url': '/default.jpg'
					},
					'short': {
						'url': '/short.jpg'
					}
				},
				'url': '/default.jpg'
			}
		};

		rContext['group'] = {
			'imageGroup': {
				'image': {
					'renditions': {
						'banner': {
							'url': '/banner.jpg'
						},
						'default': {
							'url': '/default.jpg'
						},
						'short': {
							'url': '/short.jpg'
						}
					},
					'url': '/default.jpg'
				}
			}
		};

		const url = utilsService.getImageUrl(rContext, 'image', 'short', 'missingGroup');
		expect(url).toEqual('http://ibm.com/short.jpg');

	});


	it('should be able to handle fallback for missing group and missing element for getImageURL', () => {

		const rContext = Object.assign({}, emptyContext);

		rContext['group'] = {
			'imageGroup': {
				'image': {
					'renditions': {
						'banner': {
							'url': '/banner.jpg'
						},
						'default': {
							'url': '/default.jpg'
						},
						'short': {
							'url': '/short.jpg'
						}
					},
					'url': '/default.jpg'
				}
			}
		};

		const url = utilsService.getImageUrl(rContext, 'image', 'short', 'missingGroup');
		expect(url).toEqual('http://ibm.com');

	});



	 it('should be able to handle missing rendition for group for getImageURL', () => {

		 const rContext = Object.assign({}, emptyContext);
		 rContext['group'] = {
			 'imageGroup': {
				 'image': {
					 'renditions': {
						 'banner': {
							 'url': '/banner.jpg'
						 },
						 'default': {
							 'url': '/default.jpg'
						 },
						 'short': {
							 'url': '/short.jpg'
						 }
					 },
					 'url': '/default.jpg'
				 }
			 }
		 };

	 const url = utilsService.getImageUrl(rContext, 'image', 'tall', 'imageGroup');
	 expect(url).toEqual('http://ibm.com/default.jpg');

	 });




});
