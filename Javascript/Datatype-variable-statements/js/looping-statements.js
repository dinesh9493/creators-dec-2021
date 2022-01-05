let listOfLoopingStatements = [
    { name: "for" },
    { name: "while" },
    { name: "do while" },
    { name: "forEach" },
    { name: "for in" },
];

const wrapperOfLoops = document.getElementById("list-of-loops");

function addTitleForLi(name) {
    let elem = document.createElement("li");
    elem.innerHTML = name;
    elem.classList.add("primary");
    wrapperOfLoops.appendChild(elem);
}

function loadLoopsInHtml() {
    addTitleForLi("FOR LOOP");
    for (let i = 0; i < listOfLoopingStatements.length; i++) {
        addTitleForLi(listOfLoopingStatements[i].name);
    }

    addTitleForLi("WHILE LOOP");

    let i = 0;
    while (i < listOfLoopingStatements.length) {
        addTitleForLi(listOfLoopingStatements[i].name);    
        i++;
    }

    addTitleForLi("DO WHILE LOOP");

    i = 0;
    do {
        addTitleForLi(listOfLoopingStatements[i].name);
        i++;
    } while (i < listOfLoopingStatements.length);

    addTitleForLi("FOR EACH LOOP");

    listOfLoopingStatements.forEach((eachItemOneByOne) => {
        addTitleForLi(eachItemOneByOne.name);
    });
}