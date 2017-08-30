


//   BOARD    // 
// ========== //

function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;
	this.listMoles = [];

	this.drawGrid();
	this.generateMoles();
	this.drawMoles();
}


Board.prototype.drawGrid = function () {
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


Board.prototype.generateMoles = function () {
	for(var i = 0; i < this.randomNumberOfMoles() ; i++){
		this.listMoles.push(new Mole(this.randomPosition()));
	}
	console.log(this.listMoles);
}


Board.prototype.randomNumberOfMoles = function () {
	return Math.floor(Math.random() * (5 - 1) + 1);
}


Board.prototype.randomPosition = function () {
	var x = Math.floor(Math.random()*this.columns);
	var y = Math.floor(Math.random()*this.rows);
	var hasMole = $('.cell[row="'+ y +'"][column="'+ x +'"]').hasClass('mole');
	console.log(hasMole);
	if( hasMole ) {
		this.randomPosition(); //Keep calling since it was false.To check if you have a mole on the position
	}	
	return {x, y};
}


Board.prototype.drawMoles = function () {

	console.log(this.listMoles);

	this.listMoles.forEach (function (mole) {
		$('.cell[row="'+ mole.position.y +'"][column="'+ mole.position.x +'"]').addClass('mole');
	});
}




//   $MOLES    // 
// ========== //


function Mole (position){
	this.position = {
		x: position.x,
		y: position.y
	};
	this.time = 5000;
}
 



// INITIALIZE // 
// ========== //

var board;

$(document).ready(function() {
 
  board = new Board(3,5);

});