let boughtItems = [], unboughtItems = [];


function addItem() {
    let itemToAdd = document.getElementById("item-to-add").value;
    let newLi = document.createElement("li");
    newLi.innerHTML = itemToAdd;
    newLi.setAttribute("onclick", "toggleLine(this);");
    newLi.setAttribute("class", "prevent-select");
    newLi.style.textDecoration = "none";
    document.getElementById("grocery-list").appendChild(newLi);
}

function toggleLine(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
}

function filterNotBought() {
    unboughtItems = [];
    let list = document.getElementById("grocery-list").childNodes;
    for (let i = list.length - 1; i > -1; i--) {
        if (list[i].style.textDecoration === "line-through") {
            unboughtItems.push(list[i]);
            list[i].parentNode.removeChild(list[i]);
        }
    }
    boughtItems.forEach((element) => {
        document.getElementById("grocery-list").appendChild(element);
    })
}

function filterBought() {
    boughtItems = [];
    let list = document.getElementById("grocery-list").childNodes;
    for (let i = list.length - 1; i > -1; i--) {
        if (list[i].style.textDecoration !== "line-through") {
            boughtItems.push(list[i]);
            list[i].parentNode.removeChild(list[i]);
        }
    }
    unboughtItems.forEach((element) => {
        document.getElementById("grocery-list").appendChild(element);
    })
}

function filterAll() {
    unboughtItems.forEach((element) => {
        document.getElementById("grocery-list").appendChild(element);
    })
    boughtItems.forEach((element) => {
        document.getElementById("grocery-list").appendChild(element);
    }) 
}