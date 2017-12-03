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
export class Constants {
// static readonly DOMAIN_NAME = 'your-domain-name.com';
// static readonly CONTENT_HUB_ID = '0000000-0000-0000-0000-000000000000';

  static readonly PROTOCOL = 'https:';
  static readonly apiUrl = `${Constants.PROTOCOL}//${Constants['DOMAIN_NAME']}/api/${Constants['CONTENT_HUB_ID']}`;
  static readonly deliveryUrl = `${Constants.PROTOCOL}//${Constants['DOMAIN_NAME']}/${Constants['CONTENT_HUB_ID']}`;

  static readonly FOOTER_CONFIG = 'footerConfig';
  static readonly HEADER_CONFIG = 'headerConfig';


  /*Layout modes */
  static readonly DETAIL = 'default';
  static readonly SUMMARY = 'Summary';

  /* Sort order */
  static readonly ALPHABETICAL_ASCENDING = 'Alphabetical ascending';
  static readonly ALPHABETICAL_DESCENDING = 'Alphabetical descending';
  static readonly LATEST_FIRST = 'By date descending';
  static readonly OLDEST_FIRST = 'By date ascending';

  /* Default field for sorting.  This assumes all dynamic list types contain these field */
  static readonly ALPHABETICAL_FIELD = 'heading';
  static readonly DATE_FIELD = 'date';

  /* Filter date */
  static readonly FUTURE_DATES = 'Future dates (Events)';
  static readonly LAST_30_DAYS = 'Published last 30 days';
  static readonly LAST_7_DAYS = 'Published last 7 days';

  /* Dynamic list types */
  static readonly DESIGN_ARTICLES = 'Design article';
  static readonly DESIGNERS = 'Designers';
  static readonly EVENTS = 'Event';


  /* Sort field type */
  static readonly DATETIME = 'datetime';

  /* The page that sends web message to SPA's iframe */
  static readonly SITE_MANAGER_URL = 'http://localhost:8000';

}


