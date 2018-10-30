/*******************************************************************************
 * Copyright IBM Corp. 2018
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

import { environment } from '../../environments/environment';

import { Level, Log } from 'ng2-logger/client';
import { Logger, LoggerFactory } from '@ibm-wch-sdk/ng';

export class Ng2LoggerFactory implements LoggerFactory {
	private _loggingCookies: Map<string, Array<string>> = new Map();
	private modules: string;
	private level: string;

	_getCookie = cookie => {
		if (!this._loggingCookies.has(cookie)) {
			// check for cookie logging
			const cookieVal = encodeURIComponent(cookie);
			let ret = null;
			const regexp = new RegExp(
				'(?:^' + cookie + '|;\\s*' + cookie + ')=(.*?)(?:;|$)',
				'g'
			);
			const matches = regexp.exec(document.cookie);
			if (matches && matches.length >= 2) {
				ret = decodeURIComponent(matches[1]);
			}
			this._loggingCookies.set(cookie, ret);
			return ret;
		}
		return null;
	};

	public create = (name: string) => {
		return Log.create(name) as Logger;
	};

	constructor() {
		(this.level = this._getCookie('wch.sites.logging.level')),
			(this.modules = this._getCookie('wch.sites.logging.modules'));
		const levelsEnum = [];

		if (this.modules) {
			Log.onlyModules(...this.modules.split(','));
		}

		// DATA,INFO,WARN,ERROR
		// document.cookie = 'wch.sites.logging.level=info';
		if (this.level) {
			switch (this.level.toLowerCase()) {
				case 'info':
					levelsEnum.push(Level.INFO);
					break;
				case 'warn':
					levelsEnum.push(Level.WARN);
					break;
				case 'error':
					levelsEnum.push(Level.ERROR);
					break;
				case 'data':
					levelsEnum.push(Level.DATA);
					break;
			}
			if (levelsEnum.length > 0) {
				Log.onlyLevel(...levelsEnum);
			}
		}

		// no logging override so set production mode
		if (environment.production && levelsEnum.length === 0) {
			// Log.setProductionMode();
			Log.onlyLevel(Level.ERROR, Level.WARN);
		}
	}
}
