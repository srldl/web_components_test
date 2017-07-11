'use strict';

// @ngInject
var angular = require('angular');


var app = angular.module('element_test', []);

app.controller('myController', require('./myController'));
