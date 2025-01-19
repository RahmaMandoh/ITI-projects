// Simple Calculator. Implement the required functions in an external file to let calculator.html

var Answer = document.getElementById("Answer");
// console.log(Answer);

function EnterNumber(value){
    Answer.value += value;
}

function EnterOperator(value) {
    Answer.value += value;
}

function EnterClear() {
    Answer.value = "";
}

function EnterEqual() {
    try {
        Answer.value = eval(Answer.value);
    } catch (error) {
        inputField.value = "Error";
    }
}