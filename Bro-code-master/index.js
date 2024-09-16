document.getElementById("mybutton").onclick = function(){
    const visaBtn = document.getElementById("visaBtn");
     const mastercardBtn = document.getElementById("mastercardBtn");
     const paypalBtn = document.getElementById("paypalBtn");
     if(visaBtn.checked){
        console.log("You are paying with a visa");
     }
     else if(mastercardBtn.checked){
        console.log("You are paying with a mastercard");
     }
     else if(paypalBtn.checked){
        console.log("You are paying with paypal");
     }
     else{
        console.log("You must pick one");
     }
}
let grade = 65;
switch(true){
    case grade >= 90:
    console.log("You did great");
    break;
    case grade >= 75:
    console.log("You did good");
    break;
    case grade >= 65:
    console.log("You did okay");
    break;
    default:
        console.log(grade,"is not a letter grade");
}
let age = window.prompt("How old are you");
age = Number(age); 
 age +=1
 console.log("happy birthday you are", age, "years old");
 let username = window.prompt("whats your name");
 username = (username);
 console.log("hello",username , "you are welcome");