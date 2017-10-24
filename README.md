# angular-ys-directive-only-number

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Angular directive only number for html5 input text

### Prepare

```
$ bower init
$ npm init
```

### Install dependencies

```
$ bower install --save jquery@~1.12.0
$ bower install --save angular@~1.3.20
$ bower install --save angular-ys-service-keyboard@~1.0.0
```

### Install develop dependencies

```
$ bower install --save-dev angular-mocks@~1.3.20
```

### Install compiler dependencies

```
$ npm install --save-dev babel-cli babel-preset-env
$ npm install --save-dev babel-preset-babili
```

### Install unit test/coverage tools

```
$ npm install --save-dev bower
$ npm install --save-dev karma
$ npm install --save-dev chai karma-chai
$ npm install --save-dev mocha karma-mocha
$ npm install --save-dev sinon karma-sinon
$ npm install --save-dev karma-bro karma-phantomjs-launcher
$ npm install --save-dev karma-coverage karma-istanbul
$ npm install --save-dev karma-mocha-reporter karma-junit-reporter
$ npm install --save-dev coveralls
```

### Prepare application

```
$ bower install && npm install
```

### Compiler application

```
$ npm run compile
```

### Test application

```
$ npm test
```

### Register (previusly make a git tag version)

```
$ bower register angular-ys-directive-only-number https://github.com/yadickson/angular-ys-directive-only-number.git
```

[travis-image]: https://img.shields.io/travis/yadickson/angular-ys-directive-only-number.svg?label=travisci
[travis-url]: https://travis-ci.org/yadickson/angular-ys-directive-only-number

[coveralls-image]: https://coveralls.io/repos/github/yadickson/angular-ys-directive-only-number/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/yadickson/angular-ys-directive-only-number
