# Norris UI

**Note:** This app must be running on `http://localhost:4200/` to interact with the C# services layer in the ChuckNorrisService Repo because of the Service Layer CORS settings.

If nothing seems to be working, please check the console.  Most likely, there is an invalid cert for the service URL which is running as https.  There will be an error like "Failed to load resource: net::ERR_CERT_AUTHORITY_INVALID."  Please navigate to https://localhost:44386/api/v1/ChuckNorrisJokes (while that API is running) and click "proceed to localhost (unsafe)" to allow the connection to the API.  Refresh the page to clear the console exceptions if you like.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
