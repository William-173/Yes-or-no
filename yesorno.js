document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const container = document.querySelector(".container");
    const body = document.querySelector("body");

    // For 'Yes' Button animation
    yesButton.addEventListener("mouseover", () => {
        createHearts();
    });

    yesButton.addEventListener("click", () => {
        // Make everything disappear first
        container.style.display = "none";
        let pinkness = 0;

        // Slowly turn the screen pink
        let interval = setInterval(() => {
            pinkness += 1;
            body.style.backgroundColor = `rgba(255, 192, 203, ${pinkness / 100})`;
            if (pinkness >= 100) {
                clearInterval(interval);
                displayLoveMessage();
            }
        }, 50);
    });

    // For 'No' Button moving away on click
    noButton.addEventListener("click", () => {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    function createHearts() {
        const heart = document.createElement("span");
        heart.innerHTML = "💕";
        heart.classList.add("heart");
        yesButton.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }

    function displayLoveMessage() {
        const message = document.createElement("h1");
        message.innerHTML = "OMG I Love u💕💕💕❤️❤️❤️";
        message.style.color = "white";
        message.style.position = "absolute";
        message.style.top = "50%";
        message.style.left = "50%";
        message.style.transform = "translate(-50%, -50%)";
        message.style.fontSize = "3em";
        body.appendChild(message);
    }
});
