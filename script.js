// Selectors
const Form = document.querySelector('.input__wrapper');
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const Btn = document.querySelector('.btn');
const Result = document.querySelector('.result');
const EmailTest = document.querySelector('.subtext');
const PasswordTest = document.querySelector('.subtext2');

// RegEx
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PasswordEasyRegEx = /^.{6,}$/;
const PasswordMediumRegEx = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const PasswordHardRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

// Disable btn
Btn.disabled = true;

// Functions
function checkForm() {
    const emailVal = Email.value.trim();
    const passwordVal = Password.value.trim();

    if (emailVal === "") {
        EmailTest.textContent = "";
        Email.style.border = "1px solid #fff";
    } else if (emailRegEx.test(emailVal)) {
        EmailTest.textContent = "Valid";
        EmailTest.style.color = "#00ff00ff";
        Email.style.border = "1px solid #00ff00ff";
    } else {
        EmailTest.textContent = "Invalid";
        EmailTest.style.color = "#ff0000ff";
        Email.style.border = "1px solid #ff0000ff";
    }

    if (passwordVal === "") {
        PasswordTest.textContent = "";
        Password.style.border = "1px solid #fff";
    } else if (PasswordHardRegEx.test(passwordVal)) {
        PasswordTest.textContent = "Strong (Hard)";
        PasswordTest.style.color = "#ff6600ff";
        Password.style.border = "1px solid #ff6600ff";
    } else if (PasswordMediumRegEx.test(passwordVal)) {
        PasswordTest.textContent = "Medium";
        PasswordTest.style.color = "#ffc400ff";
        Password.style.border = "1px solid #ffc400ff";
    } else if (PasswordEasyRegEx.test(passwordVal)) {
        PasswordTest.textContent = "Easy";
        PasswordTest.style.color = "#00ff00ff";
        Password.style.border = "1px solid #00ff00ff";
    } else {
        PasswordTest.textContent = "Too weak";
        PasswordTest.style.color = "#ff0000ff";
        Password.style.border = "1px solid #ff0000ff";
    }

    if (emailRegEx.test(emailVal) && (PasswordEasyRegEx.test(passwordVal) || PasswordMediumRegEx.test(passwordVal) || PasswordHardRegEx.test(passwordVal))) {
        Btn.disabled = false;
    } else {
        Btn.disabled = true;
    }
}

// Event listenerlar
Email.addEventListener("input", checkForm);
Password.addEventListener("input", checkForm);

// Submit
Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailVal = Email.value.trim();
    const passwordVal = Password.value.trim();

    const List = document.createElement('div');
    List.classList.add('list');

    List.innerHTML = `
        <div class="item">Email: <span class="value">${emailVal}</span></div>
        <div class="item">Password: <span class="value">${passwordVal}</span></div>
        <button class="deleteBtn">Delete</button>
    `;
    Result.appendChild(List);

    const deleteBtn = List.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        List.remove();
    });

    Email.value = '';
    EmailTest.textContent = '';
    Email.style.border = '1px solid #fff';
    Password.value = '';
    PasswordTest.textContent = '';
    Password.style.border = '1px solid #fff';
    Btn.disabled = true;
});
