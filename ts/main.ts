/// <reference path="Graph.ts" />
/*global $:false */


var canvas: any = document.getElementById("graph");
canvas.width = 800;
canvas.height = 800;
var graph = new Graph(canvas, -10, 10, -10, 10);
