var highScores = document.querySelector("#high-scores")
var timer = document.querySelector("#timer")
var mainContainer = document.querySelector(".main-container")
var introTitle = document.querySelector(".intro-title")
var introQuestions = document.querySelector(".intro-questions")
var startButton = document.querySelector("#quiz-start")
var questionContainer = document.querySelector(".question-container")
var questions = document.querySelector(".questions")
var answers = document.querySelector(".answers")
var questionAsked

var questionArray = [
    {
        question: "What is the preferred braking method for slowing?",
        answer1: "Automatic Brake",
        answer2: "Dynamic Brake",
        answer3: "Independant Brake",
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
        correctAnswer: "130-150 tons"
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

console.log(questionArray)


function startQuiz() {
    mainContainer.setAttribute("style", "visibility: hidden; ")
    questions.textContent = questionArray[0].question
    answers.textContent = questionArray[0].answer1

}

function progressQuestion () {
for (let i = 0; i < 5; i++)
    questionAsked = questionArray[0].answer[i];
    
    console.log(questionAsked)
}

startButton.addEventListener("click", startQuiz)