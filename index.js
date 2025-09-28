let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")

// console.log(homeScoreText)

let homeScore = 0
let guestScore = 0

function determineWinner() {
    if (homeScore > guestScore) {
        homeScoreText.classList.add("winner")
        homeScoreText.classList.remove("loser")
        guestScoreText.classList.add("loser")
        guestScoreText.classList.remove("winner")
    } else if (guestScore > homeScore) {
        homeScoreText.classList.add("loser")
        homeScoreText.classList.remove("winner")
        guestScoreText.classList.add("winner")
        guestScoreText.classList.remove("loser")
    } else {
        homeScoreText.classList.remove("winner")
        homeScoreText.classList.remove("loser")
        guestScoreText.classList.remove("winner")
        guestScoreText.classList.remove("loser")
    }
}

function addOneHome() {
    homeScore += 1
    homeScoreText.textContent = homeScore
    determineWinner()
}

function addTwoHome() {
    homeScore += 2
    homeScoreText.textContent = homeScore
    determineWinner()
}

function addThreeHome() {
    homeScore += 3
    homeScoreText.textContent = homeScore
    determineWinner()
}

function addOneGuest() {
    guestScore += 1
    guestScoreText.textContent = guestScore
    determineWinner()
}

function addTwoGuest() {
    guestScore += 2
    guestScoreText.textContent = guestScore
    determineWinner()
}

function addThreeGuest() {
    guestScore += 3
    guestScoreText.textContent = guestScore
    determineWinner()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
    determineWinner()
}

window.increment = increment
window.save = save
window.reset = reset

// let timeInSeconds = 900;
// const timerDisplay = document.getElementById('timerDisplay');

// const countdown = setInterval(() => {
//     timeInSeconds--;
//     timerDisplay.textContent = timeInSeconds;

//     if (timeInSeconds <= 0) {
//     clearInterval(countdown);
//     timerDisplay.textContent = "Time's Up!";
//     }
// }, 1000); // Update every 1000 milliseconds (1 second)