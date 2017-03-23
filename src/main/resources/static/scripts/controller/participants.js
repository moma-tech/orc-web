/**
 * Participants Controller to handle request with parameters
 * Created by ivan on 17-3-23.
 */
angular.module('ocrApp')
    .controller('ParticipantsCtrl', function ($scope, $http, $routeParams) {
        $http({
            method: 'GET',
            url: '/participants/races/' + $routeParams.raceId
        }).then(function (response) {
            $scope.participants = response.data;
        }, function(response) {
            console.error('Error requesting participants.'+response.toString())
        });
    });