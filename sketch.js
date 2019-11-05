
var clockStatus = 'notRunning';
var secondsHand = document.querySelectorAll('.seconds-container');
var htmlButton = document.querySelector("button");

function preload(){

}

function setup() {

}

function draw() {

}

 function startWatch() {
   setInterval(function() {
     for (var i = 0; i < secondsHand.length && clockStatus == 'isRunning'; i++) {
       if (secondsHand[i].angle == undefined) {
         secondsHand[i].angle = 6;
       } else {
         secondsHand[i].angle += 6;
       }
       secondsHand[i].style.webkitTransform = 'rotateZ('+ secondsHand[i].angle +'deg)';
       secondsHand[i].style.transform = 'rotateZ('+ secondsHand[i].angle +'deg)';
     }
   }, 1000);
 }

  function resetWatch() {
    for (var i = 0; i < secondsHand.length; i++) {
      secondsHand[i].angle = 0;
      secondsHand[i].style.webkitTransform = 'rotateZ('+ secondsHand[i].angle +'deg)';
      secondsHand[i].style.transform = 'rotateZ('+ secondsHand[i].angle +'deg)';
      window.location.reload();
    }
  }

 htmlButton.addEventListener("click", function() {
   if (clockStatus == 'notRunning') {
     console.log('Start');
     clockStatus = 'isRunning';
     startWatch();
     htmlButton.innerHTML = "Stop";
   } else if (clockStatus == 'isRunning') {
     console.log('Stop');
     clockStatus = 'isPaused';
     htmlButton.innerHTML = "Reset";
   } else if (clockStatus == 'isPaused') {
     console.log('Reset');
     clockStatus = 'notRunning';
     resetWatch();
   }
 })
