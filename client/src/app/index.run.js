(function() {
  'use strict';

  angular
    .module('client')
    .run(runBlock)
    .run(xEditableOptions);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  function xEditableOptions(editableOptions) {
  	editableOptions.theme = 'bs3';
	};

})();
