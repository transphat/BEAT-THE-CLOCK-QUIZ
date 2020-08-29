// Starting variables
var start = document.getElementById("startButton");
var content = document.querySelector(".content");
var card = document.createElement("div");
var container = document.querySelector(".container");
var header = document.createElement("div");
var scoreHeader;
var time;
var timer;
var quizScore;
var question;
var questionArray = [];
var answersArray = [];
var solutionChoice = [];
var solution;
var button = document.createElement("button");
var answers;
var answer;
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
})
// Setting the elements of the work
function setElements(){
    start.style.display = "none";
    classFunc("score card-header", score);
    scoreHeader = tagFunc("div");
    classFunc("scoreHeader card-header", scoreHeader);
    score.textContent = 0;
    classFunc("card", card);
    card.setAttribute("style", "width: 350px; height: 500px");
    classFunc("card-header", header);
    submit.textContent = "submit";
    container.append(card);
    timer = tagFunc("div");
    card.append(timer);
    timer.textContent = 60;
    var myInterval = setInterval(function(){
    timer.textContent -= 1;
    time = timer.textContent;
    if (time <= 0){
        alert("Game Over");
        clearInterval(myInterval);
    }
    }, 1000);
    card.append(header);
    scoreHeader.textContent = "Score";
    card.append(scoreHeader);
    card.append(score);
    card.append(submit);
    createQuestion();
    createButtons(questionObject.answers, card, buttonAnswer);
}
// creating a question to be used
function createQuestion(){
    for ( var i = 0; i < questionObject.questions.length; i++){
        questionArray.push(questionObject.questions[i]);
    }
    question = questionArray.shift();
    header.textContent = question;
}
// creating the buttons to the questions
function createButtons(answers, appendTo, clickFunc){
    for ( var i = 0; i < myAnswerObj.answers.length; i++){
        solutionChoice.push(myAnswerObj.answers[i]);
    }
    solution = solutionChoice.shift();
    for ( var i = 0, b; i < answers.length; i++){
        answersArray.push(answers[i]);
    }
    answer = answersArray.shift();
    for ( var i = 0,b; i < answer.length; i++){
        b = tagFunc("button");
        b.textContent = answer[i];
        b.setAttribute("style", "display:block");
        b.setAttribute("class", "buttonAns");
        valueFunc(solution[i], b);
        b.addEventListener("click", clickFunc);
        appendTo.appendChild(b);
    }
}
// A function that helps to create and get the value of the button
function buttonAnswer(){
    temp = this;
    tempValue = temp.getAttribute("value");
    console.log(tempValue);
}
// An event listener is added to submit
submit.addEventListener("click", function(){
    var list = document.querySelectorAll(".buttonAns");
    for ( var i = 0; i < list.length; i++){
        list[i].style.display = "none";
    }
    createQuestion();
    createButtons(questionObject.answers, card, buttonAnswer);
    if ( tempValue === "true"){
        score.textContent++;
    } else {
        timer.textContent -= 10;
    }
})