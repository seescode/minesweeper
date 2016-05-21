(function () {    
    function BoardService(lodash) {
        
        var svc = {};
        
        svc.generateBoard = function(rows, columns) {
            var board = [];    
            
            var arr = [];
            for (var i = 0; i < columns; i++) {
               arr.push(0);                
            }
            
            for (var j = 0; j < rows; j++) {
                board[j] = _.cloneDeep(arr);
            }            

            return board;
        };
    
        svc.addBombsToBoard = function(bombs, board) { 
            var allPositions = [];
                        
            var rows = board.length;
            var columns = board[0].length;
            
            //Create an array of objects that contain x,y coordinates for all possible positions
            //on the board. 
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    allPositions.push({row: i, column: j});
                }
            }

            //shuffle the array
            allPositions = lodash.shuffle(allPositions);
            
            //pop the coordinates from the board and then place the bomb on all the places.  
            for (var b = 0; b < bombs; b++) {
                var position = allPositions[b];
                board[position.row][position.column] = 'bomb'; 
            }            
            
            return board;
        };
    
        svc.addNumbersToBoard = function(board) {                 
            var rows = board.length;
            var columns = board[0].length;
            
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {                                       
                    if (board[i][j] != 'bomb') {                               
                        board[i][j] = countBombs(board, i, j);
                    }                    
                }
            }
            
            return board;
        };   
        
        function countBombs(board, i, j) {
            var rows = board.length;
            var columns = board[0].length;
            
            var numBombs = 0;
            
            var aroundPositions = [
              {row: i-1, column: j-1},  
              {row: i-1, column: j},    
              {row: i-1, column: j+1},  
              {row: i,   column: j-1},  
              {row: i,   column: j+1},  
              {row: i+1, column: j-1},  
              {row: i+1, column: j},  
              {row: i+1, column: j+1},                                  
            ];
                                   
            aroundPositions.forEach(function(position) {
                if (position.row >= 0 && position.row < rows &&  
                    position.column >= 0 && position.column < columns &&
                    board[position.row][position.column] == 'bomb') {
                    numBombs++;
                }
            });            
            
            return numBombs;
        }
        
        return svc;
    }

    BoardService.$inject = ['lodash'];
    angular.module('minesweeper').service('BoardService', BoardService);

})();