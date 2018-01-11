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
import {Pipe, PipeTransform} from '@angular/core';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import { Constants } from '../../Constants';

@Pipe({
	name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

	transform(items: RenderingContext[], field?: string, dateFilter?: string): any {
		dateFilter = dateFilter || '';
		const currentDate = new Date();
		if (dateFilter === Constants.FUTURE_DATES && items) {

			return items.filter((item) => {
				if (item.elements[field]) {
					let date = item.elements[field].value;
					if (date && item.elements[field].elementType === 'datetime') {
						date = new Date(date);
						return (date > currentDate);
					}
				}
			});
		} else if (dateFilter === Constants.LAST_7_DAYS) {

			return this._calculatePastDate(items, field, 7);

		} else if (dateFilter === Constants.LAST_30_DAYS) {

			return this._calculatePastDate(items, field, 30);

		}

		// if dateFilter was not set return everything
		return items;
	}

	_calculatePastDate(items: RenderingContext[], field: string, days: number) {
		const currentDate = new Date();
		const pastDate = new Date(currentDate.getTime() - (days * 24 * 60 * 60 * 1000));
		const res = items.filter((item) => {
			if (item.elements[field]) {
				let date = item.elements[field].value;
				if (date && item.elements[field].elementType === 'datetime') {
					date = new Date(date);
					return (pastDate < date && date < currentDate);
				}
			} else {
				// Default to returning the item if it does not contain the field to sort
				return true;
			}
		});
		return res;
	}

}
