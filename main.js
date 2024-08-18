const email = document.querySelector('#email');
const phone = document.querySelector("#phone");
const confirmPassword = document.querySelector("confirmPassword");
const password = document.querySelector("password");
const errorMessage= document.querySelector(".errorMessage");

const inputs = [email,phone,confirmPassword,password];

inputs.forEach(item =>{
    if(item!=null)(
    item.addEventListener("focusin",() => {
        
        errorMessage.textContent = ''
        item.classList.remove("error");
        if(item == password | item == confirmPassword){
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            
        }
    }
    ))
}

);

const submit = document.querySelector('.btn');
submit.addEventListener('click',()=> {
    
    console.log(password.value);
    if(password.value !== null && confirmPassword.value!=null ){
    if (password.value !== confirmPassword.value) {
      password.classList.add("error");
      confirmPassword.classList.add("error");
      errorMessage.textContent = "Passwords don't match";
      console.log('submit');
      return;
    }
}
    if (
        !phone.value.match(
          /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
        )
      ) {
        phone.classList.add("error");
        errorMessage.textContent = "Phone number needs to be exactly 10 numbers";
        return;
      }
      if (password.value.length < 8) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to be at least 8 characters long.";
        return;
      }
      if (!password.value.match(/[a-z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 lower case letter.";
        return;
      }
      if (!password.value.match(/[A-Z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 upper case letter.";
        return;
      }
      if (!password.value.match(/\d+/g)) {
        password.classList.add("error");
        errorMessage.textContent = "Password needs to have at least 1 number.";
        return;
      }
      errorMessage.textContent = "Form added successfully";
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    
});

const form = document.querySelector("form");
form.addEventListener("submit",submit);