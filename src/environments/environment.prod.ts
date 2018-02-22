import sdkPackage from 'ibm-wch-sdk-ng/package.json';

export const environment = {
  production: true,
  version: JSON.stringify((new Date()).toISOString().substr(0,10)),
  sdkVersion: JSON.stringify(sdkPackage.version)
};
