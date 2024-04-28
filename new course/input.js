let username;
let age;
let state;
let password;
document.getElementById("sub").onclick = function(){
    username = document.getElementById("name").value;
    console.log(username);
    age = document.getElementById("number").value;
    console.log(age);
    state = document.getElementById("State").value;
    console.log(state);
    password = document.getElementById("pas").value;
    console.log(password);
    if(username === ``|| age === `` || state ===`` || password === `` ){
        alert("Please make sure you fill the form");
    }
   else{
    alert(`Hello ${username}, your request has been sent`);
   }
    
    
}