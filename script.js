var  textInput = document.getElementById("text-input");
const button = document.getElementById("add-button");
const listItems = document.getElementById("list-items");

function addItem(){
    if (textInput.value != ""){
    const container = document.createElement("div");
    let newItem = document.createElement("p");
    let finishedButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    
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

    textInput.value = "";
}

// function crossItem(event){
//     let element = event.target;

//     //check if the parent element of the element variable has a class of container
//         //change the text decoration to line-through
// }

listItems.addEventListener("click", function (event){
    if (event.target.classList.contains("finished-button")){
        let item = event.target.parentElement.querySelector("p");
        item.style.textDecoration = "line-through";
    }
});

listItems.addEventListener("click", function (event){
    if (event.target.classList.contains("delete-button")){
        const container = event.target.parentElement;
        container.remove();
}
});

button.addEventListener("click", addItem);

// comment
// change