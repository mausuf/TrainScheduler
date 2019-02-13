// var now = moment(); //now 
// var start = moment("03:05 AM", "hh:mm A"); // today at 3AM
// var frequency = 10;

// var minutesElapsed = now.diff(start, "minutes");

// var stopsElapsed = Math.floor(minutesElapsed / frequency);

// var nextStopMinutes = (stopsElapsed + 1) * frequency;

// start.add(nextStopMinutes, "minutes");

// console.log(start.format("hh:mm A"));




/* <body>

<div id="empty-div"></div>

<script type="text/javascript">
  var targetDiv = document.getElementById("empty-div");
  targetDiv.textContent = "Hello friends!";
  var newDiv = document.createElement("div");
  newDiv.textContent = "A pleasure to meet you!";
  targetDiv.appendChild(newDiv);
  // We then apply that CSS to our newDiv.
  newDiv.setAttribute("class", "fancy");
</script>

</body> */


var targetTableBody = document.getElementById("tableBody");
targetTableBody.textContext = "Hello";
var newDiv = document.createElement("div");
newDiv.textContent = "A pleasure to meet you!";