async function loginUser(){
    let userObject = {};
    let registeredUsername = document.getElementById("loggedUsername").value;
    let registeredPassword = document.getElementById("loggedPass").value;

    userObject.username = registeredUsername;
    userObject.password = registeredPassword;

    console.log(userObject);

//request for login
   let resultOfLogin = await fetch("/loginUser", {
        method: "POST", 
        headers: {
           'Content-Type':'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(response => response.text())
    .then(result => {
        console.log("result in client for login "+result)
       if (result == "false"){
   
        window.location = "/notAllowed";
 
       }else if (result == "true"){

return "we can login"
       }
    }).catch(err => {
        console.log(err);
    });


if (resultOfLogin == "we can login"){
    localStorage.setItem("username",registeredUsername);
    localStorage.setItem("password",registeredPassword);

    localStorage.setItem("heatInSW", 0);
    localStorage.setItem("heatInNW", 0);
    localStorage.setItem("heatInSE", 0);
    localStorage.setItem("heatInNE", 0);
    localStorage.setItem("water", "none");
    localStorage.setItem("yourWater", "none");
    localStorage.setItem("steps", 0);

    window.location = "/mainPage/1";
}

}