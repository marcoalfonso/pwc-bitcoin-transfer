'use strict';

angular.module('pwcBitcoinTransferApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('success', {
        url: '/success',
        templateUrl: 'app/success/success.html',
        controller: 'SuccessCtrl'
      });
  });