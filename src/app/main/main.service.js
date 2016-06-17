(function() {
    'use strict';

    angular
        .module('webteam')
        .service('MainService', MainService);

    /** @ngInject */
    function MainService($http, $q) {

    	var serviceUrl = '/app/mock/mockData.json';

        function getData() {
            var deferred = $q.defer();

            $http({
	            'method': 'GET',
	            'cache': true,
	            'url': serviceUrl
	        }).
	            success(function (response) {
	                deferred.resolve(response);
	            }).
	            error(function (response, status) {
	                deferred.reject(response);
	            });

	        return deferred.promise;
        }

        return {
	        getData: getData
	    };


    }
})();
