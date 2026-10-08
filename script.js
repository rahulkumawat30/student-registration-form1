let studentForm = document.getElementById("studentForm");

let name = document.getElementById("name");
let fname = document.getElementById("fname");
let mname = document.getElementById("mname");
let dob = document.getElementById("dob");

let email = document.getElementById("email");
let tel = document.getElementById("tel");
let address = document.getElementById("address");

let course = document.getElementById("course");
let qualification = document.getElementById("qualification");
let passing = document.getElementById("passing");
let percentage = document.getElementById("percentage");

let message = document.getElementById("message");
let nameError = document.getElementById("nameError");
let fnameError = document.getElementById("fnameError");
let mnameError = document.getElementById("mnameError");
let dobError = document.getElementById("dobError");
let emailError = document.getElementById("emailError");
let telError = document.getElementById("telError");
let courseError = document.getElementById("courseError");

studentForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    nameError.textContent = "";
    fnameError.textContent = "";
    mnameError.textContent = "";
    dobError.textContent = "";
    emailError.textContent = "";
    telError.textContent = "";
    courseError.textContent = "";

    if(name.value.trim() === ""){
        nameError.textContent = "Full name is required.";
        name.focus();
        return;
    }
    if(fname.value.trim() === ""){
        fnameError.textContent = "Father's name is required.";
        fname.focus();
        return;
    }
    if(mname.value.trim() === ""){
        mnameError.textContent = "Mother's name is required.";
        mname.focus();
        return;
    }
    if(dob.value === ""){
        dobError.textContent = "Date of birth is required.";
        dob.focus();
        return;
    }
    if(!male.checked && !female.checked && !other.checked){
        message.textContent = "Please select your gender.";
        return;
    }
    if(email.value.trim() === ""){
emailError.textContent = "Email is required.";
email.focus();
return;
    }
    if(!/^\d{10}$/.test(tel.value)){
        telError.textContent = "Enter a valid 10 digit mobile number.";
        tel.focus();
        return;
    }
    if(course.value === ""){
        courseError.textContent = "Please select a course.";
        course.focus();
        return;
    }
    message.textContent = "Registration submitted successfully!";
    message.style.color = "green";
});

function validateField(field, errorElement, message){
    if(field.value.trim() === ""){
        field.classList.add("error");
        field.classList.remove("valid");
        errorElement.textContent = message;
        return false;
    }
    field.classList.remove("error");
    field.classList.add("valid");
    return true;
}

name.addEventListener("blur", function(){
    validateField(name, nameError, "Full Name is required.");
});

fname.addEventListener("blur", function(){
 
    validateField(fname, fnameError, "Father's name is required.");
});

mname.addEventListener("blur", function(){
    validateField(mname, mnameError, "Mother's name is required.");
});

dob.addEventListener("blur", function(){
    validateField(dob, dobError, "Date of birth is required.");
});

email.addEventListener("blur", function(){
    validateField(email, emailError, "Email is required.");
});

course.addEventListener("blur", function(){
    validateField(course, courseError, "Please select a course.");
});
