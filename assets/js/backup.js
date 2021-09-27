

var timer = document.querySelector(".timer")

var count = localStorage.getItem("count");

//Need twice to track 
counter.textContent = count;
localStorage.setItem("count", count);



 // function quizQuestion0() {
//     mainContainer.setAttribute("style", "visibility: hidden; ")
//     questionContainer.setAttribute("style", "display: block;")    
//     questions.textContent = questionArray[0].question
//     answer1.textContent = questionArray[0].answer1
//     answer2.textContent = questionArray[0].answer2
//     answer3.textContent = questionArray[0].answer3
//     answer4.textContent = questionArray[0].answer4
//     answer5.setAttribute("style", "display: none;")

//     // answers.addEventListener("click", function answer0() {
//         if (textContent.value !== questionArray[0].correctAnswer) {
//             response.textContent = "Incorrect. Please try again."
//             //MINUS 10 SECONDS FROM TIMER FUNCTION
//         } else {
//             // response.textContent = "Correct!!!"
//             quizQuestion1()
//         }
//     }
//     // )}



// function quizQuestion1() {    
//     questions.textContent = questionArray[1].question
//     answer1.textContent = questionArray[1].answer1
//     answer2.textContent = questionArray[1].answer2
//     answer3.textContent = questionArray[1].answer3
//     answer4.textContent = questionArray[1].answer4
//     answer5.setAttribute("style", "display: none;")

//     answers.addEventListener("click", function answer1() {
//         if (!answer4) {
//             response.textContent = "Incorrect. Please try again."
//             //MINUS 10 SECONDS FROM TIMER FUNCTION
//         } else {
//             // response.textContent = "Correct!!!"
//             quizQuestion2()
//         }
//     })
// }

// function quizQuestion2() {
//     // mainContainer.setAttribute("style", "visibility: hidden; ")
    
//     questions.textContent = questionArray[2].question
//     answer1.textContent = questionArray[2].answer1
//     answer2.textContent = questionArray[2].answer2
//     answer3.textContent = questionArray[2].answer3
//     answer4.textContent = questionArray[2].answer4
//     answer5.textContent = questionArray[2].answer5

//     answers.addEventListener("click", function answer2() {
//         if (!answer4) {
//             response.textContent = "Incorrect. Please try again."
//             //MINUS 10 SECONDS FROM TIMER FUNCTION
//         } else {
//             // response.textContent = "Correct!!!"
//             quizQuestion3()
//         }
//     })
// }

// function quizQuestion3() {
//     // mainContainer.setAttribute("style", "display: none; ")
//     // questionContainer.setAttribute("style", "display: block;")
//     questions.textContent = questionArray[3].question
//     answer1.textContent = questionArray[3].answer1
//     answer2.textContent = questionArray[3].answer2
//     answer3.textContent = questionArray[3].answer3
//     answer4.textContent = questionArray[3].answer4
//     answer5.setAttribute("style", "display: none;")

//     answers.addEventListener("click", function answer3() {
//         if (!answer3) {
//             response.textContent = "Incorrect. Please try again."
//             //MINUS 10 SECONDS FROM TIMER FUNCTION
//         } else {
//             // response.textContent = "Correct!!!"
//             quizQuestion4()
//         }
//     })
// }

// function quizQuestion4() {
//     // mainContainer.setAttribute("style", "display: none; ")
    
//     questions.textContent = questionArray[4].question
//     answer1.textContent = questionArray[4].answer1
//     answer2.textContent = questionArray[4].answer2
//     answer3.textContent = questionArray[4].answer3
//     // answer3.setAttribute("style", "")
//     answer4.textContent = questionArray[4].answer4
//     answer5.textContent = questionArray[4].answer5
//     answers.addEventListener("click", function answer4() {
//         if (!answer4) {
//             response.textContent = "Incorrect. Please try again."
//             //MINUS 10 SECONDS FROM TIMER FUNCTION
//         } else {
//             // response.textContent = "Correct!!!"
//             allDone()
//         }
//     })
// }