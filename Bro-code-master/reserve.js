let fullname;
let price;
let email;
document.getElementById("submit").onclick = function(){
    fullname = document.getElementById("name").value;
    console.log("Fullname:",fullname);
    price = document.getElementById("number").value;
    console.log("Price: $",price);
    email = document.getElementById("email").value;
    console.log("Email:",email);
    if(fullname === `` || price === `` || email === ``) {
        alert("SORRY PLEASE FILL THE FORM TO CONTINUE!");
        return false;
    }
    else if(male.checked){
        console.log("Male");
    }
    else if(female.checked){
        console.log("Female");
    }
    else{
        alert(`Hello, ${fullname}, your request is being processed`);
    }
}