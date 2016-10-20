'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('competitionDetail').
component('competitionDetail', {
  templateUrl: 'app/competition-detail/competition-detail.template.html',
  controller: ['$routeParams', 'API',
    function competitionDetailController($routeParams, API) {
      var vm = this;
      if ($routeParams.id)
        vm.comp = API.getCompetition($routeParams.id);
      else {
        vm.comp = API.getCompetition();
      }

    }
  ]
});
