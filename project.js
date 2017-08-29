
function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;
}

Board.prototype.generateGrid = function(){
	console.log("generate grid running");
}














var board;

$(document).ready(function() {
 
  console.log("jquery running");
  board = new Board(4,4);
});