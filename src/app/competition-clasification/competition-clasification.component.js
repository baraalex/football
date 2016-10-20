'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('competitionClasification').
component('competitionClasification', {
  templateUrl: 'app/competition-clasification/competition-clasification.template.html',
  controller: ['$routeParams', 'API',
    function competitionClasificationController($routeParams, API) {
      var vm = this;

      vm.sortReverse = false; // set the default sort order
      vm.searchFish = ''; // set the default search/filter term

      if ($routeParams.id) {
        vm.clasif = API.getCompetitionTable($routeParams.id);
        vm.id = $routeParams.id;
      } else {
        vm.clasif = {};
      }

    }
  ]
});
