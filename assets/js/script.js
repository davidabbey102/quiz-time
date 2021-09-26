var highScores = document.querySelector("#high-scores")
var timer = document.querySelector("#timer")
var mainContainer = document.querySelector(".main-container")
var introTitle = document.querySelector(".intro-title")
var introQuestions = document.querySelector(".intro-question")
var startButton = document.querySelector("#quiz-start")
var questionContainer = document.querySelector(".question-container")
var questions = document.querySelector(".questions")
var answers = document.querySelector(".answers")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var answer5 = document.querySelector("#answer5")
var response = document.querySelector("#response")
var questionAsked

var questionArray = [
    {
        question: "What is the preferred braking method for slowing?",
        answer1: "Automatic Brake",
        answer2: "Dynamic Brake",
        answer3: "Independent Brake",
        answer4: "Emergency Brake",
        correctAnswer: "Dynamic Brake"
    },

    {
        question: "Approximately how much does a loaded car weigh?",
        answer1: "90-110 tons",
        answer2: "130-150 tons",
        answer3: "110-130 tons",
        answer4: "None of the above",
        correctAnswer: "130-150 tons"
    },

    {
        question: "What is the best way to keep a car secure from rolling?",
        answer1: "Hand brake",
        answer2: "Chocks",
        answer3: "Emergency",
        answer4: "All of the above",
        answer5: "None of the above",
        correctAnswer: "All of the above"
    },

    {
        question: "How does a train move?",
        answer1: "Hope power",
        answer2: "Diesel power",
        answer3: "Electric power",
        answer4: "Wish power",
        correctAnswer: "Electric power"
    },

    {
        question: "What ticket can you get for hitting a train with your car?",
        answer1: "Trespassing",
        answer2: "Failure to yield",
        answer3: "Hitting an immovable object",
        answer4: "All of the above",
        answer5: "None of the above",
        correctAnswer: "All of the above"
    }
]



// answers.setAttribute("style", "visibility: hidden;")

console.log(questionArray)


function quizQuestion0() {
    mainContainer.setAttribute("style", "visibility: hidden; ")
    questionContainer.setAttribute("style", "display: block;")    
    questions.textContent = questionArray[0].question
    answer1.textContent = questionArray[0].answer1
    answer2.textContent = questionArray[0].answer2
    answer3.textContent = questionArray[0].answer3
    answer4.textContent = questionArray[0].answer4
    answer5.setAttribute("style", "display: none;")

    // answers.addEventListener("click", function answer0() {
        if (textContent.value !== questionArray[0].correctAnswer) {
            response.textContent = "Incorrect. Please try again."
            //MINUS 10 SECONDS FROM TIMER FUNCTION
        } else {
            // response.textContent = "Correct!!!"
            quizQuestion1()
        }
    }
    // )}



function quizQuestion1() {    
    questions.textContent = questionArray[1].question
    answer1.textContent = questionArray[1].answer1
    answer2.textContent = questionArray[1].answer2
    answer3.textContent = questionArray[1].answer3
    answer4.textContent = questionArray[1].answer4
    answer5.setAttribute("style", "display: none;")

    answers.addEventListener("click", function answer1() {
        if (!answer4) {
            response.textContent = "Incorrect. Please try again."
            //MINUS 10 SECONDS FROM TIMER FUNCTION
        } else {
            // response.textContent = "Correct!!!"
            quizQuestion2()
        }
    })
}

function quizQuestion2() {
    // mainContainer.setAttribute("style", "visibility: hidden; ")
    
    questions.textContent = questionArray[2].question
    answer1.textContent = questionArray[2].answer1
    answer2.textContent = questionArray[2].answer2
    answer3.textContent = questionArray[2].answer3
    answer4.textContent = questionArray[2].answer4
    answer5.textContent = questionArray[2].answer5

    answers.addEventListener("click", function answer2() {
        if (!answer4) {
            response.textContent = "Incorrect. Please try again."
            //MINUS 10 SECONDS FROM TIMER FUNCTION
        } else {
            // response.textContent = "Correct!!!"
            quizQuestion3()
        }
    })
}

function quizQuestion3() {
    // mainContainer.setAttribute("style", "display: none; ")
    // questionContainer.setAttribute("style", "display: block;")
    questions.textContent = questionArray[3].question
    answer1.textContent = questionArray[3].answer1
    answer2.textContent = questionArray[3].answer2
    answer3.textContent = questionArray[3].answer3
    answer4.textContent = questionArray[3].answer4
    answer5.setAttribute("style", "display: none;")

    answers.addEventListener("click", function answer3() {
        if (!answer3) {
            response.textContent = "Incorrect. Please try again."
            //MINUS 10 SECONDS FROM TIMER FUNCTION
        } else {
            // response.textContent = "Correct!!!"
            quizQuestion4()
        }
    })
}

function quizQuestion4() {
    // mainContainer.setAttribute("style", "display: none; ")
    
    questions.textContent = questionArray[4].question
    answer1.textContent = questionArray[4].answer1
    answer2.textContent = questionArray[4].answer2
    answer3.textContent = questionArray[4].answer3
    // answer3.setAttribute("style", "")
    answer4.textContent = questionArray[4].answer4
    answer5.textContent = questionArray[4].answer5
    answers.addEventListener("click", function answer4() {
        if (!answer4) {
            response.textContent = "Incorrect. Please try again."
            //MINUS 10 SECONDS FROM TIMER FUNCTION
        } else {
            // response.textContent = "Correct!!!"
            allDone()
        }
    })
}

function allDone() {
    // mainContainer.setAttribute("style", "display: none")
    
    localStorage.setItem("score", score)
}

// function progressQuestion () {
// for (let i = 0; i < 5; i++)
//     questionAsked = questionArray[0].answer1[i];
    
//     console.log(questionAsked)
// }

startButton.addEventListener("click", quizQuestion0)