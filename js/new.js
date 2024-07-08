
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value} 
     Email: ${email. value} 
     Phone Number: ${phone.value } 
     Message: ${mess.value}`;

function sendEmail() {
Email.send({
Host: "smtp.elasticemail.com",
Username:"projectexample66@gmail.com",
Password:"2F7FB38656B35C9CF66DF3EFA1EA71CEC77D",
To: 'projectexample66@gmail.com',
From: "projectexample66@gmail.com", 
Subject: "This is the subject", 
Body: "And this is the body"
}).then(message => {
    if(message == "ok"){
        FileSystemWritableFileStream.fire({
            title: " success",
            text:"Message sent !",
            icon:"success"
        });
    }
}
);
}
function checkInputs(){
    const items = document.querySelectorAll(".item");
    
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () =>{
            if(item.value !=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


form.addEventListener("submit", (e) => {
e.preventDefault();
sendEmail();
});
}ā