(function () {
    'use strict';
    function tile() {        
        return {
            restrict: 'E', 
            scope: {
            },
            templateUrl: "frontend/directives/tile.html",
            link: function (scope, element, attrs) {        
                scope.click = function() {
                    alert('hi');
                }           
            }
        };
    };

    //tile.$inject = [];
    angular.module('minesweeper').directive('tile', tile);
})();