'use strict';

angular.
module('football').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/competitions', {
      template: '<competitions-list></competitions-list>'
    }).
    when('/competitions/:id', {
      template: '<competition-detail></competition-detail>'
    }).
    when('/competitions/:id/equipos', {
      template: '<competition-teams></competition-teams>'
    }).
    when('/competitions/:id/tabla', {
      template: '<competition-clasification></competition-clasification>'
    }).
    when('/competitions/:id/calendario', {
      template: '<competition-fixtures></competition-fixtures>'
    }).
    when('/equipo/:id', {
      template: '<team-detail></team-detail>'
    }).
    when('/equipo/:id/jugadores', {
      template: '<team-players></team-players>'
    }).
    when('/equipo/:id/calendario', {
      template: '<team-fixtures></team-fixtures>'
    }).
    otherwise('/competitions');
  }
]);
