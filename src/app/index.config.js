(function() {
  'use strict';

  angular
    .module('webteam')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
