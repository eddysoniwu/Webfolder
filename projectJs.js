let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email")
password = id("password")
label = id("label")

errorMsg = classes("error")
successicon = classes("success-icon");
failureicon = classes("failure-icon");

label.addEventListener("submit",(e)=> {
    e.preventDefault();
    engine(username, 0, "username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "password cannot be blank")
    let password = serial.password.target.value;
    // save the password
});

let engine = (id, serial, message) => {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "3% solid red"
        //icons
        failureicon[serial].style.opacity = "1"
    }
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "3% solid green";
        //icons
        successicon[serial].style.opacity = "1"
        failureicon[serial].style.opacity = "0"        
    }
    console.log(serial)
}