'use strict';

describe('Controller: ConfirmationCtrl', function () {

  // load the controller's module
  beforeEach(module('pwcBitcoinTransferApp'));

  var ConfirmationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmationCtrl = $controller('ConfirmationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
