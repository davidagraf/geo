'use strict';

angular.module('GeoApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
}]);
