let username;
let number;
let email;
let password;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("name").value;
    console.log("Hello",username);
    number = document.getElementById("number").value;
    console.log("Phone number:",number);
    email = document.getElementById("email").value;
    console.log("Email:",email);
    password = document.getElementById("password").value;
    console.log("Password:",password);
    if(username === `` || number === `` || email === `` || password === ``) {
        alert("PLEASE FILL THE FORM!");
        return false;
    }
    else{
        alert(`HELLO ${username}, Your request has been sent`);
    }
}