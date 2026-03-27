function showMessage(){
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(email === "" || message === ""){
        alert("Please fill all fields!");
    } else {
        alert("Message Sent Successfully!");
    }
}