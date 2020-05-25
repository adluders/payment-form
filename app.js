const numberInput = document.getElementById("cardnumber"),
  nameInput = document.getElementById("cardname"),
  verificationInput = document.getElementById("form-cvv"),
  cardNum = document.getElementById("card-numbers"),
  cardHolder = document.getElementById("card-name"),
  cardExpiration = document.getElementById("card-expiration"),
  cardDatePicker = document.querySelector(`input[type="date"]`);

console.log(verificationInput);

function updateCardNum(e) {
  cardNum.value = e.target.value;
}

function updateCardHolder(e) {
  cardHolder.value = e.target.value;
}

function updateExpiration(e) {
  cardExpiration.value = e.target.value;
}

function getCardDate() {
  const cardMonth = cardDatePicker.value.split("-")[1];
  const cardDate = cardDatePicker.value.split("-")[2];

  let fullDate;

  cardMonth && cardDate
    ? (fullDate = `${cardMonth} / ${cardDate}`)
    : (fullDate = ` 00/ 00`);

  console.log(fullDate);

  cardExpiration.value = fullDate;
}

numberInput.addEventListener("keyup", updateCardNum);
nameInput.addEventListener("keyup", updateCardHolder);
// cardDatePicker.addEventListener("input", getCardDate);

// Form

const years = document.getElementById("years");

const currYear = new Date().getFullYear();

for (let i = currYear; i < currYear + 5; i++) {
  const newOption = document.createElement("option");
  newOption.className = "year-options";
  newOption.innerHTML = i;
  newOption.value = i;
  years.appendChild(newOption);
}
