var userScore = 0;
var challengerScore = 0;

var weapons = ["rock", "paper", "scissors"];
var selectedChoice = null;

window.onload = function () {
  const weaponImages = document.querySelectorAll(".weapon img");
  weaponImages.forEach((img) => {
    img.addEventListener("click", () => {
      if (selectedChoice) {
        selectedChoice.classList.remove("selected");
      }

      selectedChoice = img;
      selectedChoice.classList.add("selected");

      const userWeapon = img.getAttribute("data-weapon");

      playRound(userWeapon);
    });
  });
};

function playRound(userWeapon) {
  const challengerWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  document.getElementById("user-weapon-img").src = `${userWeapon}.png`;
  document.getElementById(
    "challenger-weapon-img"
  ).src = `${challengerWeapon}.png`;

  if (userWeapon === challengerWeapon) {
  } else if (
    (userWeapon === "rock" && challengerWeapon === "scissors") ||
    (userWeapon === "paper" && challengerWeapon === "rock") ||
    (userWeapon === "scissors" && challengerWeapon === "paper")
  ) {
    userScore++;
  } else {
    challengerScore++;
  }
  document.getElementById("user-points").textContent = userScore;
  document.getElementById("challenger-points").textContent = challengerScore;
}
