// Get Element
const form = document.querySelector("form");

const input = document.querySelector("#addTask");

const btnDltAll = document.querySelector("#dltAll");

const taskList = document.querySelector("#taskList");

// Call Function
eventListeners();

//Function 
function eventListeners(){
    form.addEventListener("submit", addNewItem);
    btnDltAll.addEventListener("click",dltAll);
    taskList.addEventListener("click",dltItem);
}

// Add new item
function addNewItem(e){

    // Create li
    const li = document.createElement('li');
    li.className= 'list-group-item';
    
    // Create a
    const a = document.createElement('a');
    a.classList="delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML="X";
    
    // Create Text
    const text = document.createTextNode(input.value);
    
    // Li Append 
    li.appendChild(a);
    li.appendChild(text);
    taskList.appendChild(li);
    e.preventDefault();
}

// Remove All Item
function dltAll(e){
    var i = 0;
    while(i <= taskList.childElementCount){
        taskList.children[0].remove();
    }

}

function dltItem(e){


    e.preventDefault();
}
