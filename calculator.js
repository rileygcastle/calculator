const addNumber1 = document.getElementById("number-input1");
const addNumber2 = document.getElementById("number-input2");
const inputResult = document.getElementById("result");
const button1 = document.getElementById("calculatorBtn");
const addOutput = document.getElementById("result");
function addNumbers() {
  const number1 = addNumber1.value;
  const number2 = addNumber2.value;
  const realNumber1 = Number(number1);
  const realNumber2 = Number(number2);
  const sum = realNumber1 + realNumber2;
  //   console.log("heres the sum: ", sum);
  addOutput.innerHTML = sum;
}
button1.addEventListener("click", addNumbers);

const subNumber1 = document.getElementById("sub-number1");
const subNumber2 = document.getElementById("sub-number2");
const button2 = document.getElementById("sub-button");
const subOutput = document.getElementById("sub-result");

function subNumbers() {
  const number1 = subNumber1.value;
  const number2 = subNumber2.value;
  const realNumber1 = Number(number1);
  const realNumber2 = Number(number2);
  const sum = realNumber1 - realNumber2;
  console.log(sum);
  subOutput.innerHTML = sum;
}
button2.addEventListener("click", subNumbers);

const multNumber1 = document.getElementById("mult-number1");
const multNumber2 = document.getElementById("mult-number2");
const multOutput = document.getElementById("mult-result");
const button3 = document.getElementById("mult-button");

function multNumbers() {
  const number1 = multNumber1.value;
  const number2 = multNumber2.value;
  const realNumber1 = Number(number1);
  const realNumber2 = Number(number2);
  const sum = realNumber1 * realNumber2;
  multOutput.innerHTML = sum;
}
button3.addEventListener("click", multNumbers);

const diviNumber1 = document.getElementById("divi-number1");
const diviNumber2 = document.getElementById("divi-number2");
const diviOutput = document.getElementById("divi-result");
const button4 = document.getElementById("divi-button");

function diviNumbers() {
  const number1 = diviNumber1.value;
  const number2 = diviNumber2.value;
  const realNumber1 = Number(number1);
  const realNumber2 = Number(number2);
  const sum = realNumber1 / realNumber2;
  diviOutput.innerHTML = sum;
}
button4.addEventListener("click", diviNumbers);
