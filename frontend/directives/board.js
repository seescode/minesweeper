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
                    return new Array(num);   
                }
            }
        };
    };

    board.$inject = ['BoardService'];
    angular.module('minesweeper').directive('board', board);
})();