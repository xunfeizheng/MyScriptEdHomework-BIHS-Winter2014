$(document).ready(function() {

	$('#search-button').click(function() {

		$("#result-photos").html("");
		$("#result-header").text("");

		var query = $('#query').val();

		var flickrApiUrl = "https://api.flickr.com/services/rest/" +
			"?method=flickr.photos.search" +
			"&api_key=1c9f777eb7446f34a7261dc1a54be4b2" +
			"&tags=" + query +
			"&has_geo=1" +
			"&extras=geo" +
			"&format=json" +
			"&jsoncallback=?";

		$.getJSON(flickrApiUrl, processPictures);

	});

	function processPictures(data) {
		
		$("#result-header").text("Photos:");
		var ThePhoto = data.photos.photo;
        for(var i=0; 1 < ThePhoto.length; i++){
            var FarmId = ThePhoto[i].farm;
            var ServerId = ThePhoto[i].server;
            var Id =ThePhoto[i].id;
            var Secret = ThePhoto[i].secret; 
            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            var imageUrl = "https://farm" + FarmId + ".staticflickr.com/" + ServerId + "/" + Id + "_" + Secret + ".jpg";
            var imageHtmlElement = "<img class=\"image\" src='" + imageUrl + "' /> <br/>";
            var PicTitle = ThePhoto[i].title;
            $("#result-photos").append(PicTitle + "<br/>" + imageHtmlElement);
        }
	}
});