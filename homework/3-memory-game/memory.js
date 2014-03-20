$( document ).ready(function() {
$(".td").click(function(){
    var boxes = $(this).attr("id");
    alert("you click" + boxes );
});

$("#reset").click(function(){
    alert("Reset clicked!");
    $(".td").text('?');
});

});