//------Input Validation-------

//Form fields
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const name = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');
const img = document.querySelector('#profilePicture');
// console.log(img.type);
// console.log(img);
// console.log(img.length);

const base64IMG = (img) => {
  // assume img is the image you want to save
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const dataURL = canvas.toDataURL("image/png");
  return dataURL
  }

// const imagen = base64IMG(img);
// console.log(imagen)


const form_signup = document.querySelector('#signup');
const form_login = document.querySelector('#login');

//Event listener for signup
if (form_signup){
  
  form_signup.addEventListener('submit', function (e) {
    //Prevent the form from submitting
    e.preventDefault();
  
    //Validate forms
    let isEmailValid = checkEmail(email),
    isPasswordValid = checkNotBlank(password);
    isNameValid = checkNotBlank(name),
    isLastNameValid = checkNotBlank(lastName);
    isAdressValid = checkNotBlank(address);
    isImgValid = checkNotNull(img);
  
    //Form is only valid if all fields are valid
    let isFormValid = isEmailValid &&
    isPasswordValid &&
    isNameValid &&
    isLastNameValid &&
    isAdressValid;
  
    // submit to the server if the form is valid
    if (isFormValid) {
      //User storage in LocalStorage

      // Image file converted to a data URL
      const reader = new FileReader();  //returns an object
      reader.readAsDataURL(img);        //returns a string

      // Create an object containing user's information
      const user = {
        email: email.value,
        password: btoa(password.value),
        name: name.value,
        lastName: lastName.value,
        address: address.value,
        image: reader.result
      };

      //Create an array and push the objects per user
      var users = new Array();
      users.push(user);

      //Set the users array to local storage
      localStorage.setItem('all_users', JSON.stringify(users));
      
      //Redirect to login page
      location.href = "login.html";
    }
  });
}


//Event listener for login
if (form_login){
  form_login.addEventListener('submit', function (e) {
    //Prevent the form from submitting
    e.preventDefault();
  
    //Validate forms
    let isEmailValid = checkEmail(email),
    isPasswordValid = checkNotBlank(password);
  
    //Form is only valid if all fields are valid
    let isFormValid = isEmailValid &&
    isPasswordValid;
    
  
    // submit to the server if the form is valid
    if (isFormValid) {

      //User authentification
      const users = JSON.parse(localStorage.getItem('all_users'));
      console.log(users[0].email); // output: the email value stored in local storage
      console.log(users[0].password);

      auth = false;
      for (var i=0; i<users.length; i++){
        if (users[i].email == email.value && atob(users[i].password) == password.value){
          auth = true;
        } 
      }

      if (auth){
        //Redirect to the profile page
        location.href = "profile.html";
      } else{
        alert('Invalid Account, please try again');
      }
    }
  });
}


//Validation functions
const isRequired = value => value === '' ? false : true; //returns true if the field is empty

//Regular expression to check the email is valid
const isEmailValid = (email) => {
  const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email.value);
};

const checkNotNull = (image) => {
  if (image != null){
    return (true)
  } else{
    showError = (img, 'No profile image chosen');
  }
}


//Functions that show the error/success
//Error
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

//Success
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

//Validate the email
const checkEmail = (email_) => {
  let valid = false;
  
  //const email_ = email.value.trim();
  if (!isRequired(email_)) {
      showError(email, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(email, 'Email is not valid.')
  } else {
      showSuccess(email);
      valid = true;
  }
  return valid;
}

const checkNotBlank = (field) => {

  let valid = false;
  const field_ = field.value.trim();

  if (!isRequired(field_)) {
      showError(field, 'Field cannot be blank.');
  } else {
      showSuccess(field);
      valid = true;
  }
  return valid;
}


