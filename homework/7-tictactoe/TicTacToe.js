$( document ).ready(function() {
    
    var ClickNum=0;
    $(".td").click(function(){
        var boxId = $(this).attr("id");
        if(marked[boxId]=="empty"){
            ClickOrNot[boxId] = true;
            ClickNum=ClickNum+1;
            if(ClickNum==1){
                $(this).text("X");
                marked[boxId]="X";
                XWinOrNot();
                tie();
                if(XWin===true){
                    alert("Game Over! First Player Win!");
                    GameOver();
                }
            }
            else{
                $(this).text("O");
                marked[boxId]="O";
                OWinOrNot();
                tie();
                ClickNum=0;
                if(OWin===true){
                    alert("Game Over! Second Player Win!");
                    GameOver();
                }
            }
                        
        }
    });
    $("#reset").click(function() {
        for(var i=0; i<9; i++){
            marked[i]="empty";
        } 
        for(var i=0; i<9; i++){
            ClickOrNot[i] = false;
        }
        $(".td").text(" ");
        XWin=false;
        OWin=false;
    });
        

    
    var marked=[];
    for(var i=0; i<9; i++){
        marked[i]="empty";
    } 
    
    var XWin = false;
    function XWinOrNot(){
        if(marked[0]=="X" && marked[1]=="X" && marked[2]=="X" || marked[0]=="X" && marked[3]=="X" && marked[6]=="X" || 
        marked[0]=="X" && marked[4]=="X" && marked[8]=="X" || marked[2]=="X" && marked[5]=="X" && marked[8]=="X" || 
        marked[2]=="X" && marked[4]=="X" && marked[6]=="X" || marked[6]=="X" && marked[7]=="X" && marked[8]=="X" ||
        marked[1]=="X" && marked[4]=="X" && marked[7]=="X" || marked[3]=="X" && marked[4]=="X" && marked[5]=="X" ){
            XWin = true;
        }
    }
    var OWin = false;
    function OWinOrNot(){
        if(marked[0]=="O" && marked[1]=="O" && marked[2]=="O" || marked[0]=="O" && marked[3]=="O" && marked[6]=="O" || 
        marked[0]=="O" && marked[4]=="O" && marked[8]=="O" || marked[2]=="O" && marked[5]=="O" && marked[8]=="O" || 
        marked[2]=="O" && marked[4]=="O" && marked[6]=="O" || marked[6]=="O" && marked[7]=="O" && marked[8]=="O" ||
        marked[1]=="O" && marked[4]=="O" && marked[7]=="O" || marked[3]=="O" && marked[4]=="O" && marked[5]=="O" ){
            OWin = true;
        }
    }
    
    var ClickOrNot = [];
    for(var i=0; i<9; i++){
        ClickOrNot[i] = false;
    }
    
    function tie(){
        var Clicked = 0;
        for(var i=0; i<9; i++){
            if(ClickOrNot[i]===true){
                Clicked = Clicked+1;
            }
        }
        if(Clicked==9 && XWin===false && OWin===false){
            alert("Game Over! Tie!");
        }
    }
    
    function GameOver(){
        for(var i=0; i<9; i++){
            marked[i]="gameover";
        }
    }
});