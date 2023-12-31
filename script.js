// variables to store html elements for later use
var  textInput = document.getElementById("text-input");
const button = document.getElementById("add-button");
const listItems = document.getElementById("list-items");

function addItem(){
    if (textInput.value != ""){ // if input is empty, no list
        // variables to create border of list, text for item, finished button, and delete button html
        const container = document.createElement("div");
        let newItem = document.createElement("p");
        let finishedButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        
        // adding class to html elements
        container.classList.add("container");
        finishedButton.classList.add("finished-button");
        deleteButton.classList.add("delete-button");
        
        // setting text to list and buttons
        newItem.innerText = textInput.value;
        finishedButton.innerText = "Finished";
        deleteButton.innerText = "Delete";
        
        // adding html elements inside another
        container.appendChild(newItem);
        container.appendChild(finishedButton);
        container.appendChild(deleteButton);
        listItems.appendChild(container);
    }

    textInput.value = ""; // clears text inside input after pressing add button
}

// functions to cross out and delete item from list
listItems.addEventListener("click", function (event){
    if (event.target.classList.contains("finished-button")){
        let item = event.target.parentElement.querySelector("p");
        item.style.textDecoration = "line-through";
    }

    if (event.target.classList.contains("delete-button")){
        const container = event.target.parentElement;
        container.remove();
    }
});

button.addEventListener("click", addItem); // calls addItem function when add button clicked