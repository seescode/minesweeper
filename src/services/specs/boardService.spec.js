'use strict';

describe('BoardService', function () {

	var boardService;
    
	beforeEach(function () {
		module('minesweeper');

		module(function($provide) {
			$provide.value('lodash', {
				shuffle: function(thing) {
					return thing;
				}				
			});
		});
	
		inject(function (_BoardService_) {
            
			boardService = _BoardService_;
		});        
	});

	it('make sure the board gets generated', function () {
		//Arrange
				
		//Act
		var board = boardService.generateBoard(2, 3);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(0);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(0);
		expect(board[1][2]).toBe(0);
	});
		
	it('make sure the correct number of bombs get added for 0 case', function () {
		//Arrange
				
		//Act
		var board = boardService.generateBoard(2, 3);
		board = boardService.addBombsToBoard(0, board);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(0);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(0);
		expect(board[1][2]).toBe(0);
	});

	it('make sure the correct number of bombs get added', function () {
		//Arrange
				
		//Act
		var board = boardService.generateBoard(3, 2);
		board = boardService.addBombsToBoard(2, board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe('bomb');
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(0);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(0);					
	});

	it('make sure the correct number of bombs get added for a full board of bombs', function () {
		//Arrange
				
		//Act
		var board = boardService.generateBoard(3, 3);
		board = boardService.addBombsToBoard(9, board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe('bomb');
		expect(board[0][2]).toBe('bomb');
		expect(board[1][0]).toBe('bomb');
		expect(board[1][1]).toBe('bomb');
		expect(board[1][2]).toBe('bomb');
		expect(board[2][0]).toBe('bomb');
		expect(board[2][1]).toBe('bomb');
		expect(board[2][2]).toBe('bomb');					
	});	
	
	it('keep 0s for bombless board', function () {
		//Arrange
				
		//Act
		var board = boardService.generateBoard(3, 3);
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(0);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(0);
		expect(board[1][2]).toBe(0);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(0);
		expect(board[2][2]).toBe(0);					
	});		
	
	it('surround a bomb with 1', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[1][1] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe(1);
		expect(board[0][1]).toBe(1);
		expect(board[0][2]).toBe(1);
		expect(board[1][0]).toBe(1);
		expect(board[1][1]).toBe('bomb');
		expect(board[1][2]).toBe(1);
		expect(board[2][0]).toBe(1);
		expect(board[2][1]).toBe(1);
		expect(board[2][2]).toBe(1);					
	});		

	it('upper left corner bomb', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][0] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe(1);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(1);
		expect(board[1][1]).toBe(1);
		expect(board[1][2]).toBe(0);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(0);
		expect(board[2][2]).toBe(0);					
	});	

	it('upper right corner bomb', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(1);
		expect(board[0][2]).toBe('bomb');
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(1);
		expect(board[1][2]).toBe(1);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(0);
		expect(board[2][2]).toBe(0);					
	});	
	
	it('lower left corner bomb', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[2][0] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(0);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(1);
		expect(board[1][1]).toBe(1);
		expect(board[1][2]).toBe(0);
		expect(board[2][0]).toBe('bomb');
		expect(board[2][1]).toBe(1);
		expect(board[2][2]).toBe(0);					
	});	
	
	it('lower right corner bomb', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[2][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe(0);
		expect(board[0][1]).toBe(0);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(0);
		expect(board[1][1]).toBe(1);
		expect(board[1][2]).toBe(1);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(1);
		expect(board[2][2]).toBe('bomb');					
	});		


	it('2 bombs', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][0] = 'bomb';
		board[2][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe(1);
		expect(board[0][2]).toBe(0);
		expect(board[1][0]).toBe(1);
		expect(board[1][1]).toBe(2);
		expect(board[1][2]).toBe(1);
		expect(board[2][0]).toBe(0);
		expect(board[2][1]).toBe(1);
		expect(board[2][2]).toBe('bomb');					
	});		
	
	it('3 bombs', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][0] = 'bomb';
		board[1][1] = 'bomb';		
		board[2][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe(2);
		expect(board[0][2]).toBe(1);
		expect(board[1][0]).toBe(2);
		expect(board[1][1]).toBe('bomb');
		expect(board[1][2]).toBe(2);
		expect(board[2][0]).toBe(1);
		expect(board[2][1]).toBe(2);
		expect(board[2][2]).toBe('bomb');					
	});		

	it('4 bombs', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][0] = 'bomb';
		board[0][1] = 'bomb';		
		board[1][1] = 'bomb';		
		board[2][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe('bomb');
		expect(board[0][2]).toBe(2);
		expect(board[1][0]).toBe(3);
		expect(board[1][1]).toBe('bomb');
		expect(board[1][2]).toBe(3);
		expect(board[2][0]).toBe(1);
		expect(board[2][1]).toBe(2);
		expect(board[2][2]).toBe('bomb');					
	});		
	

	it('8 bombs', function () {
		//Arrange
		var board = boardService.generateBoard(3, 3);
		board[0][0] = 'bomb';
		board[0][1] = 'bomb';		
		board[0][2] = 'bomb';		
		board[1][0] = 'bomb';
		board[1][2] = 'bomb';
		board[2][0] = 'bomb';		
		board[2][1] = 'bomb';		
		board[2][2] = 'bomb';
				
		//Act
		board = boardService.addNumbersToBoard(board);
		
		//Assert
		expect(board[0][0]).toBe('bomb');
		expect(board[0][1]).toBe('bomb');
		expect(board[0][2]).toBe('bomb');
		expect(board[1][0]).toBe('bomb');
		expect(board[1][1]).toBe(8);
		expect(board[1][2]).toBe('bomb');
		expect(board[2][0]).toBe('bomb');
		expect(board[2][1]).toBe('bomb');
		expect(board[2][2]).toBe('bomb');					
	});		
	
});