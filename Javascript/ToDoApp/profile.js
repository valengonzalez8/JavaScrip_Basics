//Form fields
const userName = document.querySelector('#name');
// const password = document.querySelector('#password');
const email = document.querySelector('#email');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');

const id = JSON.parse(localStorage.getItem('id'));
const users = JSON.parse(localStorage.getItem("all_users"));    


userName.innerHTML = `
    <h2>${users[0].name}</h2 >
    `
lastName.innerHTML = `
    <h2>${users[0].lastName}</h2 >
    `
email.innerHTML = `
  <p>${users[0].email}</p >
  `
address.innerHTML = `
  <p>${users[0].address}</p >
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
          return { ...obj, name: element.textContent.trim() }; // create a new object with the updated age
        if (element == lastName)
          return { ...obj, lastName: element.textContent.trim() }; // create a new object with the updated age
        if (element == email)
          return { ...obj, email: element.textContent.trim() }; // create a new object with the updated age
        if (element == address)
          return { ...obj, address: element.textContent.trim() }; // create a new object with the updated age
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