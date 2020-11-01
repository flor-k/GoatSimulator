let boton1;
let tuvieja = false;

function setup() {
  createCanvas(500, 500);
  boton1 = new boton(350, 100, 100, 50, "tutorial");
  boton2 = new boton(350, 200, 100, 50, "tutorial2");
}

class boton {
  
  constructor(x, y, w, h, text)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
 }
 
 display(){
    fill(0, 234, 255);
    rect(this.x, this.y, this.w, this.h, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.text, this.x+10, this.y+this.h/4);
    
    if(tuvieja == true){
      fill(0, 0, 0);
      textSize(19);
      text("tuvieja", 200, 200);
    }
 }
 
 presion(){
   if(mouseX >= this.x && mouseX <= this.x+this.w &&
      mouseY >= this.y && mouseY <= this.y+this.h) {
      tuvieja = true; 
      }
 }
 
}

function mousePressed() {
  boton1.presion();
  boton2.presion();
  }
  
  
 function mouseReleased() {
   tuvieja = false;
 }

function draw() {
 background (200);
 boton1.display();
 boton2.display();
 
}
