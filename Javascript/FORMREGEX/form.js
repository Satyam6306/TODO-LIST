const form = document.querySelector('form')
const email = document.querySelector("#email")
const password= document.querySelector("#password")
const button =document.querySelector("button")
const message = document.querySelector("#message")
const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

form.addEventListener("submit", function(e){
e.preventDefault();
const emailValue = email.value;
const passwordValue = password.value;
const testEmail = emailRegex. test(emailValue)
const testPassword = passwordRegex. test (passwordValue)

if(!testEmail) {
message. textContent = "Invalid Email"
message.style.color="red";
return;

}
if(!testPassword) {
    message.textContent="pswrd must b uppercase or lower case or nnumber"

    testPassword.style.color="red";
    return;
}
if(testEmail && testPassword){
    message.textContent="submit sucessfully"
    message.style.color="blue";
}

})