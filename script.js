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


// document.querySelector("#origin-text p").innerHTML = randomizeText(Math.floor(Math.random(8)));

//randomize origin text

// function randomizeText(num){
//   switch(num){
//
//     case 0: return "When a greasy TV walks, it means that a wet telephone is destroying a funny cow. So, if a big juice is dancing with a heavy TV, another fat printer is printing on a greasy juice! Now and then, a old computer prints, so the other fast juices are annoying a big VCR. Because the slow pencil is dancing with a wet pencil, the other wet pig is dancing with a fat printer! A dry pencil asked: 'Do you want a fat computer to dance with?' to a dry VCR. Any fat book is dry because the fast juice was wet! So, if a slow computer is walking on a dry book, another old VCR is walking on a big VCR! When a funny juice closes, it means that a wet VCR is destroying a fast pig. So, if a fast telephone is opening a fast pig, another dry pencil is eating a wet pencil!";
//
//     case 1: return "When a fast computer cuts, it means that a slow pig is walking on a funny cow. So, if a fat computer is sleeping with a old telephone, another dry printer is annoying a heavy TV! Now and then, a wet telephone ejects, so the other funny VCRs are closing a funny cow. Because the slow book is walking on a fat printer, the other fast book is eating a slow computer! A wet book asked: 'Do you want a slow telephone to scan with?' to a greasy juice. Any fat book is fast because the fat juice was greasy! So, if a old pig is opening a dry book, another old telephone is sleeping with a heavy TV! When a funny computer swallows, it means that a greasy computer is closing a fast pig. So, if a fat VCR is destroying a dry book, another dry cow is opening a dry book!";
//
//     case 2: return "When a wet computer scans, it means that a fast book is walking on a dry book. So, if a greasy printer is destroying a greasy juice, another dry telephone is dancing with a fast pig! Now and then, a funny pig swallows, so the other slow pencils are opening a big VCR. Because the heavy telephone is sleeping with a slow computer, the other greasy book is closing a fast pig! A fat telephone asked: 'Do you want a slow telephone to scan with?' to a slow pig. Any fat book is funny because the dry pig was old! So, if a funny computer is printing on a heavy TV, another funny pencil is eating a old telephone! When a fat cow eats, it means that a greasy cow is pouring freezing cold water on a heavy TV. So, if a fat VCR is destroying a big VCR, another slow pig is closing a heavy TV!";
//
//     case 3: return "When a big book swallows, it means that a fast telephone is opening a big VCR. So, if a wet book is closing a fast pig, another fat pencil is printing on a greasy juice! Now and then, a old juice ejects, so the other old juices are closing a funny cow. Because the funny computer is eating a slow computer, the other wet printer is annoying a slow computer! A fast pencil asked: 'Do you want a greasy VCR to print with?' to a wet cow. Any funny TV is dry because the slow TV was fast! So, if a wet computer is eating a slow computer, another funny cow is pouring freezing cold water on a heavy TV! When a greasy printer opens, it means that a dry printer is dancing with a fat printer. So, if a wet cow is printing on a funny cow, another big pencil is walking on a wet pencil!";
//
//     case 4: return "When a fast pig scans, it means that a wet printer is annoying a big VCR. So, if a big VCR is annoying a dry book, another fat telephone is printing on a dry book! Now and then, a fat book walks, so the other old cows are opening a dry book. Because the slow cow is opening a big VCR, the other slow computer is walking on a fast pig! A greasy juice asked: 'Do you want a funny VCR to print with?' to a dry pencil. Any funny pencil is fat because the greasy telephone was slow! So, if a funny printer is destroying a old telephone, another slow pig is dancing with a heavy TV! When a big computer opens, it means that a funny telephone is annoying a fast pig. So, if a fast pig is opening a old telephone, another funny book is annoying a funny cow!";
//
//     case 5: return "When a wet book swallows, it means that a dry cow is destroying a heavy TV. So, if a dry book is eating a wet pencil, another wet VCR is opening a dry book! Now and then, a fat telephone walks, so the other wet computers are dancing with a heavy TV. Because the fast computer is eating a fast pig, the other fast telephone is printing on a big VCR! A old computer asked: 'Do you want a dry book to close with?' to a wet telephone. Any greasy telephone is wet because the wet computer was old! So, if a old pig is eating a dry book, another dry juice is sleeping with a fast pig! When a slow juice ejects, it means that a wet cow is opening a old telephone. So, if a big VCR is printing on a wet pencil, another funny VCR is printing on a fat printer!";
//
//     case 6: return "When a fast pencil ejects, it means that a wet cow is dancing with a dry book. So, if a slow VCR is eating a wet pencil, another dry printer is closing a slow computer! Now and then, a fast pencil closes, so the other dry juices are annoying a old telephone. Because the big VCR is eating a dry book, the other slow book is walking on a slow computer! A big printer asked: 'Do you want a heavy juice to open with?' to a slow pig. Any old pencil is greasy because the funny cow was old! So, if a old telephone is printing on a old telephone, another heavy pencil is pouring freezing cold water on a old telephone! When a wet book closes, it means that a heavy pig is closing a slow computer. So, if a funny printer is printing on a big VCR, another dry computer is pouring freezing cold water on a funny cow!";
//
//     case 7: return "When a slow juice swallows, it means that a wet pig is annoying a funny cow. So, if a old VCR is printing on a greasy juice, another old juice is annoying a funny cow! Now and then, a fat VCR opens, so the other heavy TVs are eating a fast pig. Because the funny computer is pouring freezing cold water on a dry book, the other dry cow is pouring freezing cold water on a funny cow! A wet juice asked: 'Do you want a dry pencil to swallow with?' to a fast TV. Any fast book is dry because the fat VCR was slow! So, if a fast cow is pouring freezing cold water on a big VCR, another funny pig is annoying a funny cow! When a funny VCR prints, it means that a funny computer is pouring freezing cold water on a wet pencil. So, if a fat telephone is dancing with a fat printer, another old cow is opening a fat printer!";
//
//   }
// }


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
  // document.querySelector("#origin-text p").innerHTML = randomizeText(Math.floor(Math.random(8)));
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
