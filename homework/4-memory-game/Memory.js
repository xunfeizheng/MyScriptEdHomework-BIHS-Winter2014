$( document ).ready(function() {
    
    var clicks = 0;
    var Match = false;
    var firstclick = "0";
    var firstid = "0";
    $(".td").click(function(){
        var boxId = $(this).attr("id");
        if(flipped[boxId] === false){
            $(this).html(pictures[boxId]);
            flipped[boxId] = true;
            clicks = clicks +1;
            if(clicks == 1){
                firstclick = $(this).children();
                firstid = boxId;
            }
            else if(clicks == 2){
                var secondclick = $(this).children();
                var secondid = boxId;
                if(firstclick.attr("src") == secondclick.attr("src")){
                    Match = true;
                    Score();
                    match();
                }
                else{
                    Match = false;
                    match();
                    setTimeout(function (){
                        $("#" + firstid).text('?');
                        flipped[firstid] = false;
                        $("#" + secondid).text('?');
                        flipped[secondid] = false;
                        Score();
                    }, 500);
                }
                clicks = 0;
                CheckGameOver();
            }
        }
    });
    
    $("#reset").click(function(){
        $(".td").text('?');
        $("#score").text('0');
        $("#alert").text(" Reset is clicked! ");
        for(var i=0; i<16; i++){
            flipped[i] = false;
        }
        HighScore();
        randompics(pictures);   
    });
    
    var pictures = [ "<img src=\"http://www.intelligentspeculator.net/wp-content/uploads/2011/08/aapl1.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://www.thehulltruth.com/attachments/boating-forum/384422d1388078692-help-my-dad-name-his-boat-florida-citrus-grower-orange-slice-background.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://baby-recipes.com/wp-content/uploads/2014/02/banana.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://extreme-couponing-tips.com/wp-content/uploads/2013/06/extreme-couponing-tips-peach.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://img.wallpaperstock.net:81/yellow-pear-wallpapers_13081_1600x1200.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://blog.goodmeasuremeals.com/wp-content/uploads/2013/08/1363010941_peaches_fruit_wallpaper.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://www.patelbrothersirving.com/wp-content/uploads/2010/06/water-melomd.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://argotea.com/blog/wp-content/uploads/2013/09/strawberries.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://www.intelligentspeculator.net/wp-content/uploads/2011/08/aapl1.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://www.thehulltruth.com/attachments/boating-forum/384422d1388078692-help-my-dad-name-his-boat-florida-citrus-grower-orange-slice-background.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://baby-recipes.com/wp-content/uploads/2014/02/banana.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://extreme-couponing-tips.com/wp-content/uploads/2013/06/extreme-couponing-tips-peach.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://img.wallpaperstock.net:81/yellow-pear-wallpapers_13081_1600x1200.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://blog.goodmeasuremeals.com/wp-content/uploads/2013/08/1363010941_peaches_fruit_wallpaper.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://www.patelbrothersirving.com/wp-content/uploads/2010/06/water-melomd.jpg\" height=\"80px\" width=\"80px\">",
        "<img src=\"http://argotea.com/blog/wp-content/uploads/2013/09/strawberries.jpg\" height=\"80px\" width=\"80px\">"
    ];
    var flipped = [];
    for(var i=0; i<16; i++){
        flipped[i] = false;
    }
    
    function CheckGameOver(){
        var flipover = 0; 
        for(var x=0; x<16; x++){ 
            if(flipped[x] === true){ 
                flipover = flipover + 1; 
            }     
            if(flipover == 16){
                $("#alert").text("Congrats, you score is " + $("#score").text());
            }
        } 
    }
    
    
    function Score(){
        var score =  parseInt($("#score").text());
        if (Match === true){
            score = score+1;
        }
        else{
           if(score > 0){
           score = score-1; 
          }
        }
        $("#score").text(score);
    }
    
    function HighScore(){
        var score =  parseInt($("#score").text());
        var Highscore = parseInt($("#HighScore").text());
        if (Highscore < score){
            $("#HighScore").text(score);
        }
        
    }
    
    function match(){
        if(Match === true){
            $("#alert").text("Match");
        }
        else{
            $("#alert").text("Unmatch");
        }
    }
    
    function randompics(array) {
        var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

});