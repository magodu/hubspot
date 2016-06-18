(function() {
    'use strict';

    angular
        .module('webteam')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'app/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .when('/services', {
                templateUrl: 'app/services/services.html',
                controller: 'ServicesController',
                controllerAs: 'services'
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController',
                controllerAs: 'contact'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
