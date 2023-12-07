//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const contactform = document.getElementById("contactForm");


//Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;
    

if(nameInput.value.length < 1) {
  errorNodes[0].innerText = "Name cannot be blank";
  nameInput.classList.add("error-border");
  errorFlag = true;
 }
 if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
 }
 if(message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
 } 
 if(!errorFlag) {
    success.innerText = "Success!";
 }
}

function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//Check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
    
}

contactform.addEventListener("submit", (e) => {
    e.preventDefault();
  
   
  
    if (nameInput.value == "" || email.value == "" || message.value  == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a username of ${nameInput.value} and email of ${email.value} confirmation message${message.value}`
      );
  
      nameInput.value = "";
      email.value = "";
      message.value = "";

    }
  });
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}




