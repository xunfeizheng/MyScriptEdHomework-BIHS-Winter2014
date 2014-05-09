$( document ).ready(function() {
    
    var InputText = $("#input").val();
    $("#submit").click(function(){
        $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags=" + InputText + "&has_geo=1&extras=geo&format=json&jsoncallback=?", ProcessInput);
         function ProcessInput(input){
             $.each(input.photos.photo, function(i,item){
                var FarmId = item.farm;
                var ServerId = item.server;
                var Id = item.id;
                var Secret = item.secret; 
                $("#PictureBox").html("<img src=\"http://farm"+FarmId+".staticflickr.com/"+ServerId+"/"+Id+"_"+Secret+".jpg height=\"80px\" width=\"80px\">");
             });
             
             
         }
    });
       
});