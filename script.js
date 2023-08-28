var user;
var yourPoints = 0;
var challenger;
var opponentScore = 0;

var inventory = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < inventory.length; i++) {
    
        let choice = document.createElement("img");
        choice.id = inventory[i];
        choice.src = inventory[i] + ".png";
        choice.classList.add("choice");
        choice.addEventListener("click", function () {
            if (selectedChoice) {
                selectedChoice.classList.remove("selected");
            }

            selectedChoice = choice;
            choice.classList.add("selected");

            user = inventory[i];
            playRound();
        });

        document.querySelector(".weapon-" + (i + 1)).style.backgroundImage = "url(" + inventory[i] + ".png)";

       
        document.getElementById("inventory").appendChild(choice);
    }
};

function playRound() {
    challenger = inventory[Math.floor(Math.random() * inventory.length)];
    document.getElementById("challenger-weapon").src = challenger + ".png";

    if ((user === "rock" && challenger === "scissors") ||
        (user === "paper" && challenger === "rock") ||
        (user === "scissors" && challenger === "paper")) {
        yourPoints++;
    } else if (user !== challenger) {
        opponentScore++;
    }

    document.getElementById("user-points").textContent = yourPoints;
    document.getElementById("challenger-points").textContent = opponentScore;
}

var selectedChoice = null;

    }
};

