'use strict';

angular.
module('core.api').
factory('API', ['$http',
  function($http) {
    var data = {};

    data.getAll = function getAll() {
      var url = 'http://api.football-data.org';
      return getData(url);
    };

    data.getCompetition = function getCompetition(id) {
      var url = id ? 'http://api.football-data.org/v1/competitions/' + id :
        'http://api.football-data.org/v1/competitions';
      // 'http://api.football-data.org/v1/competitions';
      return getData(url);
    };

    data.getCompetitionTable = function getCompetitionTable(id) {
      var url = 'http://api.football-data.org/v1/competitions/' + id +
        '/leagueTable';
      return getData(url);
    };

    data.getCompetitionFixtures = function getCompetitionFixtures(id) {
      var url = 'http://api.football-data.org/v1/competitions/' + id +
        '/fixtures';
      return getData(url);
    };

    data.getCompetitionTeams = function getCompetitionTeams(id) {
      var url = 'http://api.football-data.org/v1/competitions/' + id +
        '/teams';
      return getData(url);
    };

    data.getTeam = function getTeam(id) {
      var url = 'http://api.football-data.org/v1/teams/' + id;
      return getData(url);
    };

    data.getTeamPlayers = function getTeamPlayers(id) {
      var url = 'http://api.football-data.org/v1/teams/' + id +
        '/players';
      return getData(url);
    };

    data.getTeamFixtures = function getTeamFixtures(id) {
      var url = 'http://api.football-data.org/v1/teams/' + id +
        '/fixtures';
      return getData(url);
    };

    return data;

    function getData(url) {
      var result = {};

      $http({
        method: 'GET',
        url: url,
        headers: {
          'X-Auth-Token': '70b6ffeaac5a4e0a9ba0932249de06a4 '
        }
      }).
      then(function(response) {
        result.status = response.status;
        result.data = response.data;
      }, function(response) {
        result.data = response.data || 'Request failed';
        result.status = response.status;
      });
      return result;
    }
  }
]);
