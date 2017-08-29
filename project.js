
function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;

	this.generateGrid();
}

Board.prototype.generateGrid = function(){
	console.log("generate grid running");
	for(var y = 0; y < this.rows; y++){
		for(var x = 0; x< this.columns; x++){
			$("#board").append($("<div>")
				.addClass("cell")
				.attr("row",y)
				.attr("column",x)
			);
		}
	}
}

function Mole (){


	this.numbermoles();
}
 Mole.prototype.numbermoles = function (){

 	var nmoles = Math.floor(Math.random() * 5)
 	console.log (nmoles);
};



var board;
var mole;

$(document).ready(function() {
 
  console.log("jquery running");
  board = new Board(4,4);
  mole = new Mole()
});