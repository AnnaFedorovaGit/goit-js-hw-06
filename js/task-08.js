
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();  
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    } 

    let userDatas = {};
    userDatas.email = email;
    userDatas.password = password;

    console.log(userDatas);
    form.reset();
}
