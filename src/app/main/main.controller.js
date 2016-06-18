(function() {
    'use strict';

    angular
        .module('webteam')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, MainService) {

    	var scopeProperties = {
    		data: {}
    	}

    	angular.extend($scope, scopeProperties);


    	$scope.goToLink = function(link) {
    		console.log('manage link: ' + link);
    	};

    	function getData() {
    		MainService.getData().then(function (response) {
	            $scope.data = response;
	        });
    	}

    	function init() {
    		getData();
    	}

    	init();

    }
})();
