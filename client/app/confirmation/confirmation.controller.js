'use strict';

angular.module('pwcBitcoinTransferApp')
  .controller('ConfirmationCtrl', function ($scope, $state, Auth, $rootScope, $cookies, User) {
  	var bitcoinTransfer = $cookies.getObject('bitcoinTransfer');
  	
    $scope.ammount = bitcoinTransfer.data.ammount;
  	$scope.bitcoin = bitcoinTransfer.data.bitcoin;
  	$scope.bitcoinValue = bitcoinTransfer.data.bitcoinValue;

  	$scope.fee = $scope.ammount * 0.1;
  	$scope.total = parseInt($scope.ammount) + $scope.fee;

    $scope.sendMoney = function(){
      $state.go('success');
    };
  });
