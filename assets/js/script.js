var rightNow = moment().format("MMMM Do, YYYY");
console.log(rightNow);
$("#currentDay").text(rightNow);
const scheduleRowContainer =document.querySelector("#scheduleRow");
const timesContainerEl = document.querySelector("#timesContainer");
const taskContainerEl = document.querySelector("#taskContainer");
const saveButtonContainerEl = document.querySelector("#saveContainer");

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
    var taskDisplayEl = document.createElement("textarea");
    taskDisplayEl.textContent = "Enter task";
    taskDisplayEl.setAttribute("id", i + 9);
    taskDisplayEl.setAttribute("class", "textarea");
    taskContainerEl.appendChild(taskDisplayEl);
    scheduleRowContainer.appendChild(taskContainerEl);

    //create button
    var saveButton = document.createElement("button")
    saveButton.setAttribute("class", "saveBtn textarea");
    saveButton.setAttribute("data-timeId", i + 9);
    saveButton.textContent = "Save Me";
    saveButtonContainerEl.appendChild(saveButton);
    scheduleRowContainer.appendChild(saveButtonContainerEl);
   
}
};

createCalendar();

var saveButtonHandler = function(event){
    console.log(event.target);
}

var addTask = function(event) {
    console.log(event.target);
}



saveButtonContainerEl.addEventListener("click", saveButtonHandler);
taskContainerEl.addEventListener("click", addTask);