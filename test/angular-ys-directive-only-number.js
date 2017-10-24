(function() {
  'use strict';

  describe('Check ysOnlyNumberManager', function() {

    beforeEach(angular.mock.module('angularYS.DirectiveOnlyNumber'));

    var element;
    var mockYSOnlyNumberManager;

    // instantiate service
    beforeEach(function() {

      mockYSOnlyNumberManager = {
        formatNumber: function(e) {
          return e;
        },
        validateKeyEvent: function(e) {
          return e;
        }
      };

      angular.mock.module(function($provide) {
        $provide.value('ysOnlyNumberManager', mockYSOnlyNumberManager);
      });

    });

    it('Check only-number keyup event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("keyup");
      event.key = '1';
      element.trigger(event);
      expect(element.val()).to.empty;
    }));

    it('Check only-number paste event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("paste");
      element.trigger(event);
      expect(element.val()).to.empty;
    }));

    it('Check only-number propertychange event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input><p>{{numericValue}}</p>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("propertychange");
      element.trigger(event);
      expect(element.val()).to.empty;
    }));

  });
})();
