(function() {
  'use strict';

  describe('Check ysOnlyNumberManager', function() {

    beforeEach(angular.mock.module('angularYS.DirectiveOnlyNumber'));

    // instantiate service
    var mockYSServiceKeyboard;
    beforeEach(function() {

      mockYSServiceKeyboard = {
        isOnlyNumber: function(e) {
          return e.key === 'N';
        },
        isCtrlKeys: function(e) {
          return e.key === 'K';
        }
      };

      angular.mock.module(function($provide) {
        $provide.value('ysServiceKeyboard', mockYSServiceKeyboard);
      });

    });

    describe('Check method formatNumber', function() {

      it('Check input null', inject(function(ysOnlyNumberManager) {
        expect(ysOnlyNumberManager.formatNumber(null)).to.equal('');
      }));

      it('Check input numeric', inject(function(ysOnlyNumberManager) {
        expect(ysOnlyNumberManager.formatNumber('123456789')).to.equal('123456789');
      }));

      it('Check numeric and text', inject(function(ysOnlyNumberManager) {
        expect(ysOnlyNumberManager.formatNumber('123abc456')).to.equal('123456');
      }));

      it('Check decimal number', inject(function(ysOnlyNumberManager) {
        expect(ysOnlyNumberManager.formatNumber('123.456')).to.equal('123456');
      }));

    });

    describe('Check method validateKeyEvent', function() {

      it('Check input numeric', inject(function(ysOnlyNumberManager) {
        var event = angular.element.Event("keyup");
        event.key = 'N';
        expect(ysOnlyNumberManager.validateKeyEvent(event)).to.be.undefined;
      }));

      it('Check input ctrl key', inject(function(ysOnlyNumberManager) {
        var event = angular.element.Event("keyup");
        event.key = 'K';
        expect(ysOnlyNumberManager.validateKeyEvent(event)).to.be.undefined;
      }));

      it('Check other', inject(function(ysOnlyNumberManager) {
        var event = angular.element.Event("keyup");
        event.key = 'Other';
        expect(ysOnlyNumberManager.validateKeyEvent(event)).to.be.false;
      }));

      it('Check preventDefault is call', inject(function(ysOnlyNumberManager) {

        var event = {
          preventDefault: sinon.spy(),
          key: 'Other'
        }

        expect(ysOnlyNumberManager.validateKeyEvent(event)).to.be.false;
        assert(event.preventDefault.called);
      }));

    });

  });
})();
