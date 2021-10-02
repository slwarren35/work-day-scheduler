var rightNow = moment().format("MMMM Do, YYYY, h:mm A");
console.log(rightNow);
$("#currentDay").text(rightNow);

var timeNow = moment().hour();
console.log(timeNow);


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


//Grab user input on button click
$(".saveBtn").on("click", function() {
    
    var task = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");
    
    localStorage.setItem(taskTime, task);

})



//retrieve data from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


