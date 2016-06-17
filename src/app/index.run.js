(function() {
  'use strict';

  angular
    .module('webteam')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
