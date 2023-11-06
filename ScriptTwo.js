// Get references to the HTML elements we need to interact with.
const countdownDisplay = document.getElementById("countdownDisplay");
const startButton = document.getElementById("startTimer");
const resetButton = document.getElementById("resetTimer");
const durationInput = document.getElementById("durationInput");

// Initialize variables for the countdown timer.
let countdown; // This variable will hold the interval reference for the countdown.
let duration = parseInt(durationInput.value, 10); // Get the initial duration from the input field.

// A function to format the time in seconds into a "mm:ss" string.
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// A function to update the timer display with the current countdown time.
function updateTimerDisplay() {
    countdownDisplay.textContent = formatTime(duration);
}


   // Start the countdown timer when the "Start" button is clicked.
startButton.addEventListener("click", () => {
    if (!countdown) {
        countdown = setInterval(() => {
            if (duration <= 0) {
                clearInterval(countdown);
                countdown = null;
            } else {
                duration--;
                updateTimerDisplay();
            }
        }, 1000);
    }
});

// Reset the countdown timer when the "Reset" button is clicked.
resetButton.addEventListener("click", () => {
    clearInterval(countdown);
    countdown = null;
    duration = parseInt(durationInput.value, 10);
    updateTimerDisplay();
});

// Update the timer display when the input field value changes.
durationInput.addEventListener("input", () => {
    duration = parseInt(durationInput.value, 10);
    updateTimerDisplay();
});

// Update the timer display with the initial duration.
updateTimerDisplay();


    document.addEventListener("DOMContentLoaded", function () {
        const newsTitle = document.getElementById("news-title");
    
        // Delay the animation for 1 second (adjust as needed).
        setTimeout(function () {
          newsTitle.style.opacity = "1";
          newsTitle.style.transition = "opacity 1s ease-in";
        }, 1000);
      });
