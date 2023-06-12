//Questions to be used for the quiz
var questionList = [
    {
        quizQuestion:"Question #1: In which movie does a princess dance with the villain?",
        options: ["Moana", "Beauty and the Beast", "Frozen", "Tangled"],
        correctAnswer: 2,
    },
    {
        quizQuestion:"Question #2: Which two princesses have siblings?",
        options: ["Merida and Ariel", "Snow White and Belle", "Jasmine and Tiana", "Mulan and Cinderella"],
        correctAnswer: 0,
    },
    {
        quizQuestion:"Question #3: What is Mickey Mouse's orginal name?",
        options: ["Tim", "Mortimer", "Monty", "Jasper"],
        correctAnswer: 1,
    },
    {
        quizQuestion:"Question #4: What is the name of the shark in Finding Nemo?",
        options: ["Bruce", "Jason", "Daniel", "Jack"],
        correctAnswer: 0,
    },
    {
        quizQuestion:"Question #5: What is the most expensive movie in disney history?",
        options: ["Pirates of the Carribbean: At World's End", "Frozen 2", "Tangled", "Brave"],
        correctAnswer: 0,
    },
    {
        quizQuestion:"Question #6: What was the queens name in sleeping beauty?",
        options: ["Jasmine", "Rebecca", "Samantha", "She was never given a name"],
        correctAnswer: 3,
    },
    {
        quizQuestion:"Question #7: Which musical artist/band did lilo copy the most?",
        options: ["Johnny Cash", "The Beatles", "Jackson 5", "Elvis Presley"],
        correctAnswer: 3,
    },
    {
        quizQuestion:"Question #8: How many land's are inside the Disneyland park?",
        options: ["8", "9", "4", "6"],
        correctAnswer: 1,
    },
    {
        quizQuestion:"Question #9: What is Boo real name from Monster Inc.?",
        options: ["Sally", "Jessie", "Mary", "Beth"],
        correctAnswer: 2,
    },
    {
        quizQuestion:"Question #10: How many Disney princesses are there?",
        options: ["13", "12", "15", "10"],
        correctAnswer: 0,
    },
]

var score = 0;
var iter = 0;
var questionEntry = document.getElementById("questionEntry")
var answerEntry = document.getElementById("answerEntry")
var quizOptions = document.querySelectorAll("li")
var timer = document.getElementById("timer")
var scoreCounter = document.getElementById("scoreCounter")
var highscores;

//Function to grab the questions from the list using iter to cycle through them.
function getCurrentQuestion(){
    var ret = questionList[iter];
    return ret;
}


//Making the logic for the questions to pop up.
function quiz(){
    var currentQuestion = getCurrentQuestion()
    questionEntry.textContent = currentQuestion.quizQuestion;
    console.log('quizOptions', quizOptions)
    quizOptions.forEach(function(quizOption, index) {
        quizOption.textContent = currentQuestion.options[index];
        quizOption.removeEventListener("click", correctAnswer);
        quizOption.removeEventListener("click", incorrectAnswer);
        if (index == currentQuestion.correctAnswer) {
            quizOption.addEventListener("click", correctAnswer);
        } else {
            quizOption.addEventListener("click", incorrectAnswer);
        }
    });
}
console.log(correctAnswer);
// Logic for when the answers are clicked correctly/inncorrectly
function correctAnswer() {
    iter++;
    (score = score + 10);
    scoreCounter.textContent = "Score: " + score;
    if (iter < questionList.length) {
        quiz();
    } else {
        endScreen();
        timer.setAttribute("style", "display: none");
    }
}

function incorrectAnswer() {
    iter++;
    (score = score - 1);
    scoreCounter.textContent = "Score: " + score;
        if (iter < questionList.length) {
        quiz();
    } else {
        endScreen();
        timer.setAttribute("style", "display: none");
    }
}

quiz()

// timer function to countdown remaining time 
scoreCounter.textContent = "Score: " + score;
var timeLeft = 60;
function countdown() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft !== 0) {
          timer.textContent = "Time left: " + timeLeft + " s";
        }
    
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          timer.textContent = "Time is up!";
          endScreen();
        }
    
      }, 1000);
    }
countdown();

function endScreen() {
    var quizSection = document.getElementById("quizSection")
    enterName.setAttribute("style", "display: null");
    timeCounter.textContent = "Great job!";
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    if (!localStorage.getItem("scoredata")) {
        highScores = [];
        highScores.push({name: fname, highscore: score});
        localStorage.setItem("scoredata", JSON.stringify(highScores));
    } else {
        var highScores = JSON.parse(localStorage.getItem("scoredata"));
        highScores.push({name: fname, highscore: score});
        localStorage.setItem("scoredata", JSON.stringify(highScores));
    
} window.location.href = "./leaderboard.html";
})