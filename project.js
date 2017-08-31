


//   BOARD    // 
// ========== //

function Board (rows,columns){
	this.rows                = rows;
	this.columns             = columns;
	this.listMoles           = [];
	this.initialScore        = 0;
	this.totalMoles          = 0;
	this.canMoreMolesBeAdded = true;

	this.drawGrid();
	this.massMoleGeneration();


	//this.cleaningMoles();
	this.clickOnCell();
	this.start();
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
Board.prototype.massMoleGeneration = function () {
	this.canMoreMolesBeAdded = false;

	var max = this.randomNumber(1, 3)

	while(max > 4 && max >= this.rows*this.columns-this.totalMoles) {
		max = this.randomNumber(1, 3);
	}
	console.log('right MAX', max);
	this.generateMoles(max);

}

Board.prototype.generateMoles = function(max) {
	var numberOfMoles = this.randomNumber(1, max);
	this.totalMoles += numberOfMoles;

	var position
	for(var i = 0; i < numberOfMoles; i++){
		position = this.randomPosition();
		while(!position) {
			position = this.randomPosition();
		}
		this.listMoles.push(new Mole(position));
	}
	console.log('totalMoles', this.totalMoles);
	this.canMoreMolesBeAdded = true;
	setTimeout(this.drawMoles.bind(this), this.randomNumber(1,4)*1000);
}


// CREATING HOW MUCH RANDOM POSITION. AS A DEFAULT WE PUT IT 5
Board.prototype.randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// PROVING A RANDOM POSITION TO A MOLE
Board.prototype.randomPosition = function () {
	var x = Math.floor(Math.random()*this.columns);
	var y = Math.floor(Math.random()*this.rows);
	console.log(x);
	console.log(y);
	var hasMole = $('.cell[row="'+ y +'"][column="'+ x +'"]').hasClass('mole');// CHECKIN IF YOU HAVE A MOLE ON THE RANDOM POSITION
	console.log(hasMole);
	if( hasMole ) { // TO CHECK 
		return false;
	}	

	return {x, y};
}


Board.prototype.drawMoles = function () {

	console.log(this.listMoles);

	this.listMoles.forEach (function (mole, index) {
		if(mole !== null){
			$('.cell[row="'+ mole.position.y +'"][column="'+ mole.position.x +'"]')
			.addClass('mole')
			.attr("mole-index", index);
		}
	});//here we are searching the listMoles and adding a new class in order to change the image background	
};

Board.prototype.clickOnCell = function () {
	var that = this;
	$('.cell').on('click', function (){

		if( $(this).hasClass('mole') ) {
			console.log($(this));
			that.removeMoleFromArray($(this).attr('mole-index'));
			$(this).removeAttr('mole-index').removeClass('mole');
			that.totalMoles--;

		}
	});
};


Board.prototype.removeMoleFromArray = function(index) {
	this.listMoles[index] = null;
	console.log('this.listMoles after remove', this.listMoles);
}


Board.prototype.cleaningMoles = function () {

	this.listMoles.forEach (function (mole){
	$('.cell[row="'+ mole.position.y +'"][column="'+ mole.position.x +'"]').removeClass('mole');
	});
};


Board.prototype.update = function () {
	console.log('Updating ...')
	console.log('totalMoles', this.totalMoles);
	console.log('this.columns*this.rows', this.columns*this.rows);

	if (this.canMoreMolesBeAdded && this.columns*this.rows > this.totalMoles) {
		this.massMoleGeneration();
	}
}

Board.prototype.start = function () {
	if(!this.intervalId) {
		this.intervalId = setInterval(this.update.bind(this),2000);
	}
}




Board.prototype.molesScored = function (value) {

	  	this.initialScore += value;
};



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
 
  board = new Board(3,3);

});