const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const personalNumber = document.querySelector("#personal-number");
const mobileNumber = document.querySelector("#mobile-number");
const jobDescription = document.querySelector("#job-description");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");
const jobDescriptionError = document.querySelector("#job-description-error");

function checkUserName() {
	if (nameInput.value.trim() === "") {
		nameError.textContent = "Enter your name";
		nameInput.classList.remove("correct");
		nameInput.classList.add("error");
		return false;
	}  else {
		nameError.textContent = "";
		nameInput.classList.remove("error");
		nameInput.classList.add("correct");
		return true;
	}
}
function cheCkEmail(){
    if(emailInput.validity.valid===false){
        emailError.textContent="Email is need to be field";
        emailInput.classList.add("error")
        if(emailInput.validity.typeMismatch){
            emailError.textContent="Enter correct email";
            return false
        }
    }else{
        emailError.textContent="";
        emailInput.classList.add("correct");
        emailInput.classList.remove("error")
        return true
    }
}

function PersonalNumber(){
    if(personalNumber.value.trim()===""){
        personalNumberError.textContent="personal number is needed";
        personalNumber.classList.add("error");
        personalNumber.classList.remove("correct")
        return false
    }
    else if( typeof personalNumber != 'number'){
        personalNumberError.textContent = "fill with numbers";
		personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		return false;
    }
    else if (personalNumber.value.length != 11){
        personalNumberError.textContent = "only 11 characters";
        personalNumber.classList.remove("correct");
		personalNumber.classList.add("error");
		return false;
    }
    else{
        personalNumberError.textContent="";
        personalNumber.classList.add('correct');
        personalNumber.classList.remove('error');
        return true
    }
}
function mobile(){
    if(mobileNumber.value===""){
        mobileNumberError.textContent="your number";
        mobileNumber.classList.add("error");
        mobileNumber.classList.remove("correct");
        return false
    }
    else if( typeof mobileNumber !="number"){
        mobileNumberError.textContent="must be numbers";
        mobileNumber.classList.add("error");
        return false
    }
    else if(mobileNumber.value !=9){
        mobileNumberError.textContent="must be 9 number";
        mobileNumber.classList.add("error");
        mobileNumber.classList.remove("correct");
        return false
    }
    else{
        mobileNumberError.textContent="";
        mobileNumber.classList.add("correct");
        mobileNumber.classList.remove("error")
        return true
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const isUserNameValid = checkUserName();
	const isEmailValid = cheCkEmail();
	const isPersonalNumberValid = PersonalNumber();
	const isMobileNumberValid = mobile();

    if(isUserNameValid && isEmailValid && isPersonalNumberValid && isMobileNumberValid){
        form.submit()
    }
})

nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", cheCkEmail);
personalNumber.addEventListener("input", PersonalNumber);
mobileNumber.addEventListener("input", mobile);

