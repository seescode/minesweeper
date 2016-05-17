'use strict';

describe('BoardService', function () {

	var boardService;
    
	beforeEach(function () {
		module('minesweeper');
	
		inject(function (_BoardService_) {
            
			boardService = _BoardService_;
		});        
	});

	it('find unit id with null session id', function () {
		//Arrange
		
		//Act
		var board = boardService.generateBoard();

		//Assert
		expect(Array.isArray(board)).toBe(true);
	});

	
});