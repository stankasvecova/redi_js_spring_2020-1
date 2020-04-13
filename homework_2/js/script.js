let goodBtn = document.getElementById("goodBtn");
let badBtn = document.getElementById("badBtn");
let answer = document.getElementById("answer");

function goodBtnClick() {
    answer.textContent = "That's great!";
    console.log("That's really good!!")
}

function badBtnClick() {
    answer.textContent = "That's bad ...";
    console.log("That's really bad..")
}

goodBtn.addEventListener("click", goodBtnClick);
badBtn.addEventListener("click", badBtnClick);

let burgerBtn = document.getElementById("burgerBtn");
function burgerAction () {
    alert ("You pressed Burger-Button!");
    console.log ("You really pressed this button!");
}

burgerBtn.addEventListener("click", burgerAction);