

function registerUser(){
    let userObject = {};
    let registeredUsername = document.getElementById("registeredUsername").value;
    let registeredPassword = document.getElementById("registeredPassword").value;

    userObject.username = registeredUsername;
    userObject.password = registeredPassword;

    console.log(userObject);

    fetch("/registerUser", {
        method: "POST", 
        headers: {
           'Content-Type':'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(response => response.text())
    .then(result => {
        console.log("result in client "+JSON.stringify(result));
        window.location = "/";
    }).catch(err => {
        console.log(err);
    });
}