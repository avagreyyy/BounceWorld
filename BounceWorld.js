//create an empty array called balls
let balls = [];
let platforms = [];
let sliders = [];
let winners = [];
let led = "YOU DIED!";
let yay = "You survived!";

//create a variable to hold your Ball
let me;
let oneplatform;
let twoplatform;
let threeplatform;
let oneslider;
let twoslider;
let threeslider;
let fourslider;
let fiveslider;
let onewinner;

let platlength = 40;
let hitslider = false;
let hitwinner = false;
let winlength = 40;
let slidelength = 40;





function setup() {
  createCanvas(windowWidth, windowHeight);
  me = new Ball(80, 350, 5, .09);
  print(hitslider);

for (let i= 0; i<1; i++){
  let p = new Platform(random(0,50),random(550,600));
  platforms.push(p);
  //print(platforms);

    }


for (let i= 0; i<1; i++){
      let p = new Platform(random(270,320),random(550,600));
      platforms.push(p);
      //print(platforms);

        }

for (let i= 0; i<1; i++){
        let p = new Platform(random(540,590),random(550,600));
        platforms.push(p);
        //print(platforms);

        }


  for (let i= 0; i<1; i++){
        let p = new Platform(random(810,860),random(550,600));
        platforms.push(p);
        //print(platforms);

        }

  for (let i= 0; i<1; i++){
        let p = new Platform(random(1080,1130),random(550,600));
        platforms.push(p);
        //print(platforms);

      }


      for (let i= 0; i<1; i++){
            let p = new Platform(random(1350,1400),random(550,600));
            platforms.push(p);
            //print(platforms);
          }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(1620,1670),random(550,600));
            platforms.push(p);
            //print(platforms);
          }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(1820,1860),random(550,600));
            platforms.push(p);
            //print(platforms);
        }

      for (let i= 0; i<1; i++){
              let p = new Platform(random(2080,2130),random(550,600));
              platforms.push(p);
              //print(platforms);

            }

      for (let i= 0; i<1; i++){
                    let p = new Platform(random(2350,2400),random(550,600));
                    platforms.push(p);
                    //print(platforms);

                  }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(2720,2770),random(550,600));
            platforms.push(p);
            //print(platforms);
              }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(3100,3150),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(3570,3620),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(4040,4090),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(4710,4760),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(5380,5430),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(6050,6100),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(6720,6770),random(550,600));
            platforms.push(p);
            //print(platforms);
            }
      for (let i= 0; i<25; i++){
            let s = new slider(random(3000,20000),random(400,550));
            sliders.push(s);
            //print(sliders);
      }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(7000,7050),random(550,600));
          platforms.push(p);
          //print(platforms);
            }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(7350,7400),random(550,600));
          platforms.push(p);
          //print(platforms);
      }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(7700,7750),random(550,600));
          platforms.push(p);
          //print(platforms);
            }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(7950,8000),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(8200,8250),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(8450,8500),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(8650,8700),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(8900,8950),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
          let p = new Platform(random(9250,9300),random(550,600));
          platforms.push(p);
          //print(platforms);
          }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(9600,9650),random(550,600));
            platforms.push(p);
            //print(platforms);
          }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(9950,10000),random(550,600));
            platforms.push(p);
            //print(platforms);
            }

    for (let i= 0; i<1; i++){
      let p = new winner(random(10200,10300),random(550,600));
      winners.push(p);
      //print(platforms);
      }
}


function draw(){
	background(0,222,255);
  fill("yellow");
  stroke("yellow");
  arc(1250, 0, 200, 200, 0, PI + QUARTER_PI, OPEN);
  fill(13,110,0);
  stroke(13,110,0);
  rect(0, 670, 10000, 55);
  fill("black");
  stroke("black");
  rect(100, 640, 10, 20);
  rect(200, 630, 15, 30);
  rect(300, 630, 20, 30);
  rect(400, 630, 20, 30);
   rect(500, 630, 30, 30);
   rect(600, 600, 15, 60);
   rect(700, 585, 15, 75);
   rect(800, 590, 30, 70);
   rect(900, 625, 10, 35);
   rect(450, 640, 15, 20);
   rect(550, 610, 10, 50);
   rect(240, 630, 30, 30);
   rect(260, 610, 15, 50);

if(hitslider==false){
  me.drawMe();
  me.moveMe();
  me.bounceBall();
  me.crashslider();
  me.collidewinner();


  // oneplatform.drawPlatform();
  // twoplatform.drawPlatform();
  // threeplatform.drawPlatform();

  for (let i = 0; i<platforms.length; i++){
    platforms[i].drawPlatform();
    platforms[i].movePlatform();


  }
  for (let i = 0; i<sliders.length; i++){
    sliders[i].drawslider();
    sliders[i].moveSlider();

  }
  for (let i = 0; i<winners.length; i++){
    winners[i].drawwinner();
    winners[i].moveWinner();

  }

}

 if(hitslider==true){
 background("red");
 fill("black");
 textSize(200);
 textFont('Georgia');
 text(led, 120,300);

}

if(hitwinner==true){
background("green");
fill("white");
textSize(100);
textFont('Georgia');
text(yay,100,200);

}
//make one Ball called me


  // me.drawMe();
  // me.moveMe();
  // me.bounceBall();
  //
  //
  // // oneplatform.drawPlatform();
  // // twoplatform.drawPlatform();
  // // threeplatform.drawPlatform();
  //
  // for (let i = 0; i<platforms.length; i++){
  //   platforms[i].drawPlatform();
  //   platforms[i].movePlatform();
  //
  //
  // }
  // for (let i = 0; i<sliders.length; i++){
  //   sliders[i].drawslider();
  //   sliders[i].moveSlider();
  //
  // }

}
// for (let i = 0; i < balls.length; i++) {
//         balls[i].bounceBall();
//
//
//   }

// make the paddle and attach it to the mouse
// function paddle(){
//   stroke("black");
//   strokeWeight(10);
//   line(mouseX-20,mouseY,mouseX+20,mouseY);
// }

//Ball class
class Ball {

	constructor(x,y, speed, drop){ //every Ball needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.drop = drop;
	}

	drawMe(){  // draw the moving ball
    		stroke("black");
        strokeWeight(3);
    		fill("black");
		    ellipse(this.x,this.y,10,10);

	}



	moveMe(){

  	// this.y = this.y+this.drop;

    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }
  }


//  if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  bounceBall(){

    for (let i = 0; i<platforms.length; i++){
    //  if (this.x >= platforms[i].x && this.x <= platforms[i].x+platlength && …

          if (this.x >= platforms[i].x-20 && this.x <= platforms[i].x+platlength && this.y >= platforms[i].y-5 && this.y <= platforms[i].y+5){
            this.drop =-this.drop;
            this.y = this.y+this.drop;
            print("hit platform "+i+" and switched direction to "+this.drop);
          }

         else if (this.y <= 300 ){
               this.drop =-this.drop;
               this.y = this.y+this.drop;
          }
        else {
          	this.y = this.y+this.drop;

    }
  }
  }
  crashslider(){

    for (let i = 0; i<sliders.length; i++){
    //  if (this.x >= platforms[i].x && this.x <= platforms[i].x+platlength && …

          if (this.x >= sliders[i].x-20 && this.x <= sliders[i].x+slidelength && this.y >= sliders[i].y-5 && this.y <= sliders[i].y+5){
          hitslider = true
          }

         else if (this.y <= 300 ){
               this.drop =-this.drop;
               this.y = this.y+this.drop;
          }
        else {
          	this.y = this.y+this.drop;

    }
  }
  }
  collidewinner(){

    for (let i = 0; i<winners.length; i++){
    //  if (this.x >= platforms[i].x && this.x <= platforms[i].x+platlength && …

          if (this.x >= winners[i].x-20 && this.x <= winners[i].x+winlength && this.y >= winners[i].y-5 && this.y <= winners[i].y+5){
          hitwinner = true
          }

         else if (this.y <= 300 ){
               this.drop =-this.drop;
               this.y = this.y+this.drop;
          }
        else {
            this.y = this.y+this.drop;

    }
  }
  }

}

  class Platform {
    constructor(x,y){ //every Ball needs an x value, a y value, and a speed
  		    this.x = x;
      		this.y = y;

        }

   drawPlatform (){
    stroke("white");
    strokeWeight(10);
    line(this.x, this.y,this.x+platlength, this.y);
  }

  movePlatform(){
    this.x=this.x-3
  }


}
  class slider {
    constructor(x,y){ //every Ball needs an x value, a y value, and a speed
  		    this.x = x;
      		this.y = y;
        }

   drawslider (){
    stroke("red");
    strokeWeight(10);
    line(this.x, this.y,this.x+40, this.y);
  }

  moveSlider(){
    this.x=this.x-6
  }
}

class winner {
  constructor(x,y){ //every Ball needs an x value, a y value, and a speed
        this.x = x;
        this.y = y;
      }

 drawwinner (){
  stroke("green");
  strokeWeight(10);
  line(this.x, this.y,this.x+40, this.y);
}

moveWinner(){
  this.x=this.x-3
}
}
