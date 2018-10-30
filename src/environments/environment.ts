// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { SDK_VERSION } from '@ibm-wch-sdk/ng';

export const environment = {
	production: false,
	version: JSON.stringify(new Date().toString().substr(0, 10)),
	sdkVersion: JSON.stringify(SDK_VERSION.version.full),
};
