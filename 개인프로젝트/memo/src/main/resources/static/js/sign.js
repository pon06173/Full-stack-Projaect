function validateForm() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;

    // Regular expression for a simple email format validation
    var emailRegex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailRegex)) {
        alert("올바른 이메일 형식이 아닙니다.");
        emailInput.focus();
        return false;
    }

    return true;
}