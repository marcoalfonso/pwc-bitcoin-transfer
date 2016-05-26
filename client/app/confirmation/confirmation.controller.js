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

    $scope.sendMoney = function(){
      $state.go('success');
    };

    /*$scope.sendMoney = function(){
    	var currentUser = {};

	    if($cookieStore.get('token')) {
	      currentUser = User.get();
	    }

    	var main_password = Wallet.main_password;
    	var second_password = Wallet.second_password;
    	var address = Wallet.address;
    	var fee = Wallet.fee;
    	var note = Wallet.note;

    	$http({
	      method: 'POST',
	      url: ' https://blockchain.info/merchant/$guid/payment?password=' + main_password + 
	      '&second_password=' + second_password + '&to=' + address + '&amount=' + parseInt($scope.ammount) + 
	      '&from=' + currentUser.name + '&fee=' + fee  + '&note=' + note
	    }).then(function successCallback(response) {
	      $state.go('success');
	    }, function errorCallback(response) {.
	      
	    });
    };*/
    
  });
