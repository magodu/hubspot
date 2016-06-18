(function() {
    'use strict';

    angular
        .module('webteam')
        .service('MainService', MainService);

    /** @ngInject */
    function MainService($q, HttpService) {

        var serviceUrl = '/app/mock/mockData.json';

        function getData() {
            var deferred = $q.defer();

            function success(data) {
                return deferred.resolve(data);
            }

            function error(data) {
                return deferred.reject(data);
            }

            HttpService.get(serviceUrl).then(success, error);

            return deferred.promise;
        }

        return {
            getData: getData
        };


    }
})();
