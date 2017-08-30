
function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;

	
	this.generateGrid();
	this.generateRandomMoles();
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

Board.prototype.generateRandomMoles = function (){
	
	console.log("generate a randomMole");

 	var nmoles = Math.floor(Math.random() * 5);
 	console.log ("numero de topos aleatorios "+nmoles);
 	if (nmoles===0){
 		nmoles=1;
 	}
 	console.log("abans del bucle for");

	for (var i = 0; i < nmoles; i++){

		console.log("despres del bucle for");

		var yy= Math.floor(Math.random()*this.rows);
		var xx= Math.floor(Math.random()*this.columns);
		console.log("noves columnes "+yy);
		console.log("noves files "+xx);
		$("#board>.cell").attr("row",yy).attr("column",xx)
			.css ("background-image","url('imagen/animal-158236_1280.png')")
			.css ("background-size", "150px")
			.css ("background-repeat","no-repeat")
			
			
			



	};
}

/*function Mole (){


	
}*/
 





var board;
/*var mole;*/

$(document).ready(function() {
 
  console.log("jquery running");
  board = new Board(3,5);
 /* mole = new Mole()*/
});