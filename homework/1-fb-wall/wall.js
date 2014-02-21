$( document ).ready(function() {
    
    $("#post").click(function(){
        var inputvalue = $("#input").val();
        $("#wall").append(inputvalue + "<button class ='like'>Like</button>" +"<br>" + "<br>");
        
    });
    
     $(".like").click(function()
    {
      $(this).text("I like this");
    });
 
  
  
  
});