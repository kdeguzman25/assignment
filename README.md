# Deskera

This project was build in Angular 7 + Wordpress Rest API.

Front-end: Angular 7

Back-end: WordPress / WP Rest API

UI Framework: Bootstrap 4

WP Duplicator Files:  https://drive.google.com/drive/folders/1sbtucosZuXhvHmKvnexBqc5jenQFyKYx


Front-end Dependencies: node_module

Run `npm install` in the terminal.

Download the duplicator file and run `installer.php` to into you localhost wp-api folder to deploy the WP API.

Once the installation done. Login to wp-admin.
Username: admin
Password: admin123!

Re-save the permalink and add the following lines of code to the .htaccess file if not yet there.

RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/country`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng serve --open --host your_ip_here` # compiles and run the solution on your localhost using your ip

Run `ng build --prod` # complies production scripts and files to dist folder

Run `ng build --prod --base-href '/your_directory/'` #complies production scripts and files to dist folder so you can upload it to a custom directory

The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes
1. Country is auto detect based on client's IP address using `Geolocation API` http://ip-api.com/json.

2. Passed the country code of the client IP using this endpoint `https://restcountries.eu/rest/v2/alpha/{code}` to get all the information of the Country.

3. Get all of the countries's calling code based from the client's country region using this endpoint `https://restcountries.eu/rest/v2/region/{region}` and bind the result to the form phone number field.

4. Once the form submitted, it will be save as `Post` in Wordpress wp-admin and the will automatically reload.

5. All `Post` will be display as `Testimonials` at the bottom part of the page.

 
