var myTasks = [];
const submitButton = document.querySelector('.submit-button');
const resetButton = document.querySelector('.delete-all-button');
submitButton.addEventListener("click",()=>{
    console.log("You just clicked the button.");
    let taskContent = document.querySelector(".new-task").value;
    addTasks(taskContent);
    myTasks.push(taskContent);
    document.querySelector(".new-task").value = null; // Reseting input field to default
    console.log(myTasks);
})
function addTasks(newTask){
    // creating <li> element 
    let listElement = document.createElement("li");
    // creating text to display in DoM
    let listText = document.createTextNode(newTask);
    listElement.appendChild(listText);
    let placeHolder = document.querySelector('.list-of-tasks')
    // Finally adding element with text in specified element
    placeHolder.appendChild(listElement);
}
function resetTasks(){
    let tasks = document.querySelector(".list-of-tasks");
    // Removes all the child element from to-do list
    while (tasks.hasChildNodes()){
        tasks.removeChild(tasks.firstChild);
    }
    myTasks = [];
    
}