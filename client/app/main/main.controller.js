'use strict';

angular.module('pwcBitcoinTransferApp')
  .controller('MainCtrl', function ($scope, $http, $state, Auth, User, $cookieStore, $cookies) {
    $scope.ammount = '';
    $scope.bitcoin = 0;

    var currentUser = {};

    if($cookieStore.get('token')) {
      currentUser = User.get();
    }

    $http({
      method: 'GET',
      url: 'https://blockchain.info/ticker'
    }).then(function successCallback(response) {
        $scope.bitcoinValue = response.data.AUD.last
      }, function errorCallback(response) {
        $scope.bitcoinValue = '';
      });
    
    $scope.bitcoinConversion = function(){
      $scope.bitcoin = $scope.ammount/$scope.bitcoinValue;
    };

    
    $scope.sendBitcoin = function(){
      $cookies.putObject('bitcoinTransfer', {
        data: {
          bitcoinValue : $scope.bitcoinValue,
          ammount: $scope.ammount,
          bitcoin: $scope.bitcoin
        }
      });

      if(currentUser.name) {
        $state.go('confirmation');
      } else {
        $state.go('login');
      }
    };
  });
