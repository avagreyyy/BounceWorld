//create an empty array called balls
let balls = [];
let platforms = [];
let sliders = [];

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




function setup() {
  createCanvas(windowWidth, windowHeight);
  me = new Ball(80, 350, 5, .5);

for (let i= 0; i<1; i++){
  let p = new Platform(random(0,50),random(550,600));
  platforms.push(p);
  print(platforms);

    }
  for (let i= 0; i<1; i++){
       let s = new slider(random(150,170),random(550,600));
       sliders.push(s);
       print(sliders);

   }

for (let i= 0; i<1; i++){
      let p = new Platform(random(270,320),random(550,600));
      platforms.push(p);
      print(platforms);

        }
  for (let i= 0; i<1; i++){
      let s = new slider(random(420,440),random(550,600));
      sliders.push(s);
        print(sliders);

       }
for (let i= 0; i<1; i++){
        let p = new Platform(random(540,590),random(550,600));
        platforms.push(p);
        print(platforms);

        }
    for (let i= 0; i<1; i++){
           let s = new slider(random(690,710),random(550,600));
           sliders.push(s);
           print(sliders);

       }

  for (let i= 0; i<1; i++){
        let p = new Platform(random(810,860),random(550,600));
        platforms.push(p);
        print(platforms);

        }
  for (let i= 0; i<1; i++){
        let s = new slider(random(960,980),random(550,600));
        sliders.push(s);
        print(sliders);

       }
  for (let i= 0; i<1; i++){
        let p = new Platform(random(1080,1130),random(550,600));
        platforms.push(p);
        print(platforms);

      }
      for (let i= 0; i<1; i++){
         let s = new slider(random(1230,1250),random(550,600));
         sliders.push(s);
         print(sliders);

     }

      for (let i= 0; i<1; i++){
            let p = new Platform(random(1350,1400),random(550,600));
            platforms.push(p);
            print(platforms);
          }
          for (let i= 0; i<1; i++){
             let s = new slider(random(1500,1520),random(550,600));
             sliders.push(s);
             print(sliders);

         }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(1620,1670),random(550,600));
            platforms.push(p);
            print(platforms);
          }
          for (let i= 0; i<1; i++){
             let s = new slider(random(1770,1720),random(550,600));
             sliders.push(s);
             print(sliders);

         }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(1820,1860),random(550,600));
            platforms.push(p);
            print(platforms);
        }
      for (let i= 0; i<1; i++){
           let s = new slider(random(1960,1980),random(550,600));
           sliders.push(s);
           print(sliders);

       }
      for (let i= 0; i<1; i++){
              let p = new Platform(random(2080,2130),random(550,600));
              platforms.push(p);
              print(platforms);

            }
        for (let i= 0; i<1; i++){
               let s = new slider(random(2230,2250),random(550,600));
               sliders.push(s);
               print(sliders);
            }

      for (let i= 0; i<1; i++){
                    let p = new Platform(random(2350,2400),random(550,600));
                    platforms.push(p);
                    print(platforms);

                  }
                  for (let i= 0; i<1; i++){
                     let s = new slider(random(2500,2520),random(550,600));
                     sliders.push(s);
                     print(sliders);
                  }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(2720,2770),random(550,600));
            platforms.push(p);
            print(platforms);
              }
              for (let i= 0; i<1; i++){
                 let s = new slider(random(2970,2990),random(550,600));
                 sliders.push(s);
                 print(sliders);
              }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(3100,3150),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(3350,3370),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(3570,3620),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(3820,3840),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(4040,4090),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(4390,4410),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(4710,4760),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(5060,5080),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(5380,5430),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(5730,5750),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(6050,6100),random(550,600));
            platforms.push(p);
            print(platforms);
            }
            for (let i= 0; i<1; i++){
               let s = new slider(random(6400,6420),random(550,600));
               sliders.push(s);
               print(sliders);
            }
      for (let i= 0; i<1; i++){
            let p = new Platform(random(6720,6770),random(550,600));
            platforms.push(p);
            print(platforms);
            }





}

function draw(){
	background(220);

//make one Ball called me


  me.drawMe();
  me.moveMe();
  me.bounceBall();


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
    		stroke("blue");
        strokeWeight(3);
    		fill("blue");
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
          if (this.x >= platforms[i].x-20 && this.x <= platforms[i].x+20 && this.y >= platforms[i].y-5 && this.y <= platforms[i].y+5){
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

}

  class Platform {
    constructor(x,y){ //every Ball needs an x value, a y value, and a speed
  		    this.x = x;
      		this.y = y;
        }

   drawPlatform (){
    stroke("black");
    strokeWeight(10);
    line(this.x, this.y,this.x+40, this.y);
  }

  movePlatform(){
    this.x=this.x-1
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
    this.x=this.x-1
  }


}
