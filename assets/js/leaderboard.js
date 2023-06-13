// Variables
var playAgain = document.getElementById("playAgain");
var highScoreOl = document.getElementById("highScore");
var clearHighScores = document.getElementById("clearLeaderboard");


// eventListener to go back to index.html on play again click
playAgain.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
})

// eventListener to clear high scores from localStorage
clearHighScores.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
})


// variables to pull from localStorage
var retrievedData = localStorage.getItem("scoredata");
var parsedData = JSON.parse(retrievedData);
var sortedData = parsedData.sort((a, b) => a.highscore - b.highscore);
var reversedData = sortedData.reverse();

for (var i = 0; i < reversedData.length; i++) {
    highScoreOl.append(document.createElement("h4"));
    highScoreOl.children[i].textContent = reversedData[i].name + " | " + reversedData[i].highscore;
}