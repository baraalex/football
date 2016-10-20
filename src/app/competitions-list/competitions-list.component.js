'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('competitionsList').
component('competitionsList', {
  templateUrl: 'app/competitions-list/competitions-list.template.html',
  controller: ['$routeParams', 'API',
    function competitionsListController($routeParams, API) {
      var vm = this;
      if ($routeParams.id)
        vm.comp = API.getCompetition($routeParams.id);
      else {
        vm.comp = API.getCompetition();
      }

    }
  ]
});
