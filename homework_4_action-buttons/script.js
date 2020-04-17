let mainButton = document.getElementById("mainButton");
const mainText = "Interesting button";

function clickChange() {
    if (mainButton.classList.contains('bigger')) {
        mainButton.classList.remove('bigger');
    }
    else {
        mainButton.classList.add('bigger');
    };
}

function mouseOver(event) {
	mainButton.innerText = "Mouse is here";
	mainButton.classList.add('changed-color');
}

function mouseLeave(event) {
	mainButton.innerText = mainText;
	mainButton.classList.remove('changed-color');
}

mainButton.addEventListener("click", clickChange);
mainButton.addEventListener("mouseover", mouseOver);
mainButton.addEventListener("mouseleave", mouseLeave);

// 2 button

let bonusButton = document.getElementById("bonusButton");
let hiddenButton = document.getElementById("hiddenButton");

function bonusMouseOver(event) {
    hiddenButton.style.display = "block";
}

function bonusMouseLeave(event) {
    hiddenButton.style.display = "none";
}

bonusButton.addEventListener("mouseover", bonusMouseOver);
bonusButton.addEventListener("mouseleave", bonusMouseLeave);

// 3 button
let tooltipButton = document.getElementById("tooltipButton");
let lastBlock = document.getElementById("lastBlock");

const ttBox = document.createElement("div");
ttBox.id = "tooltip";
ttBox.classList.add('tooltip');
ttBox.style.visibility = "hidden";
lastBlock.appendChild(ttBox);

const ttTurnOn = ((evt) => {
    const boundBox = evt.target.getBoundingClientRect();
    const coordX = boundBox.left;
    const coordY = boundBox.top;

    ttBox.style.left = (coordX + 20).toString() + "px";
    ttBox.style.top = (coordY + 50).toString() + "px";

    ttBox.innerHTML = "This is tooltip!!!";

    ttBox.style.visibility = "visible";
});

const ttTurnOff = (() => { ttBox.style.visibility = "hidden"; });

tooltipButton.addEventListener("mouseover", ttTurnOn , false);
tooltipButton.addEventListener("mouseout", ttTurnOff , false);
document.getElementById("tooltip") . addEventListener("click", ttTurnOff , false);











