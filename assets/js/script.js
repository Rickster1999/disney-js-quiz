var start = document.getElementById("startButton")

function startQuiz () {
    window.location.href = "./quiz.html";
}

start.addEventListener("click", function(){
    startQuiz();
})