const container=document.querySelector('.container');
const Log=document.querySelector('.log');
const Logg=document.querySelector('.log.animate');
const sign=document.querySelector('.sign.animate');
const signn=document.querySelector('.sign');
const rememberMe = document.getElementById('remeberMe');
Log.onclick = () => {
    container.classList.add('active');}
Logg.onclick = () => {
    container.classList.add('active');
}
sign.onclick = () => {
    container.classList.remove('active');
}
signn.onclick = () => {
    container.classList.remove('active');
}
const form= document.getElementById('form');
const username= document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        console.log("Validation passed. Account saved.");
        window.location.href = 'home.html';
    } else {
        console.log("Validation failed");
    }
});
const setError=(element,message)=>{
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    errorDisplay.style.backgroundColor = 'rgb(255, 153, 221)'; 
    errorDisplay.style.color = 'black'; 
}
const setSuccess=element =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match.");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid;
};

const input = document.getElementById("password");
const input2 = document.getElementById("password2");
const button = document.querySelector("button");
const butt = document.getElementById("eye");
button.addEventListener("click", function () {
    if (input.type === "password") {
    input.type = "text";
    } else {
    input.type = "password";
    }
});
butt.addEventListener("click", function () {
    if (input2.type === "password") {
        input2.type = "text";
        } else {
        input2.type = "password";
        }
});
const inputt1 = document.getElementById("passwordd");
const butEye = document.getElementById("eye1");
butEye.addEventListener("click", function () {
    if (inputt1.type === "password") {
    inputt1.type = "text";
    } else {
    inputt1.type = "password";
    }
});
const form2 = document.getElementById('form2');
const email2 = document.getElementById('email2');
const passwordd = document.getElementById('passwordd');

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs2()) {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (email2.value === savedEmail && passwordd.value === savedPassword) {
            console.log('Login successful');

            // if (rememberMe.checked) {
            //     localStorage.setItem('authToken', 'secureAuthToken');
            //     console.log('Token saved in localStorage');
            // }
            if (rememberMe.checked) {
                // Store email and password in localStorage if "Remember Me" is selected
                localStorage.setItem('savedEmail', email2.value);
                localStorage.setItem('savedPassword', passwordd.value);
                console.log('Credentials saved in localStorage for future login');
            } else {
                // Clear saved email and password if "Remember Me" is not selected
                localStorage.removeItem('savedEmail');
                localStorage.removeItem('savedPassword');
            }


            window.location.href = 'products.html';
        } else {
            setError2(email2, 'This account is not found.');
        }
    } else {
        console.log('Validation failed for login');
    }
});
const setError2 = (element, message) => {
    const inputControl2 = element.parentElement;
    const errorDisplay2 = inputControl2.querySelector('.error'); 

    errorDisplay2.innerText = message;
    inputControl2.classList.add('error');
    inputControl2.classList.remove('success');
    errorDisplay2.style.backgroundColor = 'rgb(255, 153, 221)';
    errorDisplay2.style.color = 'black';
};

const setSuccess2 = (element) => {
    const inputControl2 = element.parentElement;
    const errorDisplay2 = inputControl2.querySelector('.error'); 
    errorDisplay2.innerText = ''; 
    inputControl2.classList.add('success');
    inputControl2.classList.remove('error');
};

const isValidEmail2 = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs2 = () => {
        const emailValue2 = email2.value.trim();
        const passwordValue2 = passwordd.value.trim();
        let isValid = true;
    
        if (emailValue2 === '') {
            setError2(email2, 'Email is required');
            isValid = false;
        } else if (!isValidEmail2(emailValue2)) {
            setError2(email2, 'Provide a valid email address');
            isValid = false;
        } else {
            setSuccess2(email2);
        }
    
        if (passwordValue2 === '') {
            setError2(passwordd, 'Password is required');
            isValid = false;
        } else if (passwordValue2.length < 8) {
            setError2(passwordd, 'Password must be at least 8 characters.');
            isValid = false;
        } else {
            setSuccess2(passwordd);
        }
    
        return isValid;
    };
    

// Function to pre-fill the login form with saved credentials
window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    
    if (savedEmail && savedPassword) {
        // Pre-fill the email and password fields with saved values
        email2.value = savedEmail;
        passwordd.value = savedPassword;
        rememberMe.checked = true; // Check the "Remember Me" box if credentials are pre-filled
        console.log('Pre-filled login form with saved credentials');
    }
});
