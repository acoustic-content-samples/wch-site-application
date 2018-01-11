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
import { Pipe, PipeTransform } from '@angular/core';
import {RenderingContext} from 'ibm-wch-sdk-ng';
import { Constants } from '../../Constants';

@Pipe({
  name: 'itemSort'
})
export class ItemSortPipe implements PipeTransform {

  transform(items: RenderingContext[], field: string, sortOrder: string, maxItemsToDisplay: number): any {
    const itemType = (items && items[0] && items[0].elements[field]) ? items[0].elements[field].elementType : '';
    // only sort if there is a valid field to sort on
    if (itemType) {
      items.sort((a: RenderingContext, b: RenderingContext) => {
        const itemA = a.elements[field].value;
        const itemB = b.elements[field].value;
        switch (itemType) {
          case Constants.DATETIME: {
            return this.sortGeneric(new Date(itemA), new Date(itemB));
          }
          default: {
            return this.sortGeneric(itemA, itemB);
          }
        }
      });

      /*
       reverse Date so the latest dates are first in the list
       */
      if (sortOrder === Constants.LATEST_FIRST || sortOrder === Constants.ALPHABETICAL_DESCENDING) {
        items.reverse();
      }

      if (maxItemsToDisplay) {
        items = items.slice(0, maxItemsToDisplay);
      }
    }

    return items;
  }


  sortGeneric(a: any, b: any) {
      if (a < b) {
							return -1;
						}
      if (a > b) {
							return 1;
						}
      return 0;
  }



}
