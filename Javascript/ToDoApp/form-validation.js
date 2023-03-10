//------Input Validation-------

//Form fields
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const userName = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');
const img = document.querySelector('#profilePicture');
//const user_picture = document.querySelector('#user_picture')


const base64IMG = (img) => {
  // assume img is the image you want to save
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


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
    isNameValid = checkNotBlank(userName),
    isLastNameValid = checkNotBlank(lastName);
    isAdressValid = checkNotBlank(address);
    //isImgValid = checkNotNull(img);
  
    //Form is only valid if all fields are valid
    let isFormValid = isEmailValid &&
    isPasswordValid &&
    isNameValid &&
    isLastNameValid &&
    isAdressValid;
  
    // submit to the server if the form is valid
    if (isFormValid) {
      //User storage in LocalStorage

      img.addEventListener('change', (element) => {
        const image = element.target.files[0];
        const user_picture = document.getElementById('user_picture');
      
        //Image file converted to a data URL
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
          //user_picture.removeAttribute('hidden');
          user_picture.setAttribute('src', reader.result)
        })
      })

      // Create an object containing user's information
      const OBJECT_ID_PROPERTY = "id";
      const randomId = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
      const todoList = [];

      const user = {
        id: randomId,
        email: email.value,
        password: btoa(password.value),
        name: userName.value,
        lastName: lastName.value,
        address: address.value,
        todoList: todoList, 
        image: base64IMG(document.getElementById('user_picture'))
      };

      // Retrieve the array from localStorage or initialize an empty array
      let array = JSON.parse(localStorage.getItem("all_users")) || [];

      // Check if the new object already exists in the array
      const objectExists = array.some(object => object[OBJECT_ID_PROPERTY] === user[OBJECT_ID_PROPERTY]);

      if (!objectExists) {
        // If the object doesn't exist, push the new object to the array
        array.push(user);

        //Set the users array to local storage
        localStorage.setItem('all_users', JSON.stringify(array));
      }      
      
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

      auth = false;
      for (var i=0; i<users.length; i++){
        if (users[i].email == email.value && atob(users[i].password) == password.value){
          auth = true; 
          localStorage.setItem("id", JSON.stringify({id:users[i].id}));
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


