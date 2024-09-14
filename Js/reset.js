const password = document.getElementById("password");
const Eye = document.getElementById("eye1");
const Eye2 = document.getElementById("eye2");
const password2=document.getElementById("password2");
Eye.addEventListener("click", function () {
    if (password.type === "password") {
    password.type = "text";
    } else {
    password.type = "password";
    }
});
Eye2.addEventListener("click", function () {
    if (password2.type === "password") {
        password2.type = "text";
    } else {
        password2.type = "password";
    }
});
const form= document.getElementById('form');
form.addEventListener('submit',e=>{
e.preventDefault();
if(validateInputs()){
    console.log("Validation passed");
    window.location.href='home.html';
}
else{
    console.log("Validation failed");
}
});
const setError=(element,message)=>{
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    // inputControl.classList.add('error');
    inputControl.classList.remove('success');
    errorDisplay.style.color = 'rgb(255, 153, 221)'; 
    errorDisplay.style.display = 'block'; 
    errorDisplay.style.marginTop = '2px'; 

}
const setSuccess=element =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    errorDisplay.style.display = 'none'; 
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = () =>{
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim();
    let isValid = true;

    if(passwordvalue ===''){
        setError(password,'Password is required');
        isValid = false;
    }else if(passwordvalue.length < 8){
        setError(password,'Password must be at least 8 character.')
        isValid = false;
    }
    else{
        setSuccess(password);
    }
    if(password2value===''){
        setError(password2,'Please confirm your password');
        isValid = false;
    }
    else if(password2value !== passwordvalue){
        setError(password2 ,"Passwords doesn't match.");
        isValid = false;
    }
    else{
        setSuccess(password2);
    }
    return isValid;
};
const reset= document.getElementsByClassName('button2')[0];

reset.addEventListener('click', function () {
    if (validateInputs()) {
        password.value = '';
        password2.value = '';
        setSuccess(password);
        setSuccess(password2);
        const saved= window.localStorage.getItem('password.value');
    console.log(saved);
        window.alert('Password Changed');
        window.location.href='home.html';
    } else {
        setError(password,'Password is required');
        window.alert("Password not changed");
        setError(password2,'Please confirm your password');
    }
});

