(function () {
    'use strict';
    function MainController(BoardService) {
        //Controllers should put things on vm, not $scope.
        var vm = this;
        
        vm.rows = 10;
		vm.columns = 15;
    }

    MainController.$inject = [];
    angular.module('minesweeper').controller('MainController', MainController);
})();