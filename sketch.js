let spacing = 25;
let r = spacing/2;
let number; let divider;
let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);

  angleMode(DEGREES);
  number = createSlider(1, 10, 5);
  number.position(10,10);
  number.size(80);

  divider = createSlider(1, 10, 3, 0.5);
  divider.position(100,10);
  divider.size(80);
}

function draw() {
  background(220);

  let num = number.value();
  let d = divider.value();

  orbitControl();
  rotateX(-15);
  rotateY(angle);
  
  stroke(0);
  for(let i = 0; i < num; i++){ 
    for(let j = 0; j<num; j++){
      for(let k = 0; k<num; k++){
        push();
        let offset = -spacing * num/2 + spacing/2;
      let x = i*spacing + offset;
      let y = j*spacing + offset;
      let z = k*spacing + offset;

      let distance = sqrt(pow(x, 2) + pow(y,2) + pow(z,2))
      translate(x,y,z);
      normalMaterial();
      let sphereSize = spacing - distance/d;
      sphere(sphereSize);
      pop();
      }
      
    }
    
  }
angle+=0.1;
  stroke('red');

  sphere(num);
  

 
}
