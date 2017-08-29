
function Board (rows,columns){
	this.rows    = rows;
	this.columns = columns;

	this.generateGrid();
}

Board.prototype.generateGrid = function(){
	console.log("generate grid running");
	$("#board").append("<section>hjlk</section>");
	for(x=0,x<row,x++){
		for(y=0, y<columns,y++){
			$("#board").append("<div>cell</div>");
		}
	}
}














var board;

$(document).ready(function() {
 
  console.log("jquery running");
  board = new Board(4,4);
});