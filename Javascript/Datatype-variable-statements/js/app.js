var globalVariableForVarKeyword = "This will be accessible throughout the application";
let htmlElement = document.getElementById("variable-content-area");
function checkVarVariable() {
    var explanation = `"VAR" keyword is used to declare the global variables`;
    htmlElement.innerHTML = explanation;
}

function checkLetVariable() {
    let explanation = `"LET" keyword is used to declare a variable inside a block `;
    htmlElement.innerHTML = explanation;
}

function checkConstVariable() {
    const explanation = `"CONST" keyword is used to declare the non-editable variables`;
    htmlElement.innerHTML = explanation;
}
