'use strict';

// @ngInject
var angular = require('angular');
var Bosonic = require('bosonic');


var app = angular.module('element_test', ['Bosonic']);

app.controller('myController', require('./myController'));
