```javascript
function showMessage() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Success message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
```
