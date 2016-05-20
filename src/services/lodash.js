(function () {
    
    function lodash() {        
        return _;
    }

    angular.module('minesweeper').service('lodash', lodash);
})();