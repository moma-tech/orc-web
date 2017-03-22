/**
 * Created by ivan on 17-3-20.
 */
angular.module('ocrApp').controller('MainCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '/races'
    }).then(function (response) {
        $scope.races = response.data;
    }, function (response) {
        console.error('Error requesting races');
    });
});