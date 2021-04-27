const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const wordsPerMinuteCounter = document.querySelector(".wpmCounter");
const theHighScore = document.querySelector(".highScore");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
  if(time <= 9) {
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/6000));
  timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
  timer[2] = Math.floor(timer[3] - (timer[1]*100) - timer[0]*60)


}

// Match the text entered with the provided text on the page:
function spellCheck(){
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0,textEntered.length)


  if(textEntered == originText){
    if(wordsPerMinuteCounter >= theHighScore){
      theHighScore.innerHTML = "High Score: " + wordsPerMinuteCounter.innerHTML + " words/min";
    }
    clearInterval(interval);
    testWrapper.style.borderColor = "#5EFF33";

  }
  else{
    if(textEntered == originTextMatch){
      testWrapper.style.borderColor = "#33FFDB";
    }
    else{

      testWrapper.style.borderColor = "#FF3333";
    }
  }

}

// Start the timer:
function start(){
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

// Count words per minute.

function wordsPerMinute(){
  let textEntered = testArea.value;
  wordsPerMinuteCounter.innerHTML = "Words Per Minute: " + Math.floor(Math.round(((textEntered.split(" ").length/timer[1])*60)));
}


// Reset everything:
function reset(){
  clearInterval(interval);
  countError = 0;
  timerRunning = false;
  testArea.value = null;
  timer[3] = 0;
  theTimer.innerHTML = "00:00:00";
  wordsPerMinuteCounter.innerHTML = "Words Per Minute: " + 0;


}

// Event listeners for keyboard input and the reset button:

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keypress", wordsPerMinute, false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click", reset, false);
