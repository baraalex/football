'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('teamDetail').
component('teamDetail', {
  templateUrl: 'app/team-detail/team-detail.template.html',
  controller: ['$routeParams', 'API',
    function teamDetailController($routeParams, API) {
      var vm = this;
      if ($routeParams.id) {
        vm.team = API.getTeam($routeParams.id);
        vm.id = $routeParams.id;
      } else {
        vm.team = {};
      }

    }
  ]
});
