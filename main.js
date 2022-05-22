const customButton = document.querySelector("button");
const customLabel = document.querySelector(".label");
const customText = document.querySelector("#counter");
const customInput = document.querySelector("input");

customLabel.classList.add("active");
// customLabel.classList.remove('label');

function clickHandler() {
    customText.innerText = parseInt(customText.innerText) + 1;
}

function changeHandler(event) {
    console.log(event.target.value);
}

customButton.addEventListener("click", clickHandler);
customInput.addEventListener("change", changeHandler);