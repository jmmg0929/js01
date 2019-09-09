//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
// Skill learned from https://www.w3schools.com/jsref/jsref_getday.asp //
var day = new Date();
var week = new Array(7);
week[0] =  "Sunday";
week[1] = "Monday";
week[2] = "Tuesday";
week[3] = "Wednesday";
week[4] = "Thursday";
week[5] = "Friday";
week[6] = "Saturday";
var today = week[day.getDay()];
document.getElementById("today").innerHTML = "Today is "+ today;

//Skill learned from https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss/18229123 //
var time = new Date();
var now = time.toLocaleTimeString();

document.getElementById("time").innerHTML = "Current Time : " + now;

// 2
var dashes = new Date();
var dd = String(dashes.getDate()).padStart(2, '0');
var mm = String(dashes.getMonth() + 1).padStart(2, '0');
var yyyy = dashes.getFullYear();

dashes = mm + '-' + dd + '-' + yyyy;
document.getElementById('dashes').innerHTML = dashes;

var backslash = new Date();
var dd = String(backslash.getDate()).padStart(2, '0');
var mm = String(backslash.getMonth() + 1).padStart(2, '0');
var yyyy = backslash.getFullYear();

backslash = mm + '/' + dd + '/' + yyyy;
document.getElementById('backslash').innerHTML = backslash;

var british = new Date();
var dd = String(british.getDate()).padStart(2, '0');
var mm = String(british.getMonth() + 1).padStart(2, '0');
var yyyy = british.getFullYear();

british = dd + '/' + mm + '/' + yyyy;
document.getElementById('british').innerHTML = british;
//3 Do not do?

//4
(function() {
  'use strict'
  console.log("main.js loaded");
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200,200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
  tool.onMouseDown = function(event){
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor ='green';
  };
  paper.view.draw();
}())
