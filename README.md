# angular-ys-directive-only-number

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]


Angular directive only number for html5 input text


## Installation
To install this module, you need to run the following command

```
$ npm install --save angular-ys-directive-only-number
```

## Dependency

```
$ npm install --save jquery@~3.0.0
$ npm install --save angular@~1.6.1
$ npm install --save angular-ys-factory-keyboard@~1.0.0
$ npm install --save angular-ys-service-keyboard@~1.0.0
```

## Include Javascripts in index.html

```html
<script src="node_modules/angular-ys-factory-keyboard/dist/angular-ys-factory-keyboard.js"></script>
<script src="node_modules/angular-ys-service-keyboard/dist/angular-ys-service-keyboard.js"></script>
<script src="node_modules/angular-ys-directive-only-number/dist/angular-ys-directive-only-number.js"></script>
```

## Add directive in app.js or main.js

```Javascript
angular.module('app', ['angularYS.DirectiveOnlyNumber']);
```

## Example

```html
<input type="text" ng-model="numericValue" ys-only-number></input>
<p>{{numericValue}}</p>
```

[travis-image]: https://travis-ci.org/yadickson/angular-ys-directive-only-number.svg
[travis-url]: https://travis-ci.org/yadickson/angular-ys-directive-only-number

[coveralls-image]: https://coveralls.io/repos/github/yadickson/angular-ys-directive-only-number/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/angular-ys-directive-only-number

[dependencies-image]: https://david-dm.org/yadickson/angular-ys-directive-only-number/status.svg
[dependencies-url]: https://david-dm.org/yadickson/angular-ys-directive-only-number?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/angular-ys-directive-only-number/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/angular-ys-directive-only-number?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/angular-ys-directive-only-number/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/angular-ys-directive-only-number

[npm-image]: https://badge.fury.io/js/angular-ys-directive-only-number.svg
[npm-url]: https://badge.fury.io/js/angular-ys-directive-only-number
