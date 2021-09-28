var highScores = document.querySelector("#highscores-header")
var timerEl = document.querySelector("#timer")
var mainContainer = document.querySelector(".main-container")
var questionContainer = document.querySelector(".question-container")
var resultContainer = document.querySelector("#result-container")
var highScoreContainer = document.querySelector("#highscores-container")
var startButton = document.querySelector("#quiz-start")
var resultButton = document.querySelector("#result-button")
var highButton = document.querySelector("#highscore-button")
var questions = document.querySelector(".questions")
var result = document.querySelector("#result")
var winner = document.querySelector("#winner")
var initials = document.querySelector("#initials")
var choice1 = document.querySelector("#answer1")
var choice2 = document.querySelector("#answer2")
var choice3 = document.querySelector("#answer3")
var choice4 = document.querySelector("#answer4")
var choice5 = document.querySelector("#answer5")
var response = document.querySelector("#response")
var score = document.querySelector("#score")
var highScoresList = document.querySelector("#highscores-list")
var currentQuestionProgression = 0
var correct
var secondsLeft = 100
var win = false

var questionArray = [
    {
        question: "What is the preferred braking method for slowing?",
        answer1: "Automatic Brake",
        answer2: "Dynamic Brake",
        answer3: "Independent Brake",
        answer4: "Emergency Brake",
        answer5: "All of the above",
        correctAnswer: 2
    },
    {
        question: "Approximately how much does a loaded car weigh?",
        answer1: "90-109 tons",
        answer2: "130-149 tons",
        answer3: "110-129 tons",
        answer4: "None of the above",
        answer5: "All of the above",
        correctAnswer: 2
    },
    {
        question: "What is the best way to keep a car secure from rolling?",
        answer1: "Hand brake",
        answer2: "Chocks",
        answer3: "Emergency",
        answer4: "All of the above",
        answer5: "None of the above",
        correctAnswer: 4
    },
    {
        question: "How does a train move?",
        answer1: "Hope power",
        answer2: "Diesel power",
        answer3: "Electric power",
        answer4: "Wish power",
        answer5: "All of the above",
        correctAnswer: 3
    },
    {
        question: "What ticket can you get for hitting a train with your car?",
        answer1: "Trespassing",
        answer2: "Failure to yield",
        answer3: "Hitting an immovable object",
        answer4: "All of the above",
        answer5: "None of the above",
        correctAnswer: 4
    }
]
var lastQuestion = questionArray.length

//Play again button on high scores page
function playAgain() {
    location.reload()
}

//Clear local storage and reload page
function clearLocal() {
    localStorage.clear()
    location.reload()
}

//Populate the high score area
function processScore() {
    mainContainer.setAttribute("style", "display: none;")
    questionContainer.setAttribute("style", "display: none;")
    resultContainer.setAttribute("style", "display: none;")
    highScoreContainer.setAttribute("style", "display: block;")
    var scoresToShow = JSON.parse(localStorage.getItem("saveHighScores"))
    console.log(scoresToShow)
    highButton.disabled = true

    for (var i = 0; i < scoresToShow.length; i++) {
        var li = document.createElement("li")
        var eachScore = scoresToShow[i]
        console.log(eachScore)
        var upperInitials = eachScore.initials.toUpperCase()
        li.textContent = upperInitials + " with a score of " + eachScore.score
        highScoresList.appendChild(li)
    }      
}

//Hide intro & start button, display first question and start timer  
function startQuiz() {
    mainContainer.setAttribute("style", "display: none;")
    countDown()
    cycleQuestions()
}
    
function countDown() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        timerEl.textContent = "Time: " + secondsLeft

        if(secondsLeft <= 0) {
            clearInterval(timerInterval)
            isLoss()
        } else if (win === true && secondsLeft > 0) {
            score.textContent = "Your score is: " + secondsLeft            
            clearInterval(timerInterval)
        }
    }, 1000)
}

//Progress questions
function cycleQuestions() {
    // mainContainer.setAttribute("style", "display: none;")
    questionContainer.setAttribute("style", "display: block;")
    if (currentQuestionProgression === lastQuestion) {
        ifWin()
    } else {
    var currentQuestion = questionArray[currentQuestionProgression]
    questions.textContent = currentQuestion.question
    choice1.textContent = currentQuestion.answer1
    choice2.textContent = currentQuestion.answer2
    choice3.textContent = currentQuestion.answer3
    choice4.textContent = currentQuestion.answer4
    choice5.textContent = currentQuestion.answer5
    }
}

//Check answer via onclick functions in html
function checkAnswer(answer) {
    correct = questionArray[currentQuestionProgression].correctAnswer

    if (answer === correct && currentQuestionProgression !== lastQuestion) {
        response.setAttribute("style", "display: none;")
        currentQuestionProgression++
        cycleQuestions()
    } else if (answer !== correct && currentQuestionProgression !== lastQuestion) {
        response.setAttribute("style", "display: block;")
        response.textContent = "Incorrect. Please try again"
        //MINUS 10 SECONDS FROM TIMER
        secondsLeft -= 10
    } else {
        ifWin()
    }
}

//If player loses
function isLoss() {
    mainContainer.setAttribute("style", "display: none;")
    questionContainer.setAttribute("style", "display: none;")
    resultContainer.setAttribute("style", "display: block;")
    winner.setAttribute("style", "display: none;")
    initials.setAttribute("style", "display: none;")
    result.textContent = "Sorry. You failed to complete the quiz in time."
    resultButton.textContent = "Try again"
}

//Winning reponse, should be influencing timer
function ifWin() {
    mainContainer.setAttribute("style", "display: none;")
    questionContainer.setAttribute("style", "display: none;")
    resultContainer.setAttribute("style", "display: block;")
    resultButton.textContent = "Submit"
    win = true
    
}

//Does 2 things, reloads the page if button pushed after loss or saves info for high scores area on win
function checkButton() {
    if (secondsLeft <= 0) {
        location.reload()
    } else if (win = !win && initials.value == "") {
        alert("Initials field cannot be blank.\n Please enter your initials")
    } else {
        var storeScore = {
            initials: initials.value.trim(),
            score: secondsLeft,
        }
    }
    highScoresArray = JSON.parse(localStorage.getItem("saveHighScores"))
    console.log(highScoresArray)
    if (highScoresArray == null) {
        highScoresArray = storeScore
        localStorage.setItem("saveHighScores", JSON.stringify([highScoresArray]))        
    } else 
    if (highScoresArray !== null) {
        highScoresArray.push(storeScore)
        localStorage.setItem("saveHighScores", JSON.stringify(highScoresArray))
    }
    processScore()
}

//Add event listeners
startButton.addEventListener("click", startQuiz)
highButton.addEventListener('click', highScores)
