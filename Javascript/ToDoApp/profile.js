//Form fields
const userName = document.querySelector('#name');
// const password = document.querySelector('#password');
const email = document.querySelector('#email');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');
const img = document.getElementById('profilePicture').src 


const id = JSON.parse(localStorage.getItem('id'));
const users = JSON.parse(localStorage.getItem("all_users"));    

const indexUser = users.findIndex((user) => user.id === id.id)

userName.innerHTML = `
    <h2>${users[indexUser].name}</h2 >
    `
lastName.innerHTML = `
    <h2>${users[indexUser].lastName}</h2 >
    `
email.innerHTML = `
  <p>${users[indexUser].email}</p >
  `
address.innerHTML = `
  <p>${users[indexUser].address}</p >
  `
img.innerHTML = `
  <p>${"data:image/png;base64," + users[indexUser].image}</p >
  `

const modifyInput = (element) => {
  // Add an event listener to the <input> element
  element.addEventListener("input", () => {
  const id = JSON.parse(localStorage.getItem('id'));
  const users = JSON.parse(localStorage.getItem("all_users"));    

  // Retrieve the data from localStorage        
  const updatedArray = users.map(obj => {
      if (obj.id === id.id) {
        if (element == userName)
          return { ...obj, name: element.textContent.trim() }; // create a new object with the updated name
        if (element == lastName)
          return { ...obj, lastName: element.textContent.trim() }; // create a new object with the updated last name
        if (element == email)
          return { ...obj, email: element.textContent.trim() }; // create a new object with the updated email
        if (element == address)
          return { ...obj, address: element.textContent.trim() }; // create a new object with the updated address
        }
      return obj; // return the original object for other IDs
    });
  console.log(updatedArray);

  // Store the updated data back to localStorage
  localStorage.setItem("all_users", JSON.stringify(updatedArray));

});
}

modifyInput(userName);
modifyInput(lastName);
modifyInput(email);
modifyInput(address);
