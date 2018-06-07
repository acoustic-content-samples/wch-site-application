import sdkPackage from '@ibm-wch-sdk/ng/package.json';

export const environment = {
  production: true,
  version: '',
  sdkVersion: JSON.stringify(sdkPackage.version)
};
