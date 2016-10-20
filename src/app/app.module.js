'use strict';

// Define the `football` module
angular.module('football', [
  'ngAnimate',
  'ngRoute',
  'core',
  'competitionsList',
  'competitionDetail',
  'competitionTeams',
  'competitionClasification',
  'competitionFixtures',
  'teamDetail',
  'teamPlayers',
  'teamFixtures'
]);

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
