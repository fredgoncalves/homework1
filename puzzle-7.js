function whiteMove(){
  while (getColor() != "red"){
  	down();
  }
  right();
  right();
  while (getColor() != "red"){
  	up();
  }
  right();
	right();
}

function finalMove(){
  while (getColor() != "red"){
  	down();
  }
  right();
}

whiteMove();
whiteMove();
finalMove();
