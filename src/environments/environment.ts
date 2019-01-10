// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDdhqr8vBIUGUeceqctcK7FfeRh9NRvjxc",
    authDomain: "gov-open-data.firebaseapp.com",
    databaseURL: "https://gov-open-data.firebaseio.com",
    projectId: "gov-open-data",
    storageBucket: "gov-open-data.appspot.com",
    messagingSenderId: "410162190951"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
