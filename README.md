# Football web
This repository has the code for a web site that gets the info of some of the most important football (or soccer if you are from the US) championships from http://api.football-data.org

## Installation
### Prerequisites

* [Node](https://nodejs.org)
* [Gulp](http://gulpjs.com/)
* [Bower](https://bower.io/)

### Installation
1. Clone the repository
1. execute `npm install & bower install`

## Usage

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

###### Powered by gulp-angular yeoman generator
