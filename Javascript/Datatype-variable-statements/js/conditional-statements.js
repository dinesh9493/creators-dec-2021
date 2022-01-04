const conditionalStatementElement = document.getElementById("conditional-statements");

function checkIfonly(param1) {
    if (param1) {
        conditionalStatementElement.innerHTML = `"ONLY If" part is executed...`;
    }

    if (param1)
        conditionalStatementElement.innerHTML = `"ONLY If" part is executed...`;
}

function checkIfElse(param1) {
    if (param1) {
        conditionalStatementElement.innerHTML = `"if" part is executed...`;
    } else {
        conditionalStatementElement.innerHTML = `"else" part is executed...`;
    }
}

function checkIfElseIf(param1) {
    if (typeof param1 === "string") {
        conditionalStatementElement.innerHTML = `It is a STRING parameter`;
    } else if (typeof param1 === "number") {
        conditionalStatementElement.innerHTML = `It is a NUMBER parameter`;
    } else if (typeof param1 === "boolean") {
        conditionalStatementElement.innerHTML = `It is a BOOLEAN parameter`;
    } else {
        conditionalStatementElement.innerHTML = `Could not find the type of the parameter`;
    }
}

function checkSwitch(param1) {
    switch (typeof param1) {
        case "string": {
            conditionalStatementElement.innerHTML = `It is a STRING parameter`;
        };
            break;
        case "number": {
            conditionalStatementElement.innerHTML = `It is a NUMBER parameter`;
        };
            break;
        case "boolean": {
            conditionalStatementElement.innerHTML = `It is a BOOLEAN parameter`;
        };
            break;
        default: {
            conditionalStatementElement.innerHTML = `Could not find the type of the parameter`;
        };
            break;
    }
}