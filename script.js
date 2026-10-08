document.addEventListener("DOMContentLoaded", function () {

    const screens = document.querySelectorAll(".screen");

    const openingScreen = document.getElementById("openingScreen");
    const journeyScreen = document.getElementById("journeyScreen");
    const dubaiScreen = document.getElementById("dubaiScreen");
    const birthdayScreen = document.getElementById("birthdayScreen");
    const learningScreen = document.getElementById("learningScreen");
    const wordsScreen = document.getElementById("wordsScreen");
    const messageScreen = document.getElementById("messageScreen");
    const finalScreen = document.getElementById("finalScreen");

    const startButton = document.getElementById("startButton");
    const surpriseButton = document.getElementById("surpriseButton");
    const continueButton = document.getElementById("continueButton");
    const wordsButton = document.getElementById("wordsButton");
    const messageButton = document.getElementById("messageButton");
    const finalButton = document.getElementById("finalButton");

    const airplane = document.getElementById("airplane");


    function showScreen(screenToShow) {

        screens.forEach(function (screen) {
            screen.classList.add("hidden");
        });

        if (screenToShow) {
            screenToShow.classList.remove("hidden");
        }
    }


    // INDIA → DUBAI

    if (startButton) {

        startButton.addEventListener("click", function () {

            showScreen(journeyScreen);

            if (airplane) {
                airplane.style.left = "0%";

                setTimeout(function () {
                    airplane.style.left = "90%";
                }, 300);
            }

            setTimeout(function () {
                showScreen(dubaiScreen);
            }, 6500);

        });

    }


    // DUBAI → BIRTHDAY

    if (surpriseButton) {

        surpriseButton.addEventListener("click", function () {
            showScreen(birthdayScreen);
        });

    }


    // BIRTHDAY → LEARNING

    if (continueButton) {

        continueButton.addEventListener("click", function () {

            showScreen(learningScreen);
            window.scrollTo(0, 0);

        });

    }


    // LEARNING → WORDS

    if (wordsButton) {

        wordsButton.addEventListener("click", function () {

            showScreen(wordsScreen);
            window.scrollTo(0, 0);

        });

    }


    // WORDS → FINAL MESSAGE

    if (messageButton) {

        messageButton.addEventListener("click", function () {

            showScreen(messageScreen);
            window.scrollTo(0, 0);

        });

    }


    // FINAL MESSAGE → FINAL SURPRISE

    if (finalButton) {

    finalButton.addEventListener("click", function () {

        showScreen(finalScreen);
        window.scrollTo(0, 0);

        createConfetti();

        if (birthdayMusic) {
            birthdayMusic.play();
        }

    });

}


    // CONFETTI 🎉

    function createConfetti() {

        for (let i = 0; i < 80; i++) {

            const piece = document.createElement("div");

            piece.className = "confetti-piece";
            piece.innerHTML = "🎉";

            piece.style.left = Math.random() * 100 + "vw";
            piece.style.animationDelay = Math.random() * 2 + "s";

            document.body.appendChild(piece);

            setTimeout(function () {
                piece.remove();
            }, 5000);

        }

    }

});