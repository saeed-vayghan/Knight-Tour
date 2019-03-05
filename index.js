<html>
  <head>
    <meta charset="UTF-8"> 
    <title>Knight Tour</title>
    <style type="text/css">
      .chessboard {
          width: 600px;
          height: 600px;
          margin: 20px;
          border: 15px solid #333;
          float: left;
          clear: both;
      }
      .black {
          float: left;
          width: 60px;
          height: 60px;
          background-color: #999;
            font-size:50px;
          text-align:center;
          display: table-cell;
          vertical-align:middle;
      }
      .white {
          float: left;
          width: 60px;
          height: 60px;
          background-color: #fff;
          font-size:50px;
          text-align:center;
          display: table-cell;
          vertical-align:middle;
      }
      .current {
        font-color: red
      }

      .dashboard {
        width: 200px;
        height: 300px;
        border: 1px solid #eee;
        margin: 20px;
        padding: 5px;
        float: left;
      }
      .dashboard button {
        margin-top: 5px
      }
    </style>
  </head>
<body>

  <div id="board" class="chessboard">
    <!-- 10th -->
      <div class="cell black" id="cell_1_10"  data-x="1"  data-y="10"></div>
      <div class="cell white" id="cell_2_10"  data-x="2"  data-y="10"></div>
      <div class="cell black" id="cell_3_10"  data-x="3"  data-y="10"></div>
      <div class="cell white" id="cell_4_10"  data-x="4"  data-y="10"></div>
      <div class="cell black" id="cell_5_10"  data-x="5"  data-y="10"></div>
      <div class="cell white" id="cell_6_10"  data-x="6"  data-y="10"></div>
      <div class="cell black" id="cell_7_10"  data-x="7"  data-y="10"></div>
      <div class="cell white" id="cell_8_10"  data-x="8"  data-y="10"></div>
      <div class="cell black" id="cell_9_10"  data-x="9"  data-y="10"></div>
      <div class="cell white" id="cell_10_10" data-x="10" data-y="10"></div>

    <!-- 9th -->
      <div class="cell white" id="cell_1_9"  data-x="1"  data-y="9"></div>
      <div class="cell black" id="cell_2_9"  data-x="2"  data-y="9"></div>
      <div class="cell white" id="cell_3_9"  data-x="3"  data-y="9"></div>
      <div class="cell black" id="cell_4_9"  data-x="4"  data-y="9"></div>
      <div class="cell white" id="cell_5_9"  data-x="5"  data-y="9"></div>
      <div class="cell black" id="cell_6_9"  data-x="6"  data-y="9"></div>
      <div class="cell white" id="cell_7_9"  data-x="7"  data-y="9"></div>
      <div class="cell black" id="cell_8_9"  data-x="8"  data-y="9"></div>
      <div class="cell white" id="cell_9_9"  data-x="9"  data-y="9"></div>
      <div class="cell black" id="cell_10_9" data-x="10" data-y="9"></div>

    <!-- 8th -->
      <div class="cell black" id="cell_1_8"  data-x="1"  data-y="8"></div>
      <div class="cell white" id="cell_2_8"  data-x="2"  data-y="8"></div>
      <div class="cell black" id="cell_3_8"  data-x="3"  data-y="8"></div>
      <div class="cell white" id="cell_4_8"  data-x="4"  data-y="8"></div>
      <div class="cell black" id="cell_5_8"  data-x="5"  data-y="8"></div>
      <div class="cell white" id="cell_6_8"  data-x="6"  data-y="8"></div>
      <div class="cell black" id="cell_7_8"  data-x="7"  data-y="8"></div>
      <div class="cell white" id="cell_8_8"  data-x="8"  data-y="8"></div>
      <div class="cell black" id="cell_9_8"  data-x="9"  data-y="8"></div>
      <div class="cell white" id="cell_10_8" data-x="10" data-y="8"></div>

    <!-- 7th -->
      <div class="cell white" id="cell_1_7"  data-x="1"  data-y="7"></div>
      <div class="cell black" id="cell_2_7"  data-x="2"  data-y="7"></div>
      <div class="cell white" id="cell_3_7"  data-x="3"  data-y="7"></div>
      <div class="cell black" id="cell_4_7"  data-x="4"  data-y="7"></div>
      <div class="cell white" id="cell_5_7"  data-x="5"  data-y="7"></div>
      <div class="cell black" id="cell_6_7"  data-x="6"  data-y="7"></div>
      <div class="cell white" id="cell_7_7"  data-x="7"  data-y="7"></div>
      <div class="cell black" id="cell_8_7"  data-x="8"  data-y="7"></div>
      <div class="cell white" id="cell_9_7"  data-x="9"  data-y="7"></div>
      <div class="cell black" id="cell_10_7" data-x="10" data-y="7"></div>

    <!-- 6th -->
      <div class="cell black" id="cell_1_6"  data-x="1"  data-y="6"></div>
      <div class="cell white" id="cell_2_6"  data-x="2"  data-y="6"></div>
      <div class="cell black" id="cell_3_6"  data-x="3"  data-y="6"></div>
      <div class="cell white" id="cell_4_6"  data-x="4"  data-y="6"></div>
      <div class="cell black" id="cell_5_6"  data-x="5"  data-y="6"></div>
      <div class="cell white" id="cell_6_6"  data-x="6"  data-y="6"></div>
      <div class="cell black" id="cell_7_6"  data-x="7"  data-y="6"></div>
      <div class="cell white" id="cell_8_6"  data-x="8"  data-y="6"></div>
      <div class="cell black" id="cell_9_6"  data-x="9"  data-y="6"></div>
      <div class="cell white" id="cell_10_6" data-x="10" data-y="6"></div>

    <!-- 5th -->
      <div class="cell white" id="cell_1_5"  data-x="1"  data-y="5"></div>
      <div class="cell black" id="cell_2_5"  data-x="2"  data-y="5"></div>
      <div class="cell white" id="cell_3_5"  data-x="3"  data-y="5"></div>
      <div class="cell black" id="cell_4_5"  data-x="4"  data-y="5"></div>
      <div class="cell white" id="cell_5_5"  data-x="5"  data-y="5"></div>
      <div class="cell black" id="cell_6_5"  data-x="6"  data-y="5"></div>
      <div class="cell white" id="cell_7_5"  data-x="7"  data-y="5"></div>
      <div class="cell black" id="cell_8_5"  data-x="8"  data-y="5"></div>
      <div class="cell white" id="cell_9_5"  data-x="9"  data-y="5"></div>
      <div class="cell black" id="cell_10_5" data-x="10" data-y="5"></div>

    <!-- 4st -->
      <div class="cell black" id="cell_1_4"  data-x="1"  data-y="4"></div>
      <div class="cell white" id="cell_2_4"  data-x="2"  data-y="4"></div>
      <div class="cell black" id="cell_3_4"  data-x="3"  data-y="4"></div>
      <div class="cell white" id="cell_4_4"  data-x="4"  data-y="4"></div>
      <div class="cell black" id="cell_5_4"  data-x="5"  data-y="4"></div>
      <div class="cell white" id="cell_6_4"  data-x="6"  data-y="4"></div>
      <div class="cell black" id="cell_7_4"  data-x="7"  data-y="4"></div>
      <div class="cell white" id="cell_8_4"  data-x="8"  data-y="4"></div>
      <div class="cell black" id="cell_9_4"  data-x="9"  data-y="4"></div>
      <div class="cell white" id="cell_10_4" data-x="10" data-y="4"></div>

    <!-- 3th -->
      <div class="cell white" id="cell_1_3"  data-x="1"  data-y="3"></div>
      <div class="cell black" id="cell_2_3"  data-x="2"  data-y="3"></div>
      <div class="cell white" id="cell_3_3"  data-x="3"  data-y="3"></div>
      <div class="cell black" id="cell_4_3"  data-x="4"  data-y="3"></div>
      <div class="cell white" id="cell_5_3"  data-x="5"  data-y="3"></div>
      <div class="cell black" id="cell_6_3"  data-x="6"  data-y="3"></div>
      <div class="cell white" id="cell_7_3"  data-x="7"  data-y="3"></div>
      <div class="cell black" id="cell_8_3"  data-x="8"  data-y="3"></div>
      <div class="cell white" id="cell_9_3"  data-x="9"  data-y="3"></div>
      <div class="cell black" id="cell_10_3" data-x="10" data-y="3"></div>

    <!-- 2nd -->
      <div class="cell black" id="cell_1_2"  data-x="1"  data-y="2"></div>
      <div class="cell white" id="cell_2_2"  data-x="2"  data-y="2"></div>
      <div class="cell black" id="cell_3_2"  data-x="3"  data-y="2"></div>
      <div class="cell white" id="cell_4_2"  data-x="4"  data-y="2"></div>
      <div class="cell black" id="cell_5_2"  data-x="5"  data-y="2"></div>
      <div class="cell white" id="cell_6_2"  data-x="6"  data-y="2"></div>
      <div class="cell black" id="cell_7_2"  data-x="7"  data-y="2"></div>
      <div class="cell white" id="cell_8_2"  data-x="8"  data-y="2"></div>
      <div class="cell black" id="cell_9_2"  data-x="9"  data-y="2"></div>
      <div class="cell white" id="cell_10_2" data-x="10" data-y="2"></div>

    <!-- 1st -->
      <div class="cell white" id="cell_1_1"  data-x="1"  data-y="1"></div>
      <div class="cell black" id="cell_2_1"  data-x="2"  data-y="1"></div>
      <div class="cell white" id="cell_3_1"  data-x="3"  data-y="1"></div>
      <div class="cell black" id="cell_4_1"  data-x="4"  data-y="1"></div>
      <div class="cell white" id="cell_5_1"  data-x="5"  data-y="1"></div>
      <div class="cell black" id="cell_6_1"  data-x="6"  data-y="1"></div>
      <div class="cell white" id="cell_7_1"  data-x="7"  data-y="1"></div>
      <div class="cell black" id="cell_8_1"  data-x="8"  data-y="1"></div>
      <div class="cell white" id="cell_9_1"  data-x="9"  data-y="1"></div>
      <div class="cell black" id="cell_10_1" data-x="10" data-y="1"></div>
  </div>

  <div class="dashboard">
    <button onClick="showKnight()">Show Knight</button><br>
    <button onClick="startTour()">Start Tour</button><br>
    <button onClick="reset()">Reset</button><br><br>
  </div>


  <script type="text/javascript">
    var Knight = '&#9822';
    var Delay  = 500;
    var TourGuide = [];

    var XBoundary = 10;
    var YBoundary = 10;


    var getAvailableSteps = function(cell, visited) {
      var steps = [];

      var startCellElement = document.getElementById(cell);
      var startX = Number(startCellElement.getAttribute("data-x"));
      var startY = Number(startCellElement.getAttribute("data-y"));

      if( (startX+1) <= XBoundary && (startY-2) >= 1 ) {
        var cellId = 'cell_' + (startX+1) + '_' + (startY-2);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX+1) <= XBoundary && (startY+2) <= YBoundary ) {
        var cellId = 'cell_' + (startX+1) + '_' + (startY+2);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX-1) >= 1 && (startY-2) >= 1 ) {
        var cellId = 'cell_' + (startX-1) + '_' + (startY-2);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX-1) >= 1 && (startY+2) <= YBoundary ) {
        var cellId = 'cell_' + (startX-1) + '_' + (startY+2);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }


      if( (startX+2) <= XBoundary && (startY-1) >= 1 ) {
        var cellId = 'cell_' + (startX+2) + '_' + (startY-1);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX+2) <= XBoundary && (startY+1) <= YBoundary ) {
        var cellId = 'cell_' + (startX+2) + '_' + (startY+1);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX-2) >= 1 && (startY-1) >= 1 ) {
        var cellId = 'cell_' + (startX-2) + '_' + (startY-1);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      if( (startX-2) >= 1 && (startY+1) <= YBoundary ) {
        var cellId = 'cell_' + (startX-2) + '_' + (startY+1);
        if( visited.indexOf(cellId) < 0 ) steps.push(cellId);
      }

      return steps;
    };

    var recursiveTourGuide = function (startCell, endCell) {
    };

    var registerTourGuide = function () {
      TourGuide = ['cell_1_1', 'cell_2_3', 'cell_4_4', 'cell_5_6', 'cell_7_7', 'cell_8_9', 'cell_10_10'];
      // recursiveTourGuide(TourGuide, 'cell_1_1');

      console.log('TourGuide', TourGuide);
    };

    var showKnight = function() {
      var startCell = 'cell_1_1';
      document.getElementById(startCell).innerHTML = Knight;
      document.getElementById(startCell).setAttribute("data-current", "true"); 
    };

    var reset = function() {
      Step = 1;
      var cells = document.getElementsByClassName('cell');
      for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].setAttribute("data-current", "false");
      }
    };

    var nextStep = function(step) {
      setTimeout(function(){
        if(TourGuide[step+1]) {
          document.getElementById(TourGuide[step]).setAttribute('data-current', 'false');
          document.getElementById(TourGuide[step]).innerHTML = step;

          document.getElementById(TourGuide[step+1]).setAttribute('data-current', 'true');
          document.getElementById(TourGuide[step+1]).innerHTML = Knight;
        }
      }, Delay*step);
    };

    var startTour = function() {
      registerTourGuide();

      var steps = TourGuide;

      for(var step=0; step<steps.length; step++)
        nextStep(step); 
    };
  </script>
</body>
</html>
