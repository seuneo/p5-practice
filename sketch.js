function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  
  if(mouseIsPressed === true){
    fill(0);
    
    //circle(mouseX, mouseY, 100);
    line(mouseX, mouseY, mouseX, mouseY);
    strokeWeight(10);
    stroke('magenta')
  
  }



 
}
