(function () {
    'use strict';
    function tile() {        
        return {
            restrict: 'E', 
            scope: {
            },
            templateUrl: "frontend/directives/tile.html",
            link: function (scope, element, attrs) {                   
            }
        };
    };

    //tile.$inject = [];
    angular.module('minesweeper').directive('tile', tile);
})();