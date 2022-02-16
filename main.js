let input = document.getElementById("inputField");
let submit = document.getElementById("submitBtn");

let listBox = document.getElementById("listBox"); //där alla items skall displayas 
let overlay = document.querySelector(".overlay");



input.addEventListener("keyup", function (e) {
    let iValue = input.value;
    if (e.key === "Enter" && iValue.length > 0) {
        submit.click(iValue);
    }
});

submit.addEventListener("click", function () {
    let iValue = input.value;
    let regex = /^[0-9a-zA-ZåäöÅÄÖ ]+$/;
    if (iValue.length > 0 && iValue.match(regex) && iValue != " ") {
        generateItem(iValue);
        clearInput();
    } else {
        clearInput();
        alertBox();
    }
});

function generateItem(item) {

    let newItem = document.createElement("div");
    newItem.classList.add("list-item");

    let itemTitle = document.createElement("p");
    itemTitle.classList.add("item-title");
    itemTitle.innerHTML = item;
    itemTitle.style.color = "black";

    let itemCheck = document.createElement("p");
    itemCheck.classList.add("item-check");
    itemCheck.innerHTML = "&#128504;";

    let itemDelete = document.createElement("p");
    itemDelete.classList.add("item-delete");
    itemDelete.innerHTML = "&#10799;";

    newItem.appendChild(itemTitle);
    newItem.appendChild(itemCheck);
    newItem.appendChild(itemDelete);
    listBox.appendChild(newItem);

    itemCheck.addEventListener("click", function () {
        checkItem(itemTitle);
    })

    itemDelete.addEventListener("click", function () {
        deleteItem(newItem);
    })
}

function deleteItem(item) {
    item.remove();
}

function checkItem(item) {
    if (item.style.color == "black") {
        item.style.color = "green";
    } else {
        item.style.color = "black";
    }
}

function clearInput() {
    input.value = "";
}

function alertBox() {

    overlay.style.display = "block";
    let overlayContent = document.querySelector(".overlay-content");

    let alertMsg = document.createElement("p");
    alertMsg.classList.add("alert-msg");
    alertMsg.innerHTML = "Only letters and numbers are allowed!";

    overlayContent.appendChild(alertMsg);
    overlay.addEventListener("click", function () {
        clearModal();
    });

    function clearModal() {
        overlay.style.display = "none";
        alertMsg.innerHTML = "";
    }
}