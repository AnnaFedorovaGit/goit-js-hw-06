
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const value = event.target.value;
    if (!value) { 
        output.textContent = "Anonymous";
        return;
    }
    output.textContent = value;
});