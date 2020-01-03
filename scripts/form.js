const form = document.querySelector("#contact-form");

const nameField = document.querySelector(".field-name");
const emailField = document.querySelector(".field-email");
const messageField = document.querySelector(".field-message");

let nameCheck = false;
let emailCheck = false;
let messageCheck = false;

const regexValidation  = (field) =>{
    if(field==='name'){
        const usernamePattern = /^.{3,}/;

        userInput = nameField.children[1].value.trim();
        if(usernamePattern.test(userInput)){
            nameField.children[1].setAttribute("style","border-color: green");
            nameCheck = true;
        }
        else if((usernamePattern.test(!userInput))){
            nameField.children[1].setAttribute("style","border-color: red");
            nameCheck = false;
        }
    }

    else if(field==='email'){
       const emailPattern = /\S+@\S+\.\S+/;
       userInput = emailField.children[1].value.trim();

       if(emailPattern.test(userInput)){
        emailField.children[1].setAttribute("style","border-color: green");
        emailCheck = true;
    }
    else if((emailPattern.test(!userInput))){
        emailField.children[1].setAttribute("style","border-color: red");
        emailCheck = false;
    }
    }

    else if(field==='message'){
        const messagePattern = /^.{3,}/;

        userInput = messageField.children[1].value.trim();
        if(messagePattern.test(userInput)){
            messageField.children[1].setAttribute("style","border-color: green");
            messageCheck = true;
        }
        else if((messagePattern.test(!userInput))){
            messageField.children[1].setAttribute("style","border-color: red");
            messageCheck = false;

        }

    }
}


const fields = document.querySelectorAll(".field");

fields.forEach(field =>{
    field.addEventListener("keyup", e =>{
        const current = field.children[1].name;
        regexValidation(current);
    })
});

function validateForm(){
    console.log(nameCheck);
    return nameCheck && emailCheck && messageCheck;
}