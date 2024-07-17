
document.getElementById('varun').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirm = document.getElementById('confirm').value.trim();
    
    
    if (name === "") {
        alert("Name is required.");
        event.preventDefault();
        return;
    }
    
    if (email === "") {
        alert("Email is required.");
        event.preventDefault();
        return;
    }
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }
    
    if (mobile === "") {
        alert("Mobile number is required.");
        event.preventDefault();
        return;
    }
    
    if (!/^\d+$/.test(mobile)) {
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
    }
    
    if (password === "") {
alert("Password is required.");
event.preventDefault();
return;
}

if (password !== confirm) {
alert("Passwords do not match.");
event.preventDefault();
return;
}
   
});
