let currentResult = 0;
let logEntries = [];

// Gets the user input  and parse it to an integer.
function getUserNumber() {
  return parseInt(userInput.value);
}

// Gtes the date and send them to be printed with the outpuatResult
function createAndWriteOutput(operator, resultBeforcal, calcNumber) {
  const calcDescription = `Previous result ${resultBeforcal} ${operator} Entered number ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Creates an function with an objetc wich will get the data entered and push them to an string.
// logEntry is the object we have created.
// writeToLog is the function that gets the data from  the user.
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevresult: prevResult,
    inputNumber: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType === "ADD" ||
    calculationType === "subtract" ||
    calculationType === "multiply" ||
    calculationType === "divide" ||
    enteredNumber === 0
  ) {
    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    let operationStr;
    if (calculationType === "ADD") {
      currentResult += enteredNumber;
      operationStr = "+";
    } else if (calculationType === "subtract") {
      currentResult -= enteredNumber;
      operationStr = "-";
    } else if (calculationType === "multiply") {
      currentResult *= enteredNumber;
      operationStr = "*";
    } else if (calculationType === "divide") {
      currentResult /= enteredNumber;
      operationStr = "/";
    }
    createAndWriteOutput(operationStr, initialResult, enteredNumber);
    // write log function gets the data entered by the user
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function add() {
  calculateResult("ADD");
}

function subtratct() {
  calculateResult("subtract");
}

function multiply() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtratct);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
