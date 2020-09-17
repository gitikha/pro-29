//polygon holdernwith slings
polygon = Bodies,circle(50,200,20);
world.add (world,polygon);

slingshot = new slingshot(this.polygon,{x:100,y:200});
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0);
}