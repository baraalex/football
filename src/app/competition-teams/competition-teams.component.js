'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('competitionTeams').
component('competitionTeams', {
  templateUrl: 'app/competition-teams/competition-teams.template.html',
  controller: ['$routeParams', 'API',
    function competitionTeamsController($routeParams, API) {
      var vm = this;
      if ($routeParams.id) {
        vm.comp = API.getCompetitionTeams($routeParams.id);
        vm.id = $routeParams.id;
      } else {
        vm.comp = {};
      }

    }
  ]
});
