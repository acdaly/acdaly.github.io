var questionNum = 7;
var questions = ["how do you know if you like someone?",
                 "is kissing supposed to be fun?",
                 "can you be celibate for life?", 
                 "define asexuality",
                 "can you date without sex?",
                 "can you date without sex in college?",
                 "how do you know if you love someone?"];

var charIndex = 0;
var grayIndex = 3;
var qIndex = 0;

function getNextWord(){
    var nextWord = "";
    while (grayIndex < questions[qIndex].length 
        && questions[qIndex][grayIndex] != " "){
        nextWord += questions[qIndex][grayIndex];
        grayIndex += 1;

    }
    return nextWord;
}

function updateGrayText(){
    grayIndex += 1;
    var nextWord = getNextWord();
    var grayText = $("#gray_text").html();
    grayText += " ";
    grayText += nextWord; 
    $("#gray_text").html(grayText);
}

function updateText(){
   $( "input" ).keydown(function(e) {
        if (qIndex >= questions.length){
            e.preventDefault();
            return;
        }
        if (e.key != questions[qIndex][charIndex]){
            e.preventDefault();
        }
        //question typed
        if (charIndex >= questions[qIndex].length){
            e.preventDefault();
            if (e.key == "Enter"){
                this.value = "";
                charIndex = 0;
                qIndex += 1;
                grayIndex = 0;
                
                if (qIndex < questions.length){
                    var firstWord = getNextWord();
                    $("#gray_text").html(firstWord);
                }
                //no more questions
                else{
                    $("#gray_text").html("");
                }
                
            }
        }
        else if (e.key == questions[qIndex][charIndex]){
            charIndex += 1;
            if (e.key == " "){
                updateGrayText();
            }
        }
      
    }); 
}



$(document).ready(function(){
    
    $("#gray_text").on("click",function(){
        $("input").focus();
    });
    updateText();
});
