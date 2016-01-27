var counter;

  
function downMove(){
	counter = 0;
  while (counter<8){
  	down();
    counter++;
  }
  right();
  right();
}

function upMove(){
  counter = 0;
  while (counter<8){
  	up();
    counter++;
  }
  right();
  right();
}

downMove();
upMove();
downMove();
upMove();
downMove();
