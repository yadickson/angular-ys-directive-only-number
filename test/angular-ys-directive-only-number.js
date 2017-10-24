(function() {
  'use strict';

  describe('Check ysOnlyNumberManager', function() {

    beforeEach(angular.mock.module('angularYS.DirectiveOnlyNumber'));

    // instantiate service
/*    var mockYSServiceKeyboard;
    beforeEach(function() {

      mockYSServiceKeyboard = {
        isOnlyNumber: function(e) {
          return e === 'N';
        },
        isCtrlKeys: function(e) {
          return e === 'K';
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

      it('Check input numeric', inject(function(ysServiceKeyboard) {
        expect(ysOnlyNumberManager.formatNumber('123456789')).to.equal('123456789');
      }));

      it('Check numeric and text', inject(function(ysServiceKeyboard) {
        expect(ysOnlyNumberManager.formatNumber('123abc456')).to.equal('123456');
      }));

      it('Check decimal number', inject(function(ysServiceKeyboard) {
        expect(ysOnlyNumberManager.formatNumber('123.456')).to.equal('123456');
      }));

    });
*/
  });
})();
