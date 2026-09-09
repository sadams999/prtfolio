//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let startButton;
let a1Button;
let a2Button;
let a3Button;
let a4Button;
let henchButton;
let goButton;
let secButton;
let fsButton;
let endButton;
let bg1;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;
let bg8;
let isa
let alley;
let tavern;
let rain;
let train;
let satie;
var myFont;
let screen = 0;

/*preload files*/
function preload() {
  bg1Image = loadImage("assets/exposition.png");
  myFont = loadFont('VT323-Regular[1].ttf');
  bg2Image = loadImage("assets/choice_1__scrn1.png");
  bg3Image = loadImage("assets/screen2.png");
  bg4Image = loadImage("assets/screen_4.png");
  bg6Image = loadImage("assets/screen_6.png");
  bg5Image = loadImage("assets/screen_5.png");
  bg8Image = loadImage("assets/screen_8.png")
  isaImage = loadImage("assets/isabella.png");
  alleyMusic = loadSound("assets/alley.mp3");
  tavernMusic = loadSound("assets/tavern.mp3");
  rainMusic = loadSound("assets/rain.mp3");
  trainMusic = loadSound("assets/train_station.mp3");
  satieMusic = loadSound("assets/gymnopiede.mp3");
}

/* SETUP RUNS ONCE */
function setup() {
  textFont(myFont)
  createCanvas(800, 800);

  // Set up the home screen
  alleyMusic.play()
  alleyMusic.setVolume(0.1)
  background(bg1Image);
  stroke(255, 255, 255);
  strokeWeight(4);
  fill(0, 0, 0);
  rect(100, 300, 600, 200);
  noStroke(0);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(30);
  text(
    "You are an ex-bounty hunter on the \nsearch for your long-lost sister. \nA new-found friend, Isabella,  \naids you in your journey.", 400, 350);


  // Create buttons for all screens
  startButton = new Sprite(670, 470)
  a1Button = new Sprite(-200, -300, 300, 100)
  a2Button = new Sprite(-600, -300, 300, 100)
  a1Button = new Sprite(-200, -300, 300, 100)
  goButton = new Sprite(-600, -300, 300, 100)
  a3Button = new Sprite(-200, -300, 300, 100)
  a4Button = new Sprite(-600, -300, 300, 100)
  henchButton = new Sprite(-600, -300, 400, 470)
  fsButton = new Sprite(-600, -300, 400, 470)
  secButton = new Sprite(-600, -300, 400, 470)
  endButton = new Sprite(-600, -300, 400, 470)
  isa = new Sprite(isaImage, -100, -100, 100, 70)
}





/* DRAW LOOP REPEATS */
function draw() {



  // Display start button
  startButton.w = 50;
  startButton.h = 50;
  startButton.collider = "k";
  startButton.color = "black";
  startButton.textColor = color(255, 255, 255);
  startButton.text = ">>";
  // button properties
  a1Button.w = 200;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "black";
  a1Button.stroke = "white";
  a1Button.strokeWeight = (1);
  a1Button.textColor = color(255, 255, 255);
  a1Button.text = "Split up";

  a2Button.w = 200;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.stroke = "white";
  a2Button.color = "black";
  a2Button.stroke = "white";
  a2Button.strokeWeight = (1);
  a2Button.textColor = color(255, 255, 255);
  a2Button.text = "Stay Together";

  henchButton.w = 50;
  henchButton.h = 50;
  henchButton.collider = "k";
  henchButton.color = "black";
  henchButton.textColor = color(255, 255, 255);
  henchButton.textSize = 50;
  henchButton.text = ">>";

  goButton.w = 200;
  goButton.h = 50;
  goButton.collider = "k";
  goButton.color = "black";
  goButton.stroke = color(163, 18, 8);
  goButton.strokeWeight = (1);
  goButton.textColor = color(163, 18, 8);
  goButton.text = "Play Again";

  a3Button.w = 300;
  a3Button.h = 100;
  a3Button.collider = "k";
  a3Button.color = "black";
  a3Button.stroke = "white";
  a3Button.strokeWeight = (1);
  a3Button.textColor = color(255, 255, 255);
  a3Button.text = "Walk to the security \nroom for questions";

  a4Button.w = 250;
  a4Button.h = 50;
  a4Button.collider = "k";
  a4Button.color = "black";
  a4Button.stroke = "white";
  a4Button.strokeWeight = (1);
  a4Button.textColor = color(255, 255, 255);
  a4Button.text = "Board the Train";

  fsButton.w = 50;
  fsButton.h = 50;
  fsButton.collider = "k";
  fsButton.color = "black";
  fsButton.textColor = color(255, 255, 255);
  fsButton.textSize = 50;
  fsButton.text = ">>";

  secButton.w = 50;
  secButton.h = 50;
  secButton.collider = "k";
  secButton.color = "black";
  secButton.textColor = color(255, 255, 255);
  secButton.textSize = 50;
  secButton.text = ">>";

  endButton.w = 50;
  endButton.h = 50;
  endButton.collider = "k";
  endButton.color = "black";
  endButton.textColor = color(255, 255, 255);
  endButton.textSize = 50;
  endButton.text = ">>";






  // Add A1 button


  // Add A2 button


  // Check enter button
  if (startButton.mouse.presses()) {
    rainMusic.setVolume(0);
    tavernMusic.setVolume(0);
    trainMusic.setVolume(0);
    satieMusic.setVolume(0);
    print("pressed")
    textAlign(LEFT);
    background(bg2Image);
    stroke(255, 255, 255);
    strokeWeight(4);
    fill(0, 0, 0);
    rect(30, 30, 750, 200);
    noStroke(0);
    fill(255, 255, 255)
    text(
      "''The tracker brought us here and \nyour sister should be nearby. Should \nwe split up or stay together?''", 300, 100);
    text("Isabella", 100, 200);

    a1Button.pos = { x: 250, y: 300 };
    a2Button.pos = { x: 550, y: 300 };
    startButton.pos = { x: -200, y: -300 };
    isa.pos = { x: 140, y: 110 };

    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      rainMusic.setVolume(0);
      satieMusic.setVolume(0);
      trainMusic.setVolume(0);
      alleyMusic.setVolume(0);
      tavernMusic.play();
      tavernMusic.setVolume(0.1);
      print("Display screen 2");
      background(bg3Image);
      stroke(255, 255, 255);
      strokeWeight(4);
      fill(0, 0, 0);
      rect(25, 30, 750, 320);
      noStroke(0);
      fill(255, 255, 255)
      textSize(30);
      textAlign(CENTER);
      text(
        "You and isabella go in opposite directions. \nYou walk into in an underground tavern where \nyou run into an ex-partner, Xirena, \nwho is after the bounty on your head. \nYou try to run, but it’s too late. \nYou’re already surrounded by her \nhenchmen.", 410, 85);

      a1Button.pos = { x: -250, y: -300 };
      a2Button.pos = { x: -550, y: -300 };
      henchButton.pos = { x: 750, y: 750 };
      isa.pos = { x: -140, y: -110 };

      screen = 2;
    }


    /* screen 4 */
    else if (a2Button.mouse.presses()) {
      rainMusic.setVolume(0);
      tavernMusic.setVolume(0);
      satieMusic.setVolume(0);
      alleyMusic.setVolume(0);
      trainMusic.play();
      trainMusic.setVolume(0.3);
      print("Display screen 4");
      background(bg4Image);
      stroke(255, 255, 255);
      strokeWeight(4);
      fill(0, 0, 0);
      rect(25, 30, 750, 250);
      noStroke(0);
      fill(255, 255, 255)
      textSize(30);
      textAlign(CENTER);
      text(
        "You and isabella walk into a subway station \nhoping a city map will lead you to your destination.\n To your left you see a security room with a broken lock; \nto your right, a subway train approaching. \nIsabella calls your name.", 410, 85);

      henchButton.pos = { x: -750, y: -750 };
      a4Button.pos = { x: 200, y: 340 };
      a3Button.pos = { x: 600, y: 365 };
      a2Button.pos = { x: -600, y: -350 };
      a1Button.pos = { x: -250, y: -300 };
      isa.pos = { x: -140, y: -110 };

      screen = 4;
    }
  }

  if (screen == 2) {
    if (henchButton.mouse.presses()) {
      rainMusic.setVolume(0);
      satieMusic.setVolume(0);
      trainMusic.setVolume(0);
      alleyMusic.setVolume(0);
      tavernMusic.setVolume(0);
      print("good");
      background("black");
      textSize(60)
      fill(163, 18, 8)
      text("GAME OVER", 400, 330);
      fill(255, 255, 255)
      textSize(40)
      text("''Hello Old Friend...'", 400, 400)

      goButton.pos = { x: 400, y: 500 };
      henchButton.pos = { x: -750, y: -750 };

      screen = 3;
    }
  }

  if (screen == 3) {
    if (goButton.mouse.presses()) {
      print("ok");
      rainMusic.setVolume(0);
      tavernMusic.setVolume(0);
      trainMusic.setVolume(0);
      satieMusic.setVolume(0);
      showScreen0();
      screen = 3;
    }
  }

  if (screen == 4) {
    if (a4Button.mouse.presses()) {
      satieMusic.setVolume(0);
      tavernMusic.setVolume(0);
      trainMusic.setVolume(0);
      alleyMusic.setVolume(0);
      rainMusic.play();
      rainMusic.setVolume(0.05);
      print("a4")
      background(bg6Image);
      stroke(255, 255, 255);
      strokeWeight(4);
      fill(0, 0, 0);
      rect(25, 30, 750, 250);
      noStroke(0);
      fill(255, 255, 255)
      textSize(30);
      textAlign(CENTER);
      text(
        "You board the train and ride the line \nuntil the very last stop. From the station you stumble \nupon an abandoned garage. Though the area seems dead, \nyou hear desperate wimpers from behind \nthe garage door.", 410, 85);

      fsButton.pos = { x: 750, y: 750 };
      a4Button.pos = { x: -200, y: -340 };
      a3Button.pos = { x: -600, y: -365 };

      screen = 7;
    }

    else if (a3Button.mouse.presses()) {
      rainMusic.setVolume(0);
      tavernMusic.setVolume(0);
      alleyMusic.setVolume(0);
      satieMusic.setVolume(0);
      trainMusic.play();
      trainMusic.setVolume(0.05);
      print("strike");
      background(bg5Image)
      stroke(255, 255, 255);
      strokeWeight(4);
      fill(0, 0, 0);
      rect(25, 30, 750, 280);
      noStroke(0);
      fill(255, 255, 255)
      textSize(30);
      textAlign(CENTER);
      text(
        "You leave Isabella and open the iron door \nto the security room. To your surprise, you come face \nto face with a live camera feed of almost every street \nin the city. Before you can turn around, \ncold metal hits your head \nand everything goes black.", 410, 85);

      a4Button.pos = { x: -200, y: -340 };
      a3Button.pos = { x: -600, y: -365 };
      secButton.pos = { x: 750, y: 750 };

      screen = 5;
    }
  }

  if (screen == 5) {
    if (secButton.mouse.presses()) {
      rainMusic.setVolume(0);
      tavernMusic.setVolume(0);
      trainMusic.setVolume(0);
      satieMusic.setVolume(0);
      alleyMusic.setVolume(0);
      print("good");
      background("black");
      textSize(60)
      fill(163, 18, 8)
      text("GAME OVER", 400, 330);
      fill(255, 255, 255)
      textSize(40)
      text("''You knew too much...'", 400, 400)

      goButton.pos = { x: 400, y: 500 };
      secButton.pos = { x: -750, y: -750 };

      screen = 6;
    }
  }

  if (screen == 6) {
    if (goButton.mouse.presses()) {
      print("ok");
      showScreen0();
      screen = 0;
    }
  }

  if (screen == 7) {
    if (fsButton.mouse.presses()) {
      tavernMusic.setVolume(0);
      trainMusic.setVolume(0);
      rainMusic.setVolume(0);
      alleyMusic.setVolume(0);
      satieMusic.play();
      satieMusic.setVolume(0.3);
      print("goody")
      background(bg8Image)
      stroke(255, 255, 255);
      strokeWeight(4);
      fill(0, 0, 0);
      rect(25, 30, 750, 280);
      noStroke(0);
      fill(255, 255, 255)
      textSize(30);
      textAlign(CENTER);
      text(
        "With some force, you and Isabella both pry open \nthe garage door. Deep in the garage, you notice the \nsilhouette of a small woman. You look closer \nto see that it is your sister! \nShe is tied up, but unharmed. \nYou have found her at last.", 410, 85);

      fsButton.pos = { x: -750, y: -750 };
      endButton.pos = { x: 750, y: 750 };

      screen = 8;
    }
  }

  if (screen == 8) {
    if (endButton.mouse.presses()) {
      tavernMusic.setVolume(0);
      trainMusic.setVolume(0);
      alleyMusic.setVolume(0);
      rainMusic.setVolume(0);
      print("finally");
      background("black");
      textSize(60)
      fill(163, 18, 8)
      text("THE END", 400, 330);
      fill(255, 255, 255)
      textSize(40)
      text("''The result of Hope…'", 400, 400)

      goButton.pos = { x: 400, y: 500 };
      endButton.pos = { x: -750, y: -750 };

      screen = 9;
    }
  }

  if (screen == 9) {
    if (goButton.mouse.presses()) {
      print("ok");
      showScreen0();
      screen = 0;
    }
  }







}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen0() {
  tavernMusic.setVolume(0);
  trainMusic.setVolume(0);
  satieMusic.setVolume(0);
  alleyMusic.setVolume(0);
  rainMusic.setVolume(0);
  alleyMusic.play();
  alleyMusic.setVolume(0.1)
  background(bg1Image);
  stroke(255, 255, 255);
  strokeWeight(4);
  fill(0, 0, 0);
  rect(100, 300, 600, 200);
  noStroke(0);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(30);
  text(
    "You are an ex-bounty hunter on the \nsearch for your long-lost sister. \nA new-found friend, Isabella,  \naids you in your journey.", 400, 350);

  goButton.pos = { x: -400, y: -500 };
  secButton.pos = { x: -400, y: -500 };
  startButton.pos = { x: 670, y: 470 };
}
