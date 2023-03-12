const modifyItem = (element) => {
  // Add an event listener to the <input> element
  element.addEventListener("input", (e) => {
    const userId = JSON.parse(localStorage.getItem("id"));
    const userData = JSON.parse(localStorage.getItem("all_users"));
    const ToDoList = userData.map(user => {
      return user.id == userId ? user.todoList : []
    })
    const id = e.target.getAttribute('id');

    // Retrieve the data from localStorage        
    const updatedArray = ToDoList.map((item) => {
      if (item.id == id) {
        return { ...item, title: element.textContent.replace("\u00D7", "").replace("\u2713", "") }; // create a new object with the updated age
      } else {
        return { ...item };
      }
    });

    // Store the updated data back to localStorage
    localStorage.setItem("all_users", JSON.stringify(updatedArray));

  });
}

// Create a "close" and "done" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");
var done = document.getElementsByClassName("done");

const createSpan = (text, className) => {
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(text);
    span.className = className;
    span.appendChild(txt);
    myNodelist[i].appendChild(span).setAttribute("contentEditable", "false");
  }
}

const closeBtn = () =>{
  createSpan("\u00D7","close") 
      
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
  createSpan("\u2713", "done")

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

// Show items stored in LocalStorage
const userId = JSON.parse(localStorage.getItem("id"));
const userData = JSON.parse(localStorage.getItem("all_users"));
const ToDoList = userData.map(user => {
  return user.id == userId ? user.todoList : []
})
console.log(ToDoList);

const showItems = (list) => {
  if (list) {
    list.map((item) => {
      var li = document.createElement("li");
      var t = document.createTextNode(item.title);
      li.setAttribute('id', item.id);
      item.status == "completed" ? li.classList.toggle('checked') : ""
      li.appendChild(t);
      modifyItem(li)
      document.getElementById("myUL").appendChild(li).setAttribute("contentEditable", "true");
    })

    closeBtn();
    doneBtn();    
  }
}

//Filter Items
const filters = document.querySelectorAll(".filters span");

filters.forEach(btn => {
  if (btn.id == "all"){
    showItems(ToDoList);
  } 
  btn.addEventListener("click", () => {
      document.querySelector("span.active").classList.remove("active");
      btn.classList.add("active");
      const userId = JSON.parse(localStorage.getItem("id"));
      const userData = JSON.parse(localStorage.getItem("all_users"));
      const ToDoList = userData.map(user => {
  return user.id == userId ? user.todoList : []
})
      const filteredItems = ToDoList.filter(item => item.status === btn.id);
      document.getElementById("myUL").innerHTML = "";
      showItems(filteredItems);
      if (btn.id == "all"){
        document.getElementById("myUL").innerHTML = "";
        showItems(ToDoList);
      } 
  });
});


const deleteItem = (element) => {
  // Add an event listener to the <input> element
  element.addEventListener("click", (e) => {
    const userId = JSON.parse(localStorage.getItem("id"));
    const userData = JSON.parse(localStorage.getItem("all_users"));
    const ToDoList = userData.map(user => {
  return user.id == userId ? user.todoList : []
})
    const clickedLI = e.target.closest('li');
  // Identify the id of the clicked li element (assuming it's stored in a data attribute)
    const id = clickedLI.getAttribute('id');

    // Retrieve the data from localStorage        
    const itemIndex = ToDoList.findIndex((item) => {
      return item.id === id;
    });

    ToDoList.splice(itemIndex, 1);

      // Store the updated data back to localStorage
    localStorage.setItem("all_users", JSON.stringify(ToDoList));
  });
}

const updateStatus = (element, status) => {
  
  // Add an event listener to the <click> element
  element.addEventListener("click", (e) => {
    
    const userId = JSON.parse(localStorage.getItem("id"));
    const userData = JSON.parse(localStorage.getItem("all_users"));
    const ToDoList = userData.map(user => {
  return user.id == userId ? user.todoList : []
})
    const clickedLI = e.target.closest('li');
    // Identify the id of the clicked li element (assuming it's stored in a data attribute)
    const id = clickedLI.getAttribute('id');

    // Retrieve the data from localStorage        
    const updatedArray = ToDoList.map((item) => {
      if (item.id == id) {
        return { ...item, status: status }; // create a new object with the updated age
      } else {
        return { ...item };
      }
    });

    console.log(updatedArray);
    // Store the updated data back to localStorage
    localStorage.setItem("all_users", JSON.stringify(updatedArray));

  });
}

// Create a new list item when clicking on the "Add" button
function addItem() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Create an object containing item's information
    const OBJECT_ID_PROPERTY = "id";
    const randomId = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");

    const item = {
      id: randomId,
      title: inputValue,
      status: "pending"
    };
    // Retrieve the array from localStorage or initialize an empty array
    const userId = JSON.parse(localStorage.getItem("id"));
    const userData = JSON.parse(localStorage.getItem("all_users"));
    
    // Check if the new object already exists in the array
    const objectExists = userData.some(object => object[OBJECT_ID_PROPERTY] === item[OBJECT_ID_PROPERTY]);

    if (!objectExists) {
      // If the object doesn't exist, push the new object to the array
      const user = userData.find(u => {return u.id === userId});
      user.todoList.push(item);
      console.log(user)

      //Set the users array to local storage
      localStorage.setItem('all_users', JSON.stringify(userData));
    }
    li.setAttribute('id', item.id);
    modifyItem(li);
    document.getElementById("myUL").appendChild(li).setAttribute("contentEditable", "true");
  }
  document.getElementById("myInput").value = "";

  closeBtn();
  doneBtn(); 
}



