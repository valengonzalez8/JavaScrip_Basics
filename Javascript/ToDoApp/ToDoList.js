//Get the user and the current user ID
const getUser = () => {
  const userId = JSON.parse(localStorage.getItem("id"));
  const userData = JSON.parse(localStorage.getItem("all_users")) || [];

  // Find the user object with the specified ID
  const user = userData.find((u) => u.id === userId.id);
  return {user, userData};
}

//Sort items
const sortBtns = document.querySelectorAll(".dropdown-menu button");
const dropdown = document.querySelector('.dropdown');
const btnDrop = dropdown.querySelector('.dropdown-button');
const menu = dropdown.querySelector('.dropdown-menu');

  btnDrop.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
 
function sortList(list) {
  sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

    if (user){
      // Sort the array of list items
      const sortedList = list.sort(function(a, b) {
        if (btn.id == 'sort-asc'){
          if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
        } 
        if (btn.id == 'sort-desc'){
          if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }} 
        if (btn.id == 'date-asc'){
          if (a.date < b.date) {
          return -1;
        } else if (a.date > b.date) {
          return 1;
        } else {
          return 0;
        }} 
        if (btn.id == 'date-desc'){
          if (a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          return 0;
        }} 
      });
        
      document.getElementById("myUL").innerHTML = "";
      showItems(sortedList);
    }
    
  }) 
  })
}

const modifyItem = (element) => {
  // Add an event listener to the <li> element
  element.addEventListener("input", (e) => {
    // Find the user object with the specified ID
    const { user, userData } = getUser();
    if (user) {
      // Find the clicked item in the user's todoList array
      const id = element.getAttribute("id");
      const { todoList } = user;
      const itemIndex = todoList.findIndex((item) => item.id === id);

      if (itemIndex > -1) {
        // Update the title of the item in the user's todoList array
        todoList[itemIndex].title = element.querySelector(".title").value;

        todoList[itemIndex].date = element.querySelector(".date").textContent;

        todoList[itemIndex].category =
          element.querySelector(".category").textContent;

        // Save the updated userData array back to localStorage
        localStorage.setItem("all_users", JSON.stringify(userData));
      }
    }
  });
};

// Create a "close" and "done" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");
var done = document.getElementsByClassName("done");

const closeBtn = () =>{    
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        deleteItem(div);
    }
    }
}

const doneBtn = () => {
  var i;
  var checked = false;
    for (i = 0; i < done.length; i++) {
      done[i].onclick = function () {
        var div = this.parentElement;
        if (!checked){
          div.classList.toggle('checked'); 
          updateStatus(div,"completed");
          checked = true ;
          
        } else {
          div.classList.remove('checked');
          updateStatus(div,"pending"); 
          checked = false;
      }}
    }
}

closeBtn();
doneBtn(); 

const { user } = getUser();
const { todoList } = user;

const showItems = (list) => {
  
  if (user){
    if (list) {
    list.map((item) => {
      
      const li = `
            <li id="${item.id}">
              <input  class="title" contenteditable placeholder="${item.title === "" ? "Enter new task..." : ""}" value="${item.title}"></input>
              <span   class="category" contenteditable>${item.category}</span>
              <span  class="date" contenteditable>${item.date}</span>
              <span  class="done">\u2713</span>
              <span  class="close">\u00D7</span>
            </li>
        `;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = li.trim();
        const liElement = tempDiv.firstChild;
        item.status == "completed" ? liElement.classList.toggle('checked') : ""
        modifyItem(liElement);
        myUL.appendChild(liElement);
    })
   
    closeBtn();
    doneBtn();    
  }
  }
  
}

//Filter Items by Status
const filters = document.querySelectorAll(".filters span");

filters.forEach(btn => {
  if (btn.id == "all"){
    showItems(todoList);
    sortList(todoList)
  } 
  btn.addEventListener("click", () => {
      document.querySelector("span.active").classList.remove("active");
      btn.classList.add("active");
      
      const { user } = getUser();
      const { todoList } = user;

      if (user){
        const filteredItems = todoList.filter(item => item.status === btn.id);
        document.getElementById("myUL").innerHTML = "";
        showItems(filteredItems);
        sortList(filteredItems);

        if (btn.id == "all"){
          document.getElementById("myUL").innerHTML = "";
          showItems(todoList);
          sortList(todoList);

      } 
      } 
  });
});

//Filter Items by Category
const categBtns = document.querySelectorAll(".dropdown-menu2 button");
const dropdownCateg = document.querySelector('.dropdown2');
const btnDropCateg = dropdownCateg.querySelector('.dropdown-button2');
const menuCateg = dropdownCateg.querySelector('.dropdown-menu2');

btnDropCateg.addEventListener('click', function() {
    menuCateg.classList.toggle('show');
  });


categBtns.forEach(btn => {
  btn.addEventListener("click", () => {

      // Show items stored in LocalStorage
    const filterActive = document.querySelectorAll(".filters span.active");

    const { user } = getUser();
    const { todoList } = user;
    let activeId = "";
    filterActive.forEach((btn) => {
      activeId = btn.id;
    });
    if (user) {
      if (activeId === "all") {
        const filteredItems = todoList.filter(
          (item) => item.category === btn.id
        );
        document.getElementById("myUL").innerHTML = "";
        showItems(filteredItems);
        sortList(filteredItems);
      }
      if (activeId === "completed") {
        const filteredItems = todoList
          .filter((item) => item.status === activeId)
          .filter((item) => item.category === btn.id);
        document.getElementById("myUL").innerHTML = "";
        showItems(filteredItems);
        sortList(filteredItems);
      }
      if (activeId === "pending") {
        const filteredItems = todoList
          .filter((item) => item.status === activeId)
          .filter((item) => item.category === btn.id);
        document.getElementById("myUL").innerHTML = "";
        showItems(filteredItems);
        sortList(filteredItems);
      }
    }
  });
});

const deleteItem = (element) => {
  // Add an event listener to the <input> element
  element.addEventListener("click", (e) => {

    const { user, userData } = getUser();
    
    if (user) {
      // Find the clicked item in the user's todoList array
      const clickedLI = e.target.closest("li");
      const id = clickedLI?.getAttribute("id") ?? "";
      const { todoList } = user;
      const itemIndex = todoList.findIndex((item) => item.id === id);

      if (itemIndex > -1) {
        // Remove the item from the user's todoList array
        todoList.splice(itemIndex, 1);

        // Save the updated userData array back to localStorage
        localStorage.setItem("all_users", JSON.stringify(userData));
        console.log("Item removed from todoList:", id);
      } else {
        console.log(`Item with ID ${id} not found in todoList`);
      }
    } else {
      console.log(`User with ID ${userId} not found`);
    }
    
  });
};

// update status function
const updateStatus = (element, status) => {
  // Add an event listener to the <click> element
  element.addEventListener("click", (e) => {
    const { user, userData } = getUser();
    if (user) {
      // Find the clicked item in the user's todoList array
      const clickedLI = e.target.closest("li");
      // Identify the id of the clicked li element (assuming it's stored in a data attribute)
      const id = clickedLI.getAttribute("id");
      const { todoList } = user;
      const itemIndex = todoList.findIndex((item) => item.id === id);

      if (itemIndex > -1) {
        // Update the title of the item in the user's todoList array
        todoList[itemIndex].status = status;

        // Save the updated userData array back to localStorage
        localStorage.setItem("all_users", JSON.stringify(userData));
        console.log("Item updated:", id);
      }
    }
  });
};

// Create a new list item when clicking on the "Add" button
function addItem() {
  var inputValue = document.getElementById("myInput").value;
  var date = document.getElementById("date").value;
  var checkboxes = document.getElementsByName('check')
  const category = Array.from(checkboxes).filter((item) => item.checked).map((item) => {
      if (item.checked == true) {
        return item.value};
  })

  if (inputValue === "") {
    alert("You must write something!");
  } else if (date == "") { 
    alert("You must enter a date!");
  } else if (category == "") {
    alert("You must enter a category!");
  } else {

    // Create an object containing item's information
    const randomId = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");

    const item = {
      id: randomId,
      title: inputValue,
      status: "pending",
      date: date,
      category: category[0]

    };

    // Retrieve the array from localStorage or initialize an empty array
    const userId = JSON.parse(localStorage.getItem("id"))
    const userData = JSON.parse(localStorage.getItem("all_users")) || [];

    // find the user object with the specified id
    const userIndex = userData.findIndex((u) => u.id === userId.id);

    if (userIndex > -1) {
      // user found, push the new item to their todoList array
      userData[userIndex].todoList.push(item);

      // save the updated userData array back to localStorage
      localStorage.setItem("all_users", JSON.stringify(userData));
      
      const li = `
            <li id="${item.id}">
              <input  class="title" contenteditable placeholder="${item.title === "" ? "Enter new task..." : ""}" value="${item.title}"></input>
              <span   class="category" contenteditable>${item.category}</span>
              <span  class="date" contenteditable>${item.date}</span>
              <span  class="done">\u2713</span>
              <span  class="close">\u00D7</span>
            </li>
        `;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = li.trim();
        const liElement = tempDiv.firstChild;
        item.status == "completed" ? liElement.classList.toggle('checked') : ""
        modifyItem(liElement);
        myUL.appendChild(liElement);
      
      document.getElementById("myInput").value = "";
      document.getElementById("date").value = "";
      document.getElementById("category").innerHTML = "";
    } else {
      // user not found, display an error message
      alert("User not found");
    }
  }
  
  closeBtn();
  doneBtn();
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}


