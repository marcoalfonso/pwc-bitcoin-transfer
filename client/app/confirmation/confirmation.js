'use strict';

angular.module('pwcBitcoinTransferApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'app/confirmation/confirmation.html',
        controller: 'ConfirmationCtrl',
        params: {
	        obj: null
	    }
      });
  });