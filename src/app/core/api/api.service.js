'use strict';

angular.
module('core.api').
factory('API', ['$http',
  function($http) {
    var data = {};
    var base_url = 'https://api.football-data.org';

    data.getCompetition = function getCompetition(id) {
      var url = id ? base_url + '/v1/competitions/' + id :
        base_url + '/v1/competitions';
      return getData(url);
    };

    data.getCompetitionTable = function getCompetitionTable(id) {
      var url = base_url + '/v1/competitions/' + id +
        '/leagueTable';
      return getData(url);
    };

    data.getCompetitionFixtures = function getCompetitionFixtures(id) {
      var url = base_url + '/v1/competitions/' + id +
        '/fixtures';
      return getData(url);
    };

    data.getCompetitionTeams = function getCompetitionTeams(id) {
      var url = base_url + '/v1/competitions/' + id +
        '/teams';
      return getData(url);
    };

    data.getTeam = function getTeam(id) {
      var url = base_url + '/v1/teams/' + id;
      return getData(url);
    };

    data.getTeamPlayers = function getTeamPlayers(id) {
      var url = base_url + '/v1/teams/' + id +
        '/players';
      return getData(url);
    };

    data.getTeamFixtures = function getTeamFixtures(id) {
      var url = base_url + '/v1/teams/' + id +
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
