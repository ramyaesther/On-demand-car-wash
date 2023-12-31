// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL_USER: 'http://localhost:8082/orders',
  BASE_URL_ORDER: 'http://localhost:8082/orders',
  BASE_URL_WASHER: 'http://localhost:9000/washers/washers',
  BASE_URL_AUTH: 'http://localhost:8091/api/auth',
  BASE_URL_MGMT: 'http://localhost:8091/manage',
  BASE_URL_ADMIN: 'http://localhost:8091/admins',
  BASE_URL_WASHPACKS: 'http://localhost:8081/admins',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
