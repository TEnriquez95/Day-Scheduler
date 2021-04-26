//Added current date and time to top
var currentDate = moment().format("llll");
$("#currentDay").text(currentDate);
console.log(currentDate);

var hourBlock = $(".hour");
var now = parseInt(moment().format("H"));

$.each(hourBlock,function (i, hour) {
    var timeId = parseInt($(this).attr("id"));
    if (timeId === now) {
        $(this).next(".present");
    } else if (timeId < now) {
        $(this).next(".past");
    } else if (timeId > now) {
        $(this).next(".future");
    }
});

$('.saveBtn').on("click", function (event) {
    var todoItem = 
    event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem("to-do", JSON.stringify(data));
});
