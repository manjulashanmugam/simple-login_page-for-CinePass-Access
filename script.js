var form = document.getElementById("regForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");

var errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    password: document.getElementById("passwordError")
};

function validateName() {
    if (nameInput.value.trim() === "") {
        errors.name.textContent = "Name is required";
        return false;
    }
    errors.name.textContent = "";
    return true;
}

function validateEmail() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value)) {
        errors.email.textContent = "Enter valid email";
        return false;
    }
    errors.email.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        errors.password.textContent = "Minimum 6 characters";
        return false;
    }
    errors.password.textContent = "";
    return true;
}

function validateForm() {
    var valid =
        validateName() &&
        validateEmail() &&
        validatePassword();

    submitBtn.disabled = !valid;
}

[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener("input", validateForm);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎬 CinePass created successfully!");
    form.reset();
    submitBtn.disabled = true;
});

/* Show / Hide password */
function togglePassword() {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
}
