import { Component } from '@angular/core';
import { AbstractEmailKindComponent } from './abstractEmailKindComponent';
import { HttpClient } from '@angular/common/http';
import { Query, RenderingContext, SearchResults } from '@ibm-wch-sdk/api';
import { WchInfoService } from '@ibm-wch-sdk/ng';
import { luceneEscapeKeyValue, opDistinctUntilChanged, queryToString, wchForEachRenderingContext } from '@ibm-wch-sdk/utils';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, scan, switchMap, tap } from 'rxjs/operators';

export function assertSubject(aKey: string, aObject: Record<string, Subject<RenderingContext>>): Subject<RenderingContext> {
	return (aObject[aKey] || (aObject[aKey] = new ReplaySubject<RenderingContext>(1)));
}

/*
 * @name Email kind
 * @id afaa1822-2d11-4c26-ab25-171d335751b6
 */
export class TypeEmailKindComponent extends AbstractEmailKindComponent {
	onMarkup: Observable<string>;
	onRenderingContexts: Observable<Record<string, Subject<RenderingContext>>>;

	constructor(aHttpClient: HttpClient, aInfoService: WchInfoService) {
		super();

		// load the hbs markup based on this content item's rendering context
		this.onMarkup = this.onRenderingContext.pipe(
			tap(rc => console.log(`Email kind: get pre-rendered markup for content with id "${rc.id}" and rendering context:`, rc)),
			switchMap(rc =>
				aHttpClient.get(
					`${aInfoService.apiUrl.href}delivery/v1/rendering/render/content/${encodeURIComponent(rc.id)}`,
					//`${aInfoService.apiUrl.href}publishing/v2/render/content/${encodeURIComponent(rc.id)}?projectId=draft`,
					{ withCredentials: true, responseType: 'text' }
				)
			)
		);

		// operator that maps each contained rendering context into its own observable keyed off by the id
		this.onRenderingContexts = this.onRenderingContext.pipe(
			scan(
				(rcs: Record<string, Subject<RenderingContext>>, rc: RenderingContext) => {
					wchForEachRenderingContext(rc, r => assertSubject(r ? r.id : null, rcs).next(r));
					return rcs;
				}, {}
			),
			opDistinctUntilChanged,
			tap(rcs => console.log('Email kind: all child rendering context IDs', Object.keys(rcs)))
		);
	}
}
