'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('teamFixtures').
component('teamFixtures', {
  templateUrl: 'app/team-fixtures/team-fixtures.template.html',
  controller: ['$routeParams', 'API',
    function teamFixturesController($routeParams, API) {
      var vm = this;

      vm.sortReverse = false; // set the default sort order
      vm.searchFish = ''; // set the default search/filter term
      vm.comp = {};

      if ($routeParams.id) {
        vm.dates = API.getTeamFixtures($routeParams.id);
        vm.team = API.getTeam($routeParams.id);
        vm.comp = API.getCompetition();
        vm.id = $routeParams.id;
      } else {
        vm.dates = {};
        vm.team = {};
      }

      vm.getCompetition = function(id) {
        var index = Object.keys(vm.comp.data).map(function(value) {
          return vm.comp.data[value].id == id ? parseInt(value) + 1 : 0;
        }).reduce(function(anterior, actual) {
          return actual + anterior;
        }) - 1;

        return vm.comp.data[index];
      };

    }
  ]
});
