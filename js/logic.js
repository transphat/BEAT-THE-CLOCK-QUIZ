// variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


// my variables for DOM elements
var startScreenEl = document.getElementById("start-screen");
var questionClickTextEl = document.getElementById("question-title")


// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// questionObject is the object that contains the questions and the answers
// each question has a different answer
var questionObject = {
  questions: ["What is lexical scoping?", "What is a variable", "what is a boolean"],
  answers: [["It is a type of scope", "It is a global scope","It is when you declare something in the local environment"],["It is a type of datatype", "It is a container", "It is a boolean"], ["It is a datatype", "It is when you would want to make certain that something is positive or negative", "It is a type of loop"]]
}
var temp;
var tempValue;
// myAnswerObj holds the answers to the questions
// myAnswerObj is an array of arrays
var myAnswerObj = new Object();
myAnswerObj['answers'] = [[true,false,false],[false,true,false],[true,false,false]];
var score = document.createElement("div");
var submit = document.createElement("button");
var list = document.querySelector(".buttonsDiv");
var buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("class", "buttonsDiv");
var submitFunc;
var answer;
var tagFunc;
var valueFunc;
var doc = document;
valueFunc = function(value, button){
  return button.setAttribute("value", value);
};
classFunc = function(setClass, elem){
  return elem.setAttribute("class", setClass);
}
tagFunc = function(tag){
  return doc.createElement(tag);
};
// we start the game on click of the start button
start.addEventListener("click", function(){
  tagFunc("div")
  setElements();

function startQuiz(){
  // hide start screen
//   var startScreenEl = document.getElementById("start-screen");
// hide start screen
startScreenEl.className = “hide”;
// un-hide questions section
questionsEl.className = “start”;

  // start timer
  timer.textContent = 75;
  var myInterval = setInterval(function(){
  timer.textContent = seconds--;
  time = timerEl.textContent;
  if (time <= 0){
      alert("Game Over");
      clearInterval(myInterval);
  }
  }, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  

  // update title with current question
var titleEl = document.getElementById("question-title");
titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestionIndexchoices.forEach(function(choice, i) {
  // create new button for each choice
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", choice);

  choiceNode.onclick = questionClick;  // attach click event listener to each choice

  choiceNode.appendChild(choiceNode); // display on the page
  });
  }

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;    // penalize time
  
  // show new timer on page
  timerEl.textContent = time;

  // play "wrong" sound effect
  sfxWrong.play();

  feedbackEl.textContent = "WRONG";
} else {

  // play "right" sound effect
  sfxRight.play();

  feedbackEl.textContent = "CORRECT";
}}

// flash right/wrong feedack on page for half a second
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
  feedbackEl.setAttribute("class", "feedback hide");
}, 1000);

// move to next question
if (currentQuestionIndex === question.length) {
  quizEnd();
} else {
  getQuestion();
}


function quizEnd() {
  // stop timer
  clearInterval(timerId);

// show end screen
var endScreenEl = document.getElementById("end-screen");
endScreenEl.removeAttribute("class");
;
};
function questionClick() {
  //  check if user guessed wrong
   if (this.value != questions[currentQuestionIndex].answer){

}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

    // get saved scores from localstorage, or if not any, set to empty array
var highscores = 
  JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
var newScore = {
  score: time,
  initials: initials
};

    // save to localstorage
highscores.push(newScore);
window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// // user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;