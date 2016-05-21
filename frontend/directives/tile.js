(function () {
    'use strict';
    function tile() {        
        return {
            restrict: 'E', 
            scope: {
                tileValue: '='
            },
            templateUrl: "frontend/directives/tile.html",
            link: function (scope, element, attrs) {
                scope.state = 'closed';   
                
                scope.click = function() {
                    scope.state = 'opened';
                    scope.openedValue = scope.tileValue;                    
                }           
            }
        };
    };

    //tile.$inject = [];
    angular.module('minesweeper').directive('tile', tile);
})();