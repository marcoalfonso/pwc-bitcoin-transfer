'use strict';

angular.module('pwcBitcoinTransferApp')
  .controller('SuccessCtrl', function ($scope, $state, $cookies) {
  	var bitcoinTransfer = $cookies.getObject('bitcoinTransfer');
  	
    $scope.ammount = bitcoinTransfer.data.ammount;
	$scope.bitcoin = bitcoinTransfer.data.bitcoin;
	$scope.bitcoinValue = bitcoinTransfer.data.bitcoinValue;
	
    $scope.finish = function(){
      $state.go('main');
    };
  });
