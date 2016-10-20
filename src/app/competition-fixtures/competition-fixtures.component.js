'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('competitionFixtures').
component('competitionFixtures', {
  templateUrl: 'app/competition-fixtures/competition-fixtures.template.html',
  controller: ['$routeParams', 'API',
    function competitionFixturesController($routeParams, API) {
      var vm = this;

      vm.sortReverse = false; // set the default sort order
      vm.searchFish = ''; // set the default search/filter term

      if ($routeParams.id) {
        vm.dates = API.getCompetitionFixtures($routeParams.id);
        vm.comp = API.getCompetition($routeParams.id);
        vm.id = $routeParams.id;
      } else {
        vm.dates = {};
        vm.comp = {};
      }

    }
  ]
});
