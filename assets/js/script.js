var rightNow = moment().format("MMMM Do, YYYY");
console.log(rightNow);
$("#currentDay").text(rightNow);

var timeNow = moment().hour();
console.log(timeNow);
const scheduleRowContainer =document.querySelector("#scheduleRow");
const timesContainerEl = document.querySelector("#timesContainer");
const taskContainerEl = document.querySelector("#taskContainer");
const saveButtonContainerEl = document.querySelector("#saveContainer");
var taskDisplayEl;
var tasks = [];
var newTask;
var times = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]
hourId = 9;





var createCalendar = function() {
    for (var i = 0; i < times.length; i++) {
        
        //set times
        var hourSlotEl = document.createElement("p");
        hourSlotEl.setAttribute("class", "textarea time-block hour");
        hourSlotEl.textContent = times[i];
        scheduleRowContainer.appendChild(timesContainerEl);
        timesContainerEl.appendChild(hourSlotEl);
        console.log(times[i]);
        
    
        //set area for tasks
        taskDisplayEl = document.createElement("textarea");
        taskDisplayEl.textContent = "Enter task here";
        taskDisplayEl.setAttribute("id", i + 9);
        taskDisplayEl.setAttribute("name", "taskInput");
        taskDisplayEl.setAttribute("class", "textarea taskBlock");
        taskContainerEl.appendChild(taskDisplayEl);
        scheduleRowContainer.appendChild(taskContainerEl);
    
        //create button
        var saveButton = document.createElement("button")
        saveButton.setAttribute("class", "saveBtn textarea");
        saveButton.setAttribute("data-timeId", i + 9);
        saveButton.textContent = "Save Me";
        //iconEl = document.createElement("span");
        //iconEl = setAttribute("class", "oi oi-file");
        //saveButton.appendChild(iconEl);
        saveButtonContainerEl.appendChild(saveButton);
        scheduleRowContainer.appendChild(saveButtonContainerEl);
       
    }
    };



function checkTime() {
    var timeNow = moment().hour();
    //loop over taskBlock
    var taskBlock = taskDisplayEl.getAttribute("id");
    $("#taskContainer").each(function() {

        if (taskBlock < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");        
        }
        else if (taskBlock === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
};









var saveButtonHandler = function(event){
    console.log(event.target);
}

var addTask = function(event) {
    console.log(newTask);
    console.log(event.target.id);
    console.log(taskDisplayEl.value);
    tasks.id = event.target.id;
    tasks.task = taskDisplayEl.value;
    tasks.push(tasks);
    console.log(tasks);
    var taskBlock = taskDisplayEl.getAttribute("id");
    console.log("id:  " + taskBlock);
}





saveButtonContainerEl.addEventListener("click", saveButtonHandler);
taskContainerEl.addEventListener("click", addTask);
createCalendar();
checkTime();