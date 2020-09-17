class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
 // Drag the mouse across the page
// to change its value

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
// Click within the image to change
// the value of the rectangle

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
//level two
block8 = new Block (330,235,30,40);
block9 = new block (360,235,30,40);
block10 = new block (390,235,30,40);
block11 = new block (420,235,30,40);
block12 = new block (450,235,30,40);
//level three 
block13 = new block (360,195,30,40);
block14 = new block (390,195,30,40);
block14 = new block (420,195,30,40);
//top 
block16 = new block (390,155,30,40);