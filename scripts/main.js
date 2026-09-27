/* Anthony Thomas 9/26/26 */

$(document).ready(function() {

    $("#changeTextColorBtn").click(function() {
        $("#introText").css("color", "red").text("This paragraph is now red.");
    });

    $("#flipTextBtn").dblclick(function() {
        $("#introText").css("transform", "rotate(180deg)").text("This paragraph is now upside down.");
    });

    $("#box1").mouseover(function() {
        $(this).css("background-color", "darkgreen");
    $(this).text("Mouse is over the box!");
    });

    $("#box1").mouseout(function() {
    $(this).css("background-color", "lightpink")
    $(this).text("Hover Me");
});

    

})