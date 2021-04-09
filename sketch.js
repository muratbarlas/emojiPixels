//let pg;

var capture;
var list = []
var test = true;
var saved = false;
function preload() {
  capture = loadImage("test3.png");
}



let slider;
function setup() {
	slider = createSlider(1, 30, 5, 1);
  //slider.position(10, 10);
	createCanvas(1380, 700);
	background(100);
  //pixelDensity(1)
  //pg = createGraphics(1380, 700);
  //pg.background(32);
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
   //list = shuffle(list);
  

}
  
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);

var message = ""
var darkness = 0
var x_=0
var y_=0
var val = 0;

function draw(){
	//fill("black");
  //translate(0,50);

  
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
        push()
        //textSize(15);
        text("💄", x_, y_);
        pop()
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
      //else if (darkness > 0.10){
        //text("👩🏻‍🔬", x_, y_);
      //}
      else{
        push()
        //textSize(cos(val)*25);
        text("🤰🏻", x_, y_);
        //scale(cos(val))
        //val++;
        pop()

      }
      
    
  }
  

  
}


function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveForPrint("sketch.jpg", "A4", 1000);
    //pg.save("pg.png"); 
  }
}


		
		