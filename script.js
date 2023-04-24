const button = document.getElementById("button");
const timer = document.getElementById("timer");

let score = 0;
let timeLeft = 30;

const updateTime = () => {
    if (timeLeft > 0) {
        timeLeft -= 1;
    }
    else {
        clearInterval(timerInterval);
        button.removeEventListener("click", incrementScore);
        button.setAttribute("disabled", true);
        alert(`Time's up! Your score is ${score}`);
    }
    timer.textContent = timeLeft;
}

const incrementScore = () => {
    score++;
}

const timerInterval = setInterval(updateTime, 1000);

button.addEventListener("click", incrementScore);
