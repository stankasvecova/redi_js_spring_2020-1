let list = document.getElementById("list");
let input = document.getElementById("input");
let addNumberBtn = document.getElementById("addNumberBtn");
let sum = document.getElementById("sum");
let summary = 0;

function addNumber() {
    const newNum = input.value;
    const addNum = document.createElement('li');
    addNum.textContent = newNum;
    list.appendChild(addNum);
    input.value = "";

    summary = summary + parseFloat(newNum);
    sum.textContent = summary;
}
addNumberBtn.addEventListener("click", addNumber);

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addNumber();
    }
});


let input2 = document.getElementById("input2");
let addBtn2 = document.getElementById("addBtn2");
let list2 = document.getElementById("list2");

function addProduct() {
    const newProduct = input2.value;
    const addProduct = document.createElement('li');
    addProduct.textContent = newProduct;
    addProduct.style.textDecoration = "none";
    list2.appendChild(addProduct);
    input2.value = "";
    addProduct.addEventListener("click", function() {
        if (event.target.style.textDecoration === "none") {
            event.target.style.textDecoration = "line-through";
        } 
        else {
            event.target.style.textDecoration = "none";
        }
    });
};
addBtn2.addEventListener("click", addProduct);
input2.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addProduct();
    }
});




