const userInput = document.getElementById("test"),
  cardNum = document.getElementById("card-numbers"),
  cardHolder = document.getElementById("card-name"),
  cardExpiration = document.getElementById("card-expiration");

function updateCardNum(e) {
  cardNum.value = e.target.value;
}

function updateCardHolder(e) {
  cardHolder.value = e.target.value;
}

function updateExpiration(e) {
  cardExpiration.value = e.target.value;
}

userInput.addEventListener("keyup", updateExpiration);
