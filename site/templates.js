;(function(){

'use strict';

angular.module('minesweeper').run(['$templateCache', function($templateCache) {

  $templateCache.put('frontend/directives/board.html', '<div class="board">\n    <div class="row" ng-repeat="row in getNumber(rows) track by $index">\n        <tile ng-repeat="column in getNumber(columns) track by $index"\n            tile-value="board[row][column]">\n        </tile>\n    </div>    \n</div>');

  $templateCache.put('frontend/directives/tile.html', '<div class="tile" ng-class="state" ng-click="click()" ng-bind="openedValue">        \n</div>');

}]);

})();