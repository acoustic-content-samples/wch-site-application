import { SDK_VERSION } from '@ibm-wch-sdk/ng';

export const environment = {
	production: true,
	version: '',
	sdkVersion: JSON.stringify(SDK_VERSION.version.full),
};
