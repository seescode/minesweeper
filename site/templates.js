angular.module('minesweeper').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('frontend/directives/board.html',
    "<div class=\"board\">\r" +
    "\n" +
    "    <div class=\"row\" ng-repeat=\"row in getNumber(rows) track by $index\">\r" +
    "\n" +
    "        <tile ng-repeat=\"column in getNumber(columns) track by $index\"\r" +
    "\n" +
    "            tile-value=\"board[row][column]\">\r" +
    "\n" +
    "        </tile>\r" +
    "\n" +
    "    </div>    \r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('frontend/directives/tile.html',
    "<div class=\"tile\" ng-class=\"state\" ng-click=\"click()\" ng-bind=\"openedValue\">        \r" +
    "\n" +
    "</div>"
  );

}]);
