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
                    
                    if (scope.tileValue == 'bomb') {
                        alert('bomb!');
                    }                    
                }           
                
                element.bind('contextmenu', function(event) {
                    scope.$apply(function() {
                        event.preventDefault();
                        
                        if (scope.state == 'closed') {
                            scope.state = 'flagged';                            
                        }
                        else if (scope.state == 'flagged') {
                            scope.state = 'closed';
                        }                        
                    });
                });
                        
            }
        };
    };

    //tile.$inject = [];
    angular.module('minesweeper').directive('tile', tile);
})();