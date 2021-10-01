var rightNow = moment().format("MMMM Do, YYYY, h:mm A");
console.log(rightNow);
$("#currentDay").text(rightNow);

var timeNow = moment().hour();
console.log(timeNow);
const scheduleRowContainer =document.querySelector("#scheduleRow");


var checkTime = function() {
    //get current hour
    var timeNow = moment().hour();
    
    //loop over each time block and compare to current time
    $(".time-block").each(function() {
        var timeBlock = $(this).attr("id")
        console.log(timeBlock);
        if (timeBlock < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");        
        }
        else if (timeBlock === timeNow) {
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

checkTime();








/*var saveButtonHandler = function(event){
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
*/
