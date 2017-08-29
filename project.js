
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

Board.prototype.generateRandomMoles = function (nmoles){
	console.log("generate a randomMole");
	for (i=0;i<nmoles;i++){
		var yy= Math.floor(Math.random()*this.rows.length);
		var xx= Math.floor(Math.random()*this.columns.length);
		console.log(yy);
		console.log(xx);
		$(".cell:contains(yy)") && $(".cell:contains(xx)".css('background-color', 'blue');

	}
	
	console.log(yy);
	console.log(xx);


		}
	}
}

function Mole (){


	this.numbermoles();
}
 Mole.prototype.numbermoles = function (){

 	var nmoles = Math.floor(Math.random() * 5)
 	console.log ("numero de topos aleatorios "+nmoles);
};





var board;
var mole;

$(document).ready(function() {
 
  console.log("jquery running");
  board = new Board(4,4);
  mole = new Mole()
});