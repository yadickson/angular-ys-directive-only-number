(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name angularYS.DirectiveOnlyNumber
   * @description
   * # ysOnlyNumber
   */
  angular.module('angularYS.DirectiveOnlyNumber', ['angularYS.ServiceKeyboard'])
    .directive('ysOnlyNumber', onlyNumber);

  onlyNumber.$inject = ['ysOnlyNumberManager'];

  function onlyNumber(ysOnlyNumberManager) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: postLink
    };

    function postLink(scope, element, attrs, ngModel) {

      element.bind('keypress keydown', ysOnlyNumberManager.validateKeyEvent);
      element.bind('propertychange keyup paste', onChange);

      //DOM -> MODEL
      ngModel.$parsers.unshift(ysOnlyNumberManager.formatNumber);
      //MODEL -> DOM
      ngModel.$formatters.unshift(ysOnlyNumberManager.formatNumber);

      function onChange() {
        this.value = ysOnlyNumberManager.formatNumber(this.value);
      }
    }

  };

})();
