(function () {
	'use strict';

    function BoardService() {
        var svc = {};
        
        svc.generateBoard = function(bombs, rows, columns) {
            var board = [[], []];    
            
            board = svc.addBombsToBoard(bombs, board);
            board = svc.addNumbersToBoard(board);

                    
            return board;
        };
    
        svc.addBombsToBoard = function(bombs, board) {
            
            //Create an array of objects that contain x,y coordinates for all possible positions
            //on the board. 
            
            //shuffle the array
            
            //pop the coordinates from the board and then place the bomb on all the places.  
            
            return board;
        };
    
        svc.addNumbersToBoard = function(board) {            
            
            return board;
        };   
        
        
        return svc;
    }

    BoardService.$inject = [];
    angular.module('minesweeper').service('BoardService', BoardService);

})();