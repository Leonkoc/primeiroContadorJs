let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;
const resp1 = document.querySelector("h3");

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  resp1.innerText = `O número selecionado é ${currentNumber}`;
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  resp1.innerText = `O número selecionado é ${currentNumber}`;
}

console.log(typeof currentNumber);
