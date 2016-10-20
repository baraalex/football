'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('teamPlayers').
component('teamPlayers', {
  templateUrl: 'app/team-players/team-players.template.html',
  controller: ['$routeParams', 'API',
    function teamPlayersController($routeParams, API) {
      var vm = this;
      if ($routeParams.id) {
        vm.team = API.getTeam($routeParams.id);
        vm.players = API.getTeamPlayers($routeParams.id);
        vm.id = $routeParams.id;
      } else {
        vm.team = {};
        vm.players = {};
      }

    }
  ]
});
