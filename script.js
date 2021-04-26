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
    event.document.getElemenById.value;
    localStorage.setItem("to-do", JSON.stringify(data));
});


$(document).ready(function() {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        var nineAm = $("<p>" + localStorage["9am"] + "</p>");
        $("#nineAm").append(nineAm[0].innerText);
    } else {
        ("");
    }
    $(document).ready(function() {
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var tenAm = $("<p>" + localStorage["10am"] + "</p>");
        $("#tenAm").append(tenAm[0].innerText);
    } else {
        ("");
    }
    $(document).ready(function() {
        if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
            var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
            $("#elevenAm").append(elevenAm[0].innerText);
        } else {
            ("");
        }
        $(document).ready(function() {
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var tenAm = $("<p>" + localStorage["10am"] + "</p>");
        $("#tenAm").append(tenAm[0].innerText);
    } else {
        ("");
    }
    $(document).ready(function() {
        if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
            var tenAm = $("<p>" + localStorage["10am"] + "</p>");
            $("#tenAm").append(tenAm[0].innerText);
        } else {
            ("");
        }
        $(document).ready(function() {
            if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
                var tenAm = $("<p>" + localStorage["10am"] + "</p>");
                $("#tenAm").append(tenAm[0].innerText);
            } else {
                ("");
            }    
});