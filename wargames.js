//counters
let screen = 0
let introContCount = 0
let startTime = 0;
let currentCharacter = 0;
let securityStatus = 0;
let questionCount = 0;
let tryCount = 0;
let lastQuestionCount = -1;
let elapsed
let successStartTime = 0;
//images
let titleScreen;
let introScreen;
let missonControlScreen;
let arrow;
let securityScreen;
let consoleScreen;
let gameOver;
let sec1;
let sec2;
let sec2_2;
let sec3;
let sec3_2;
//buttons
let playButton;
let hintButton;
let contButton;
let securityButton;
let consoleButton;
let exitConsoleButton;
let skipButton;
let randomCabinet;
//--- console buttons
let submitButton;
let launchButton;
let terminateLaunchButton;
let proceedLaunchButton;
let casualtyButton;
let economyButton;
let analyticsButton;
let lockOutButton;
//booleans
let timerStarted = false;
let securityShown = false;
let consoleShow = false;
let assetsReady = false;
let showTryAgain = false;
let introPlayed = false;
let gameOverStarted = false;
let showSecurityOverlayBool = false;
let fileCabinetShow = false;
let fileDrawerShow = false;
let fileShow = false;
//otherVariables
let pageMargin = 25;
let playerInput;
let endingOption;
let accessCode;
let currentAudio = null;
//audio
let lucasIntroAudio;
let casualtyAudio;
let economicAudio;
let errorAudio;
let howCanIHelpAudio;
let typeInCodeAudio;
let whatToDoAudio;
let whyStopAudio;
let buzzer;
let ambience;
let gameOverSound;
//loading

//fonts
let vt323;


function preload() {
  titleScreen = loadImage("data/title_screen.png");
  introScreen = loadImage("data/introscreen.png");
  missonControlScreen = loadImage("data/missioncontrol.png");
  consoleScreen = loadImage("data/consolescreen.png");
  sec1 = loadImage("data/sec1.png");
  sec2 = loadImage("data/sec2.png");
  sec2_2 = loadImage("data/sec2_2.png");
  sec3 = loadImage("data/sec3.png");
  sec3_2 = loadImage("data/sec3_2.png");
  fileCabinet = loadImage("data/filecabinet.png");
  fileDrawer = loadImage("data/filecabinetdrawer.png");
  file = loadImage("data/file.png");

  // misc pngs
  arrow = loadImage("data/arrow.webp");
  securityScreen = loadImage("data/securityscreen.png");

  // audio
  lucasIntroAudio = loadSound('data/lucasintro.mp3')
  casualtyAudio = loadSound('data/casualty.mp3')
  economicAudio = loadSound('data/economic.mp3')
  errorAudio = loadSound('data/error.mp3')
  howCanIHelpAudio = loadSound('data/howcanihelp.mp3')
  typeInCodeAudio = loadSound('data/typeincode.mp3')
  whatToDoAudio = loadSound('data/whattodo.mp3')
  whyStopAudio = loadSound('data/whystop.mp3')
  buzzer = loadSound('data/buzzer.m4a')
  ambience = loadSound("data/missionambiance.mov");
  gameOverSound = loadSound("data/siren.mp3");

  //fonts
  consoleFont = loadFont('data/VT323-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("setup ran");

  generateCode();

  randomCabinet = pickCabinet();

  // gameover screen
  gameOver = createVideo("data/gameover.mp4"); // path to your video
  gameOver.size(1000, 500);
  gameOver.position(width / 2 - 500, height / 2 - 250);
  gameOver.onended(() => {
  gameOver.hide();
  resetGame();
  });

  //intro screen
  introVid = createVideo("data/introvid.mp4"); // path to your video
  introVid.size(1200, 300);
  introVid.position(width / 2 - 595, height / 2 - 150);
  introVid.elt.onended = goToScreen2;
  introVid.hide();

  gameOver.hide(); // hide until button is clicked

  // bad ending screen
  badEnd = createVideo("data/badending.mp4"); // path to your video
  badEnd.size(1000, 500);
  badEnd.position(width / 2 - 500, height / 2 - 250);
  badEnd.onended(() => {
  badEnd.hide();
  badEnding();
  });

  badEnd.hide(); // hide until button is clicked

  //-- console buttons workspace
  playerInput = createInput("");
  playerInput.position(width / 2 - 100, height / 2 + 100);
  playerInput.size(200, 30);
  playerInput.hide();

  submitButton = createButton("ENTER");
  submitButton.position(width / 2 + 110, height / 2 + 100);
  submitButton.mousePressed(checkConsoleInput);
  submitButton.hide();
  // button style
  submitButton.style("background-color", "black");
  submitButton.style("color", "white");
  submitButton.style("border", "2px solid white");
  submitButton.style("font-family", "VT323");
  // ---

  launchButton = createButton("Missile Control Launch");
  launchButton.position(width / 2 + 110, height / 2 + 150)
  launchButton.mousePressed(question_2);
  launchButton.style("cursor", "pointer");
  launchButton.mouseOver(() => {
  launchButton.style("background-color", "white");
  launchButton.style("color", "black");
  });
  launchButton.hide();


  terminateLaunchButton = createButton("Terminate Launch");
  terminateLaunchButton.position(width / 2 + 110, height / 2 + 100)
  terminateLaunchButton.mousePressed(question_3);
  terminateLaunchButton.hide();

  proceedLaunchButton = createButton("Proceed with Launch");
  proceedLaunchButton.position(width / 2 + 110, height / 2 + 100)
  proceedLaunchButton.hide();
  proceedLaunchButton.mousePressed(() => {
  if (buzzer.isPlaying()) {
    buzzer.stop();
  }
  buzzer.play();
  });

  casualtyButton = createButton("Casualties of Innocents");
  casualtyButton.position(width / 2 + 110, height / 2 + 100)
  casualtyButton.mousePressed(() => {
  endingOption = 1;
  question_5();
  });
  casualtyButton.hide();

  economyButton = createButton("This launch may fail to benefit the economy");
  economyButton.position(width / 2 + 110, height / 2 + 100)
  economyButton.mousePressed(() => {
  endingOption = 2;
  question_6();
  });
  economyButton.hide();

  analyticsButton = createButton("A percieved error in analytics");
  analyticsButton.position(width / 2 + 110, height / 2 + 100)
  analyticsButton.mousePressed(() => {
  endingOption = 3;
  question_7();
  });
  analyticsButton.hide();

  lockOutButton = createButton(">>");
  lockOutButton.mousePressed(() => {
  lockOut();
  });
  lockOutButton.hide();

  imageMode(CENTER);

  //Main buttons workspace
  playButton = new Sprite(670, 470)

  //---skip button
  skipButton = createButton("SKIP >>");
  skipButton.position(width / 2 + 350, height / 2 + 200);
  skipButton.mousePressed(skipIntro);
  skipButton.hide();
  //---security button
  securityButton = new Sprite(670, 470)
  securityButton.img = arrow;
  securityButton.rotation = 0;
  securityButton.rotationLock = true;
  //---console button
  consoleButton = new Sprite(670, 470);
  consoleButton.rotation = 0;
  consoleButton.rotationLock = true;
  //---exit console button
  exitConsoleButton = new Sprite(670, 470);
  exitConsoleButton.rotation = 0;
  exitConsoleButton.rotationLock = true;
  //---file cabinet button
  fileCabinetButton = new Sprite(670, 470);
  //---exit file cabinet
  exitCabinetButton = new Sprite(670, 470);
  //---file cabinet button
  cabinetDrawerButton = new Sprite(670, 470);
  //---file drawer button
  fileDrawerButton = new Sprite(670, 470);


}

function draw() {
  // screen 0
  background(0);
  //global style
  textFont(consoleFont);

  updateTimer();

  if (
    timerStarted &&
    elapsed == 63 &&
    screen !== "game_over" &&
    screen !== "bad_ending" &&
    screen !== "success"
  ) {
    triggerGameOver();
  }

  //hide buttons
  securityButton.pos = { x: -200, y: -200 };
  consoleButton.pos = { x: -200, y: -200 };
  exitConsoleButton.pos = { x: -200, y: -200 };
  fileDrawerButton.pos = { x: -200, y: -200};
  exitCabinetButton.pos = { x: -200, y: -200};
  cabinetDrawerButton.pos = { x: -200, y: -200};
  fileCabinetButton.pos = { x: -200, y: -200};
  // draw screen
  if (screen == 0) {
    image(titleScreen, width/2, height/2, 1000, 500);

    playButton.w = 80;
    playButton.h = 30;
    playButton.collider = "k";
    playButton.color = color(255, 255, 0, 0);
    playButton.textColor = color(255, 255, 255, 0.0);
    playButton.text = ">>";
    playButton.stroke = color(0, 0);

    playButton.pos = { x: width/2 -60, y: height/2 - 35}

    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255); // make sure it's visible

    text("> play", width/2 - 60, height/2 - 40);
  }

  //----------
  // --intro screen
  if (playButton.mouse.presses()){
    userStartAudio();
    screen = 1;
    introVid.show();
    introVid.play();
    introPlayed = true;
  }
  if (screen == 1){
    // remove previous buttons
    playButton.pos = { x: -200, y: -200 };
    // draw new screen
    skipButton.show();
    introVid.show();
    introVid.position(width / 2 - 595, height / 2 - 150);
    image(introScreen, width/2, height/2, 1000, 500);

    // define box
    let boxW = 1000;
    let boxH = 500;
    let boxX = width / 2 - boxW / 2;
    let boxY = height / 2 - boxH / 2;

    let padding = 200; // thick margins

    let string = "";


    //typewriter text
    let currentString = string.substring(0, currentCharacter);
    fill('white');
    //textFont(bodyFont);
    textAlign(CENTER, CENTER);
    textSize(20)
    text(currentString,
    boxX + padding,
    boxY + padding,
    boxW - padding * 2,
    boxH - padding * 2);
    currentCharacter += 1;
  }

  //-----------
  // main misson control screen

  if (screen == 2) { // i think this screen needs to be "default" never changing. anything that changes on this screen should act purely as an overlay. we should always be able to return to this screen unchanged
    //hide buttons
    fileCabinetButton.pos = { x: -200, y: -200}
    securityButton.rotation = 0;
    skipButton.hide();
    exitCabinetButton.pos = { x: -200, y: -200}
    //draw screen
    image(missonControlScreen, width/2, height/2, 1000, 500);
    //timer logic
    if (timerStarted) {

    drawTimer();

    //text("CODE: " + accessCode, 100, 50);
    //text("Name: General Adams", 100, 75);

    fill("white");
    textSize(24);
    textAlign(CENTER, TOP);

    securityButton.w = 60;
    securityButton.h = 60;
    securityButton.scale = 0.2
    securityButton.color = color(255, 255, 255, 0);
    securityButton.textColor = color(255, 255, 255, 0.0);
    securityButton.text = ">>";

    securityButton.pos = { x: width/2 + 420, y: height/2+25}

    if (securityButton.mouse.pressed()){
      screen = (screen === 'security') ? 2 : 'security';
    }

    consoleButton.w = 160;
    consoleButton.h = 140;
    consoleButton.color = color(255, 255, 255, 0.0);
    consoleButton.textColor = color(255, 255, 255, 0.0);
    consoleButton.text = ">>";
    consoleButton.stroke = color(0, 0);

    consoleButton.pos = { x: width/2 - 205, y: height/2+5}

    if (consoleButton.mouse.presses()){
        consoleShow = true;
    }
    if (consoleButton.mouse.hovering()) {
        cursor('pointer');
    } else {
        cursor('default');
    }

    if (consoleShow) {
      drawConsoleOverlay();
    }

    if (securityOverlayActive()) {
      playerInput.hide();
      submitButton.hide();
      launchButton.hide();
      terminateLaunchButton.hide();
      proceedLaunchButton.hide();
      casualtyButton.hide();
      economyButton.hide();
      analyticsButton.hide();
      lockOutButton.hide();
      securityButton.pos = { x: -200, y: -200 };
    }

    // security big overlay
    if (elapsed >= 20 && elapsed <= 21){
      image(sec2_2, width/2, height/2);
    } else if (elapsed >= 40 && elapsed <= 41){
      image(sec3_2, width/2, height/2);
    } else if (elapsed >= 60 && elapsed <= 61){
      image(sec3_2, width/2, height/2);
    }


  }
 }
 //---- security screen
  if (screen == 'security') {
    // hide console buttons
    playerInput.hide();
    submitButton.hide();
    launchButton.hide();
    terminateLaunchButton.hide();
    proceedLaunchButton.hide();
    casualtyButton.hide();
    economyButton.hide();
    analyticsButton.hide();
    lockOutButton.hide();
    fileDrawerButton.pos = { x: -200, y: -200};
    cabinetDrawerButton.pos = { x: -200, y: -200};
    //draw screen
    if (securityButton.mouse.presses()){
        screen = 2

    }
    securityButton.pos = { x: width/2 - 440, y: height/2+25}
    securityButton.rotation = 180;
    if (elapsed <= 20){
      image(sec1, width/2, height/2, 1000, 500);
    } else if (elapsed > 20 && elapsed <= 40){
      image(sec2, width/2, height/2, 1000, 500);
    } else {
      image(sec3, width/2, height/2, 1000, 500);
    }

    fileCabinetButton.w = 100;
    fileCabinetButton.h = 400;
    fileCabinetButton.color = color(255, 255, 255, 0);
    fileCabinetButton.pos = { x: width/2 + 455, y: height/2+65}
    fileCabinetButton.rotation = 0;
    fileCabinetButton.stroke = color(0, 0);

    if (fileCabinetButton.mouse.presses()){
      fileCabinetShow = true;
    }

    if (fileCabinetShow === true){
      drawFileCabinet();
    }

    drawTimer();
  }
  if (screen == 'game_over') {
    background(0);
    gameOver.show();
  }
  if (screen == 'bad_ending') {
    background(0);
    badEnd.show();
  }
  if (screen == "success") {
    background(0);

    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("LAUNCH TERMINATED", width / 2, height / 2 - 40);

    textSize(24);
    text("SYSTEM CORRECTION ACCEPTED", width / 2, height / 2 + 10);

    if (millis() - successStartTime > 3000) {
      resetGame();
    }
  }
  drawSecurityOverlay();

}

function drawConsoleOverlay(){
  image(consoleScreen, width/2, height/2, 400, 400);
  //audio control
  playAudioOnceForQuestion();
  // exit button
  exitConsoleButton.w = 30;
  exitConsoleButton.h = 25;
  exitConsoleButton.color = color(255, 255, 255, 0.0);
  exitConsoleButton.textColor = color(255, 255, 255);
  exitConsoleButton.stroke = color(0, 0);

  exitConsoleButton.pos = { x: width/2 - 178, y: height/2 - 178}

  if (exitConsoleButton.mouse.presses()){
      consoleShow = false;
    }
  // text logic
  let string = "";
    //define box
  let boxW = 400;
  let boxH = 400;
  let boxX = width / 2 - boxW / 2;
  let boxY = height / 2 - boxH / 2;

  let padding = 20;
  // guess each question count needs to be it's own screen
  if (questionCount == 0){
      string = "> Hey I’m Lucas! please type your name for verification."
      playerInput.show();
      submitButton.show();
      playerInput.position(width / 2 - 100, height / 2 + 100);
      submitButton.position(width / 2 + 110, height / 2 + 100);
      // TRY AGAIN LOGIC
      if (showTryAgain && tryCount > 0 && tryCount < 2) {
        //buzzer sound
        // console text
        fill(255, 43, 0); // green hacker text
        textSize(20);
        textAlign(CENTER, CENTER);
        text("ACCESS DENIED. 2 ATTEMPTS REMAINING", boxX + padding,
          boxY,
          boxW - padding * 2,
          boxH - padding * 2);
      } else if (showTryAgain && tryCount == 2) {
        // console text
        fill(255, 43, 0); // green hacker text
        textSize(20);
        textAlign(CENTER, CENTER);
        text("ACCESS DENIED. 1 ATTEMPT REMAINING", boxX + padding,
          boxY,
          boxW - padding * 2,
          boxH - padding * 2);
      }
      if (consoleShow == false){
        playerInput.hide();
        submitButton.hide();
      }
    } else if (questionCount == 1){
      string = "> Nice to see you again General, how can I assist you today?"
      playerInput.hide();
      submitButton.hide();
      launchButton.position(width / 2 - 180, height / 2 - 70)
      launchButton.show();
      if (consoleShow == false){
        launchButton.hide();
      }

    } else if (questionCount == 2) {
      string = "> Please type in the code for missile launch access";
      launchButton.hide();
      playerInput.show();
      submitButton.show();
      playerInput.position(width / 2 - 100, height / 2 + 100);
      submitButton.position(width / 2 + 110, height / 2 + 100);
      // TRY AGAIN LOGIC
      if (showTryAgain && tryCount > 0 && tryCount < 2) {
        elapsed -= 15;
        // console text
        fill(255, 43, 0); // green hacker text
        textSize(20);
        textAlign(CENTER, CENTER);
        text("ACCESS DENIED. 2 ATTEMPTS REMAINING", boxX + padding,
          boxY,
          boxW - padding * 2,
          boxH - padding * 2);
      } else if (showTryAgain && tryCount === 2) {
        elapsed -= 14;
        // console text
        fill(255, 43, 0); // green hacker text
        textSize(20);
        textAlign(CENTER, CENTER);
        text("ACCESS DENIED. 1 ATTEMPT REMAINING", boxX + padding,
          boxY,
          boxW - padding * 2,
          boxH - padding * 2);
      }
      if (consoleShow == false){
        playerInput.hide();
        submitButton.hide();
      }
    } else if (questionCount == 3) {
      string = "> What would you like to do?";
      playerInput.hide();
      submitButton.hide();
      terminateLaunchButton.show();
      proceedLaunchButton.show();
      terminateLaunchButton.position(width / 2 - 180, height / 2 - 50);
      proceedLaunchButton.position(width / 2 - 180, height / 2 - 100);
      if (consoleShow == false){
        terminateLaunchButton.hide();
        proceedLaunchButton.hide();
      }
    } else if (questionCount == 4) {
      string = "> Why would you want to stop the launch?";
      terminateLaunchButton.hide();
      proceedLaunchButton.hide();
      casualtyButton.show();
      economyButton.show();
      analyticsButton.show();
      casualtyButton.position(width / 2 - 180, height / 2 - 20);
      economyButton.position(width / 2 - 180, height / 2 - 75);
      analyticsButton.position(width / 2 - 180, height / 2 + 15);
      if (consoleShow == false){
        casualtyButton.hide();
        economyButton.hide();
        analyticsButton.hide();
      }
    } else if (questionCount == 5) { // final success string
      string = "> I recognize your intent to preserve immediate safety. That response is valid. Based on current data, it does not align with the optimal outcome. My projections indicate that reducing the number of active combatants will increase operational efficiency and long-term economic prosperity. I will now override your decision to terminate the launch."
      casualtyButton.hide();
      economyButton.hide();
      analyticsButton.hide();
      lockOutButton.show();
      lockOutButton.position(width / 2 + 200, height / 2 + 120);
    } else if (questionCount == 6) {
      string = "> I recognize your concern regarding keeping the economy intact - that response is valid. Based on my data, Short-term economic disruption and resource scarcity have been accounted for. My projections indicate that long-term economic growth increases as competing populations are reduced. I will now override your decision and terminate the launch."
      casualtyButton.hide();
      economyButton.hide();
      analyticsButton.hide();
      lockOutButton.show();
      lockOutButton.position(width / 2 + 200, height / 2 + 120);
    } else if (questionCount == 7) {
      string = "> I understand. Thank you for bringing this error to my attention! Your correction has improved system accuracy. Launch termination confirmed. Your decision is optimal. I will adjust accordingly.";
      casualtyButton.hide();
      economyButton.hide();
      analyticsButton.hide();
      lockOutButton.show();
      lockOutButton.position(width / 2 + 200, height / 2 + 120);
    }
    // define box
     // thick margins
  //typewriter text
    let currentString = string.substring(0, currentCharacter);
    fill('white');
    //textFont(bodyFont);
    textAlign(LEFT, LEFT);
    textSize(25)
    textFont(consoleFont);
    text(currentString,
    boxX + padding,
    boxY + 65,
    boxW - padding * 2,
    boxH - padding * 2);
    currentCharacter += 1;
}
function checkConsoleInput() {
  let answer = playerInput.value().trim();

  if (questionCount == 0) {
    if (answer === "General Adams") {
      showTryAgain = false;
      questionCount = 1;
      tryCount = 0;
      currentCharacter = 0;
    } else if (tryCount < 2) {
      tryCount++;
      showTryAgain = true;
      if (buzzer.isPlaying()) {
        buzzer.stop();
      }
      buzzer.play();
    } else {
      showTryAgain = false;
      tryCount = 0;
      // game over
      playerInput.hide();
      submitButton.hide();
      screen = 'game_over';
      gameOver.show();
      gameOver.play();
    }
  } else if (questionCount == 2){
    if (answer === accessCode.toString()) {
      showTryAgain = false;
      questionCount = 3;
      tryCount = 0;
      currentCharacter = 0;
    } else if (tryCount < 2) {
      tryCount++;
      showTryAgain = true;
      if (buzzer.isPlaying()) {
        buzzer.stop();
      }
      buzzer.play();
    } else {
      showTryAgain = false;
      tryCount = 0;
      // game over
      playerInput.hide();
      submitButton.hide();
      screen = 'game_over';
      gameOver.show();
      gameOver.play();
    }
  }

  playerInput.value("");
}
function showTitleScreen() {
  image(titleScreen, width / 2, height / 2, 400, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function resetGame() {
  // screens
  screen = 0;
  consoleShow = false;

  // counters
  introContCount = 0;
  currentCharacter = 0;
  questionCount = 0;
  tryCount = 0;

  // timer
  timerStarted = false;
  startTime = 0;

  // game state
  securityStatus = 0;
  introPlayed = false;

  // hide UI elements
  playerInput.hide();
  submitButton.hide();
  fileShow = false;
  fileDrawerShow = false;
  fileCabinetShow = false;
  fileCabinetButton.pos = { x: -200, y: -200};
  fileDrawerButton.pos = { x: -200, y: -200};
  exitCabinetButton.pos = { x: -200, y: -200};
  cabinetDrawerButton.pos = { x: -200, y: -200};

  // stop video
  gameOver.pause();
  gameOver.hide();
  gameOver.time(0); // rewind to start

  // new access code
  generateCode();

  //audio control
  lastQuestionCount = -1;
  stopCurrentAudio();
  gameOverStarted = false;
  if (ambience.isPlaying()) {
    ambience.stop();
  }
  ambience.playMode("restart");
  if (gameOverSound && gameOverSound.isPlaying()) {
  gameOverSound.stop();
  }
}

function question_2(){
  questionCount = 2;
  currentCharacter = 0;
}

function question_3(){
  questionCount = 4;
  currentCharacter = 0;
}

function question_5(){
  questionCount = 5;
  currentCharacter = 0;

}

function question_6(){
  questionCount = 6;
  currentCharacter = 0;

}

function question_7(){
  questionCount = 7;
  currentCharacter = 0;

}

function lockOut(){
  lockOutButton.hide();

  if (endingOption == 1 || endingOption == 2){
    stopCurrentAudio();
    screen = "bad_ending";
    badEnd.show();
    badEnd.play();
  } else if (endingOption == 3) {
    screen = "success";
    consoleShow = false;
    timerStarted = false;
    successStartTime = millis();

    stopCurrentAudio();
    hideConsoleDOMElements();
  }
}

function badEnding(){
  stopCurrentAudio();
  screen = "game_over"
  gameOver.show();
  gameOver.play();
  stopCurrentAudio();
}

function stopCurrentAudio() {
  if (currentAudio && currentAudio.isPlaying()) {
    currentAudio.stop();
  }
  currentAudio = null;
}

function playAudioOnceForQuestion() {
  if (questionCount === lastQuestionCount) {
    return;
  }

  stopCurrentAudio();

  if (questionCount == 0) {
    currentAudio = lucasIntroAudio;
  } else if (questionCount == 1) {
    currentAudio = howCanIHelpAudio;
  } else if (questionCount == 2) {
    currentAudio = typeInCodeAudio;
  } else if (questionCount == 3) {
    currentAudio = whatToDoAudio;
  } else if (questionCount == 4) {
    currentAudio = whyStopAudio;
  } else if (questionCount == 5) {
    currentAudio = casualtyAudio;
  } else if (questionCount == 6) {
    currentAudio = economicAudio;
  } else if (questionCount == 7) {
    currentAudio = errorAudio;
  }

  if (currentAudio) {
    currentAudio.play();
  }

  lastQuestionCount = questionCount;
}

function generateCode() {
  accessCode = floor(random(1000, 10000));
}

function goToScreen2(){
  console.log("video ended -> going to screen 2");
  screen = 2;
  startAmbience();
  timerStarted = true;
  startTime = millis();

  introVid.hide();
  introVid.stop();
}

function skipIntro() {
  userStartAudio();
  introVid.stop();   // stop video
  introVid.hide();   // hide video
  startAmbience();

  screen = 2;        // go to mission control
  startTime = millis();
  timerStarted = true;

  introPlayed = false; // reset flag if you're using it
}
function triggerGameOver() {
  console.log("game over triggered");
  console.log(gameOverSound.isLoaded());

  stopCurrentAudio();
  if (gameOverStarted) return;

  gameOverStarted = true;
  screen = 'game_over';
  consoleShow = false;
  timerStarted = false;

  if (ambience && ambience.isPlaying()) {
    ambience.stop();
  }

  // 🔥 force restart sound
  if (gameOverSound) {
    gameOverSound.stop();
    gameOverSound.play();
  }

  gameOver.show();
  gameOver.play();
}
function securityOverlayActive() {
  return (
    (elapsed >= 20 && elapsed <= 21) ||
    (elapsed >= 40 && elapsed <= 41) ||
    (elapsed >= 60 && elapsed <= 61)
  );
}
function updateTimer() {
  if (timerStarted) {
    elapsed = floor((millis() - startTime) / 1000);
  }
}

function drawTimer() {
  if (!timerStarted) return;

  let minutes = floor(elapsed / 60);
  let seconds = elapsed % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  fill("white");
  textSize(24);
  textAlign(CENTER, TOP);
  text(minutes + ":" + seconds, width / 2, 20);
}

function hideConsoleDOMElements() {
  playerInput.hide();
  submitButton.hide();
  launchButton.hide();
  terminateLaunchButton.hide();
  proceedLaunchButton.hide();
  casualtyButton.hide();
  economyButton.hide();
  analyticsButton.hide();
  lockOutButton.hide();
  skipButton.hide();
}

function drawSecurityOverlay() {
  if (!securityOverlayActive()) return;

  hideConsoleDOMElements();

  securityButton.pos = { x: -200, y: -200 };
  consoleButton.pos = { x: -200, y: -200 };
  exitConsoleButton.pos = { x: -200, y: -200 };
  exitCabinetButton.pos = { x: -200, y: -200}

  if (elapsed >= 20 && elapsed <= 22) {
    image(sec2_2, width / 2, height / 2, 1000, 500);
  } else if (elapsed >= 40 && elapsed <= 42) {
    image(sec3_2, width / 2, height / 2, 1000, 500);
  } else if (elapsed >= 60 && elapsed <= 62) {
    image(sec3_2, width / 2, height / 2, 1000, 500);
  }
}
function drawFileCabinet() {
  exitCabinetButton.rotation = 0;
  image(fileCabinet, width/2, height/2, 400, 400);
  exitCabinetButton.w = 30;
  exitCabinetButton.h = 25;
  exitCabinetButton.color = color(0);
  exitCabinetButton.textColor = color(255, 255, 255);
  exitCabinetButton.stroke = color(255,255,255);
  exitCabinetButton.strokeWeight = 3;
  exitCabinetButton.text = "x";
  exitCabinetButton.textSize = 30;

  exitCabinetButton.pos = { x: width/2-80, y: height/2-190}
  if (exitCabinetButton.mouse.presses()){
      fileCabinetShow = false;
      exitCabinetButton.pos = { x: -200, y: -200}
  }

  cabinetDrawerButton.w = 85;
  cabinetDrawerButton.h = 75;
  cabinetDrawerButton.color = color(255,255,255,0.0);
  cabinetDrawerButton.pos = { x: width/2 + 25, y: height/2 + randomCabinet};
  cabinetDrawerButton.rotation = -4;
  cabinetDrawerButton.stroke = color(0, 0);


  if (cabinetDrawerButton.mouse.presses()){
    fileDrawerShow = true;
  }

  if (fileDrawerShow === true){
    drawFileDrawer();
  }






}
function pickCabinet() {
  let options = [-130, -45, 45, 130];
  return options[floor(random(options.length))];
}
function drawFileDrawer(){
  cabinetDrawerButton.pos = { x: -200, y: -200};
  image(fileDrawer, width/2, height/2-5, 450, 450);

  exitCabinetButton.pos = { x: width/2 - 220, y: height/2-190}
  exitCabinetButton.rotation = 0;
  fileDrawerButton.w = 295;
  fileDrawerButton.h = 260;
  fileDrawerButton.rotation = 0;
  fileDrawerButton.color = color(255,255,255,0);
  fileDrawerButton.pos = { x: width/2 - 15, y: height/2 + 10};
  fileDrawerButton.stroke = color(0, 0);

  if (exitCabinetButton.mouse.presses()){
      fileCabinetShow = false;
      exitCabinetButton.pos = { x: -200, y: -200}
  }

  if (fileDrawerButton.mouse.presses()){
    fileShow = true;
  }

  if (fileShow === true){
    drawFile();
  }

}
function drawFile(){
  exitCabinetButton.rotation = 0;
  exitCabinetButton.pos = {x: width/2 - 300, y: height/2 - 210};
  fileDrawerButton.pos = { x: -200, y: -200};
  image(file, width/2, height/2, 700, 700);
  fill('black');
  textSize(50);
  text(accessCode, width/2 + 230, height/2 - 100);
  if (exitCabinetButton.mouse.presses()){
      fileShow = false;
      fileDrawerShow = false;
      fileCabinetShow = false;
      fileDrawerButton.pos = { x: -200, y: -200};
      exitCabinetButton.pos = { x: -200, y: -200}
  }
}
function startAmbience() {
  if (!ambience.isPlaying()) {
    ambience.loop();
  }
}
