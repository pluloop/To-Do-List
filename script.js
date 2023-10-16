var  textInput = document.getElementById("text-input");
const button = document.getElementById("add-button");
const listItems = document.getElementById("list-items");

function addItem(){
    const container = document.createElement("div");
    var newItem = document.createElement("p");
    var finishedButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    
    container.classList.add("container");
    finishedButton.classList.add("finished-button");
    deleteButton.classList.add("delete-button");
    
    newItem.innerText = textInput.value;
    finishedButton.innerText = "Finished";
    deleteButton.innerText = "Delete";
    
    container.appendChild(newItem);
    container.appendChild(finishedButton);
    container.appendChild(deleteButton);
    listItems.appendChild(container);
}

function crossItem(){
    
}

button.addEventListener("click", addItem);
