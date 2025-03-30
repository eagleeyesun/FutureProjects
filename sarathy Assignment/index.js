document.addEventListener("DOMContentLoaded", () => {
    let totalClicks = 0;
    const clickButtons = document.querySelectorAll(".btn-link");
    const clickCounterDisplay = document.querySelector(".click-container p");

    clickButtons.forEach(button => {
        button.addEventListener("click", () => {
            let span = button.querySelector(".click-count");
            let count = parseInt(span.textContent) + 1;
            span.textContent = count;

            totalClicks++;
            clickCounterDisplay.textContent = `The button has been clicked ${totalClicks} times`;
        });
    });
});