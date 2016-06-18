(function() {
    'use strict';

    angular
        .module('webteam')
        .directive('navBar', navBar);

    /** @ngInject */
    function navBar($location) {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true,
            link: function(scope) {
                // I use DOM to not to have to load another framework like jQuery
                var menuButton = document.getElementById('menu-icon'),
                    mainNav = document.getElementsByClassName('main-nav');

                changeActiveMenu();

                angular.element(menuButton).bind('click', function($event) {
                    $event.preventDefault();

                    if (angular.element(mainNav).css('display') === 'block') {
                        angular.element(mainNav).css('display', 'none');
                    } else {
                        angular.element(mainNav).css('display', 'block');
                    }

                    angular.element(menuButton).toggleClass('active');
                });

                function changeActiveMenu() {
                    var path = $location.path(),
                        menu = document.getElementById('main-nav'),
                        menuItems = angular.element(menu).children(),
                        menuSelected,
                        i;

                    for (i = 0; i < menuItems.length; i++) {
                        angular.element(menuItems[i]).removeClass('active');
                    }

                    menuSelected = document.getElementById(path);
                    angular.element(menuSelected).addClass('active');
                }
            }

        };

        return directive;

        /** @ngInject */
        function NavbarController(moment) {
            var vm = this;

            // "vm.creationDate" is available by directive option "bindToController: true"
            vm.relativeDate = moment(vm.creationDate).fromNow();
        }
    }

})();
