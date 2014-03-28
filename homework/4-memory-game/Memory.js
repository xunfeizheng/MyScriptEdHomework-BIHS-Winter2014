$( document ).ready(function() {
    
    var clicks = 0;
    var Match = " ";
    var firstclick = " ";
    var firstid = " ";
    $(".td").click(function(){
        var boxes = $(this).attr("id"); 
        $(this).html("<img id='pic-" + boxes + " 'src=\"" + pictures[boxes] + "\" height=\"80px\" width=\"80px\">");
        alert("you click " + boxes );
        var picId = "#pic-" + boxes;
        flipped[boxes] = true;
        clicks = clicks +1;
        if(clicks == 1){
            firstclick = $(picId).attr("src");
            firstid = "#" + $(this).attr("id");
        }
        else if(clicks == 2){
            var secondclick = $(picId).attr("src");
            var secondid = "#" + $(this).attr("id");
            if(firstclick == secondclick){
            Match = true;
            }
            else{
                $(firstid).text('?');
                $(secondid).text('?');
            }
            clicks = 0;
        }
    });
    
    $("#reset").click(function(){
        alert("Reset clicked!");
        $(".td").text('?');
        $("#score").text('0');
    });
    
    var pictures = [ "http://www.intelligentspeculator.net/wp-content/uploads/2011/08/aapl1.jpg",
        "http://www.thehulltruth.com/attachments/boating-forum/384422d1388078692-help-my-dad-name-his-boat-florida-citrus-grower-orange-slice-background.jpg",
        "http://baby-recipes.com/wp-content/uploads/2014/02/banana.jpg",
        "http://extreme-couponing-tips.com/wp-content/uploads/2013/06/extreme-couponing-tips-peach.jpg",
        "http://img.wallpaperstock.net:81/yellow-pear-wallpapers_13081_1600x1200.jpg",
        "http://www.nation.com.pk/print_images/670/2013-08-30/first-mango-consignment-dispatched-to-australia-1377807826-9127.jpg",
        "http://www.patelbrothersirving.com/wp-content/uploads/2010/06/water-melomd.jpg",
        "http://argotea.com/blog/wp-content/uploads/2013/09/strawberries.jpg",
        "http://www.intelligentspeculator.net/wp-content/uploads/2011/08/aapl1.jpg",
        "http://www.thehulltruth.com/attachments/boating-forum/384422d1388078692-help-my-dad-name-his-boat-florida-citrus-grower-orange-slice-background.jpg",
        "http://baby-recipes.com/wp-content/uploads/2014/02/banana.jpg",
        "http://extreme-couponing-tips.com/wp-content/uploads/2013/06/extreme-couponing-tips-peach.jpg",
        "http://img.wallpaperstock.net:81/yellow-pear-wallpapers_13081_1600x1200.jpg",
        "http://www.nation.com.pk/print_images/670/2013-08-30/first-mango-consignment-dispatched-to-australia-1377807826-9127.jpg",
        "http://www.patelbrothersirving.com/wp-content/uploads/2010/06/water-melomd.jpg",
        "http://argotea.com/blog/wp-content/uploads/2013/09/strawberries.jpg"
    ];
    var flipped = [];

    var flipover = 0; 
    for(var i=0; i<16; i++){ 
        if(flipped[i] === true){ 
            flipover = flipover + 1; 
            }     
        if(flipover == 16){
            alert("Congratulation! You finish the game."); 
            }
        }
    
    function Score(){
        var score =  $("#score").val();
        if (Match === true){
            score =score+1;
        }
        else{
           if(score > 0){
           score =score-1; 
          }
        }
        $("#score").text(score);
    }
});