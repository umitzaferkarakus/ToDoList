const form = document.querySelector("form");

const input = document.querySelector("#addTask");

const btnDltAll = document.querySelector("#dltAll");

const taskList = document.querySelector("#taskList");

eventListeners();


function eventListeners(){
    form.addEventListener("submit", addNewItem);
}


function addNewItem(){
    
    const li = document.createElement('li');
    const text = document.createTextNode(input.value);
    li.className= 'list-group-item';
    li.appendChild(text);
    taskList.appendChild(li);
}

