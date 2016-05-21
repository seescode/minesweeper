(function () {
    'use strict';
    function board(BoardService) {        
        return {
            restrict: 'E', 
            scope: {
                rows: '@',
                columns: '@'
            },
            templateUrl: "frontend/directives/board.html",
            link: function (scope, element, attrs) {                                                 
                scope.board = BoardService.generateBoard(scope.rows, scope.columns);
                scope.board = BoardService.addBombsToBoard(20, scope.board);
                scope.board = BoardService.addNumbersToBoard(scope.board);      
                
                scope.getNumber = function(num) {
                    
                    var array = [];
                    
                    for(var i=0; i < num; i++) {
                        array.push(i);
                    }
                    
                    return array;   
                }
            }
        };
    };

    board.$inject = ['BoardService'];
    angular.module('minesweeper').directive('board', board);
})();