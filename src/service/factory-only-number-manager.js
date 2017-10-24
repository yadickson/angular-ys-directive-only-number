(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name angularYS.DirectiveOnlyNumber
   * @description
   * # ysOnlyNumberManager
   * Factory in the angularYS.DirectiveOnlyNumber.
   */
  angular.module('angularYS.DirectiveOnlyNumber')
    .factory('ysOnlyNumberManager', onlyNumberManager);

  onlyNumberManager.$inject = ['ysServiceKeyboard'];

  function onlyNumberManager(ysServiceKeyboard) {

    return {
      formatNumber: formatNumber,
      validateKeyEvent: validateKeyEvent
    };

    function formatNumber(value) {
      var str = value || '';
      return str.replace(/\D/g, '');
    }

    function validateKeyEvent(event) {
      if (!ysServiceKeyboard.isOnlyNumber(event) && !ysServiceKeyboard.isCtrlKeys(event)) {
        event.preventDefault();
        return false;
      }
    }
  }

})();
