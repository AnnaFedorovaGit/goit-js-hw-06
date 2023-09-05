
const textInput = document.querySelector("#validation-input");
const dataLengthValue = textInput.getAttribute('data-length');

textInput.addEventListener("blur", () => {
    if (+textInput.value.length !== +dataLengthValue) { 
        textInput.classList.add("invalid");
        return;
    }
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
}); 
