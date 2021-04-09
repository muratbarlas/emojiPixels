var capture;
var list = []
var test = true;
var saved = false;
function preload() {
  capture = loadImage("original_images/galata_tower.png");
}




function setup() {
	createCanvas(1380, 700);
	background(100);
	capture.loadPixels();
  
  for (var y = 0; y < capture.height; y +=5) {
		for (var x = 0; x < capture.width; x +=6){			//var  i = y * capture.width + (capture.width-x-1);	
			var  i = y * capture.width + (capture.width-x-1);	
			var darkness = (255 - capture.pixels[i * 4]) / 255;
			//calcutes the position for the new shapes to appear
			var x_= x * width / capture.width;
			var y_ = y * height / capture.height;
			list.push([x_,y_,darkness]);
			//console.log(darkness)
		}
  }
}
  
var darkness = 0
var x_=0
var y_=0
var val = 0;

function draw(){
  textSize(7);
  for (var i=0; i<list.length;i++){
      x_ = list[i][0];
      y_ = list[i][1];
      darkness = list[i][2];
      
      if (darkness > 0.85){
        text("👩🏻‍🔬", x_, y_);
      }
      else if (darkness > 0.75) {
        text("👩‍👧‍👦", x_, y_);
      }else if (darkness > 0.65) {
        text("‍🧕🏼", x_, y_);
      }
      else if (darkness > 0.55) {
        text("💄", x_, y_);
      }
      else if (darkness > 0.45) {
        text("🌈", x_, y_);
      }
      else if (darkness > 0.35) {
        text("👩🏽‍🎓", x_, y_);
      }
      else if (darkness > 0.25){
        text("🤱🏼", x_, y_);
      }
      else if (darkness > 0.15){
        text("👰🏽", x_, y_);
      }
      else{
        text("🤰🏻", x_, y_);

      }
  } 
}


function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveForPrint("sketch.jpg", "A4", 1000);
  }
}


		
		