var rightNow = moment().format("MMMM Do, YYYY, h:mm:ss A");
console.log(rightNow);
$("#currentDay").text(rightNow);

var timeNow = moment().hour();
console.log(timeNow);
const scheduleRowContainer =document.querySelector("#scheduleRow");










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





//saveButtonContainerEl.addEventListener("click", saveButtonHandler);
//taskContainerEl.addEventListener("click", addTask);

checkTime();

