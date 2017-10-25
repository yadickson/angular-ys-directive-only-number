(function() {
  'use strict';

  describe('Check ysOnlyNumberManager', function() {

    beforeEach(angular.mock.module('angularYS.DirectiveOnlyNumber'));

    var element;
    var mockYSOnlyNumberManager;

    // instantiate service
    beforeEach(function() {

      mockYSOnlyNumberManager = {
        formatNumber: sinon.spy(),
        validateKeyEvent: sinon.spy()
      };

      angular.mock.module(function($provide) {
        $provide.value('ysOnlyNumberManager', mockYSOnlyNumberManager);
      });

    });

    it('Check only-number propertychange event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input><p>{{numericValue}}</p>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("propertychange");
      element.trigger(event);
      expect(mockYSOnlyNumberManager.formatNumber.called).to.be.true;
      expect(mockYSOnlyNumberManager.validateKeyEvent.called).to.be.false;
    }));

    it('Check only-number keyup event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("keyup");
      event.key = '1';
      element.trigger(event);
      expect(mockYSOnlyNumberManager.formatNumber.called).to.be.true;
      expect(mockYSOnlyNumberManager.validateKeyEvent.called).to.be.false;
    }));

    it('Check only-number paste event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("paste");
      element.trigger(event);
      expect(mockYSOnlyNumberManager.formatNumber.called).to.be.true;
      expect(mockYSOnlyNumberManager.validateKeyEvent.called).to.be.false;
    }));

    it('Check only-number keypress event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("keypress");
      element.trigger(event);
      expect(mockYSOnlyNumberManager.validateKeyEvent.called).to.be.true;
    }));

    it('Check only-number keydown event', inject(function($rootScope, $compile) {
      element = angular.element('<input type="text" ng-model="numericValue" ys-only-number></input>');
      element = $compile(element)($rootScope.$new());
      var event = angular.element.Event("keydown");
      element.trigger(event);
      expect(mockYSOnlyNumberManager.validateKeyEvent.called).to.be.true;
    }));

  });
})();
