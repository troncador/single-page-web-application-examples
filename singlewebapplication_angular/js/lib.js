(function(window){
'use strict';

var map =
[
  {
    "url": ["/", "/index.html"],
    "templateUrl": "template/index.html.frg",
    "controller": "indexController",
    "params" : {
      "color": "#ff5555"
    }
  },
  {
    "url": "/about.html",
    "templateUrl": "template/about.html.frg",
    "controller": "mainController",
    "params" : {
      "title": "ABOUT",
      "color": "#ff5555"
    }
  },
  {
    "url": "/contact.html",
    "templateUrl": "template/contact.html.frg",
    "controller": "mainController",
    "params" : {
      "title": "CONTACT",
      "color": "#ff5555"
    }
  }
];



var mainApp = angular.module("mainApp", ['ngRoute']);
  var configureMainApp = function ( $routeProvider, $locationProvider) {
    map.forEach(function(element, index, array) {
      var route = {
        templateUrl: element.templateUrl,
        controller: element.controller,
        params:  element.params
      };

      if (Array.isArray(element.url)) {
        element.url.forEach(function(url){
          $routeProvider.when(url, route);
        });
      } else {
        $routeProvider.when(element.url, route);
      }
    });

    $routeProvider.otherwise({
      templateUrl: 'template/404.html.frg',
      controller: 'notFoundController'
    });
    $locationProvider.html5Mode(true);
  };


  var indexController = function($scope, $route) {
    var params = $route.current.$$route.params;
    document.title = 'INDEX';
    $scope['color'] = params.color;
  };

  var mainController = function($scope, $route) {
    var params = $route.current.$$route.params;
    document.title = params.title;
    $scope['color'] = params.color;
  };

  var notFoundController = function($scope, $route) {
    document.title = "404";
  };

  mainApp.config(configureMainApp);
  mainApp.controller('indexController', indexController);
  mainApp.controller('mainController', mainController);
  mainApp.controller('notFoundController', notFoundController);

})(this);
