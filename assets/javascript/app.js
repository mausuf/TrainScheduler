var now = moment(); //now 
var start = moment("03:05 AM", "hh:mm A"); // today at 3AM
var frequency = 10;

var minutesElapsed = now.diff(start, "minutes");

var stopsElapsed = Math.floor(minutesElapsed / frequency);

var nextStopMinutes = (stopsElapsed + 1) * frequency;

start.add(nextStopMinutes, "minutes");

console.log(start.format("hh:mm A"));