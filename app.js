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

// Check input length

// Form validation
const form = document.getElementById("payment__form");
const cardnumber = document.getElementById("cardnumber");
const cardname = document.getElementById("cardname");
const month = document.getElementById("month");
const year = document.getElementById("years");
const formcvv = document.getElementById("form-cvv");

// Show input error messege
function showError(input, messege) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = messege;
  // const option = option.parentElement;
  // option.selectedIindex = option.options[option.selectedIndex].value;
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (cardnumber.value < 16) {
    showError(cardnumber, "Card number must be 16 digits");
  }

  if (cardname.value === "") {
    showError(cardname, "Card holder is required");
  }

  if (month.value === "month") {
    showError(month, "required");
  }

  if (year.value === "years") {
    showError(year, "required");
  }

  if (formcvv.value == 3) {
    showError(formcvv, "CVV number must be 3 digits");
  }
});

checkLength(cardnumber, 1, 16);
checkLength(formcvv, 1, 3);
