let actionId = 1;
let updatingName = "action" + actionId;
let actionContent = ""
let actionFurtherDetails = ""

//Create a class in which to hold the new tasks
class Task {
    constructor (taskId, taskHeading, taskBody) {
        this.taskId = taskId;
        this.taskHeading = taskHeading;
        this.taskBody= taskBody;
    }
    addTaskToPage() {
        let ul = document.querySelector("ul")
        let newLi = document.createElement("li")
        let checkboxDiv = document.createElement("Div")
        let contentDiv  = document.createElement("Div")
        ul.appendChild(newLi)
        newLi.setAttribute("id",`action${this.taskId}`)
        checkboxDiv.setAttribute("class", "checkbox-container")
        contentDiv.setAttribute("class", "task-container")
        newLi.appendChild(checkboxDiv)
        newLi.appendChild(contentDiv)
        newLi.classList.add("action-box")
        checkboxDiv.innerHTML = `<label for="action-completer" id="action-completer-label">tick that <br> sucker</label> 
                               <input onclick="removeTaskFromPage('action${this.taskId}')" type="checkbox" id="action-completer" name="action-completer">
                               <br>
                               <div>
                                    <button onclick="editTask('action${this.taskId}')">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5F6149" class="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </button>
                                    <button onclick="deleteTask('action${this.taskId}')">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8B5451" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </button>
                                </div>`
        contentDiv.innerHTML = `<h2>${this.taskHeading}</h2>
                                <p>${this.taskBody}</p>`        
    }

}


//capture the form inputs
const actionInput = document.querySelector("#action-content");
const actionDetails = document.querySelector("#action-further-details");
const submitButton = document.querySelector("#submit-button");


//Clears the user input from the form
function clearInput() {
    actionInput.value = ""
    actionDetails.value = ""
}; 


//create a new object on button press
function taskBuilder() {
    //get input from form
    const newTask = new Task (actionId, actionInput.value, actionDetails.value)
    console.log(newTask)
    actionId += 1
    clearInput()
    newTask.addTaskToPage()
    
};

//complete a task based on click from html
function removeTaskFromPage(taskId) {
    const taskComplete = document.querySelector(`#${taskId}`);
    //change id of task
    taskComplete.setAttribute("id", "action-box-nailed")
    setTimeout( function(){
        taskComplete.style.display = "none"
    }, 2250)
}; 

//delete a task
function deleteTask(taskId) {
    const taskToDelete = document.querySelector(`#${taskId}`);
    window.alert("Permanently Delete?")
    taskToDelete.remove()
};

//edit a task 
function editTask(taskId) {
    const taskToDelete = document.querySelector(`#${taskId}`);
    const headingToEdit = document.querySelector(`#${taskId} h2`);
    const paragraphToEdit = document.querySelector(`#${taskId} p`);
    actionInput.value = headingToEdit.innerHTML
    actionDetails.value = paragraphToEdit.innerHTML
    taskToDelete.remove()
}

//new task submitted
submitButton.addEventListener('click', taskBuilder);

let colourVars = document.querySelector(':root');
let bodyBg = document.querySelector("body");
let buttonBg = document.querySelector("button");
let themeSelector = 0;

function dayTime() {
    //set day colours
    colourVars.style.setProperty('--highlight-colour', '#fffdf8')
    colourVars.style.setProperty('--background-subtle', '#f0f0f0')
    colourVars.style.setProperty('--brand-primary', '#3890E0')
    colourVars.style.setProperty('--brand-secondary', '#f2fe41')
    colourVars.style.setProperty('--body-text', '#282f36')
    bodyBg.style.backgroundColor = "var(--dark-blue)"
    buttonBg.style.backgroundColor = "none"
    console.log("day time")
    themeSelector -=1
};

function nightTime() {
    //set night colours
    colourVars.style.setProperty('--highlight-colour', '#262625')
    colourVars.style.setProperty('--background-subtle', '#e040384f')
    colourVars.style.setProperty('--brand-primary','#f2fe41' )
    colourVars.style.setProperty('--brand-secondary', '#3890E0' )
    colourVars.style.setProperty('--body-text', '#fffdf8')
    bodyBg.style.backgroundColor = "var(--dark-yellow)"
    buttonBg.style.backgroundColor = "var(--brand-secondary)"
    console.log("night time")
    themeSelector +=1
};

//toggle theme
function nightTimeDayTime() {
    if (themeSelector == 0) {
        nightTime()
    } else {
        dayTime()
    }
};

