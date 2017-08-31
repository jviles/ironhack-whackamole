


//   BOARD    // 
// ========== //

function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;
	this.listMoles = [];
	this.initialScore=0;

	this.drawGrid();
	this.generateMoles();
	this.drawMoles();
	this.clickOnCell();
	
}

//DRAWING THE GRID ON THE WEB DOCUMENT

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

//CREATING A RANDOM MOLES CALLING THE OBJECT AND INCLUDING A RANDOM POSITION
Board.prototype.generateMoles = function () {
	for(var i = 0; i < this.randomNumberOfMoles() ; i++){
		this.listMoles.push(new Mole(this.randomPosition()));
	}
	//console.log(this.listMoles);
}


// CREATING HOW MUCH RANDOM POSITION. AS A DEFAULT WE PUT IT 5
Board.prototype.randomNumberOfMoles = function () {
	return Math.floor(Math.random() * (5 - 1) + 1);
}

// PROVING A RANDOM POSITION TO A MOLE
Board.prototype.randomPosition = function () {
	var x = Math.floor(Math.random()*this.columns);
	var y = Math.floor(Math.random()*this.rows);
	var hasMole = $('.cell[row="'+ y +'"][column="'+ x +'"]').hasClass('mole');// CHECKIN IF YOU HAVE A MOLE ON THE RANDOM POSITION
	if( hasMole ) { // TO CHECK 
		this.randomPosition(); //Keep calling since it was false.To check if you have a mole on the position and putting on array listMoles
	}	
	return {x, y};
}


Board.prototype.drawMoles = function () {

	console.log(this.listMoles);

	this.listMoles.forEach (function (mole) {
		$('.cell[row="'+ mole.position.y +'"][column="'+ mole.position.x +'"]').addClass('mole');
	});//here we are searching the listMoles and adding a new class in order to change the image background
};

Board.prototype.clickOnCell = function () {

$('.cell').click (function (){//quina diferencia hi ha amb $('cell').on('click' function ()){}
	
	console.log ("click works");

	if($(this).hasClass ('mole')) {
		var score =0;
		score+10;
		console.log(score);
		console.log(this.score);
	$(this).removeClass ('mole');	
	

	//console.log(this.listMoles);	
	}

	
	//console.log(this.listMoles);
});

/*Board.prototype.molesScored = function () {
	var totalScore=0;
	return totalScore+=10;
	console.log(totalScore);

}*/

}


//   $MOLES    // 
// ========== //


function Mole (position){
	this.position = {
		x: position.x,
		y: position.y,
	};
	this.time = 5000;
	this.score = 10;
}
 



// INITIALIZE // 
// ========== //

var board;

$(document).ready(function() {
 
  board = new Board(3,5);

});