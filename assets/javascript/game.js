


// Variables

    var targetNumber="";
    var numbers="";
    var wins=0;
    var losses=0;
    var counter=0;
    var images = ["../unit-4-game/assets/images/2-Star_Crystal.png", "../unit-4-game/assets/images/Crystal_iso8.png","../unit-4-game/assets/images/Crystal_quest.png","../unit-4-game/assets/images/Crystal_cosmic.png"];


    // Defining functions
function randomNumber() {
     targetNumber = Math.floor(Math.random() * 102) + 19;
    }

function resetImages () {
        for (var i=0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            $("#crystal-images").append(crystal);
        }
    }
function resetHTML () {
    $("#targetnumber").html(targetNumber);
    $("#crystal-images").empty();
    $("#score").html(counter);
    $("#wins-#losses-#counter").html("<p>", "wins: " + wins , "losses: " + losses + "</p>");

}

function totalReset () {
    randomNumber();
    counter = 0;
    resetHTML ();
    resetImages ();


}
   
// Executing code for initial page set up

randomNumber();
resetHTML();
resetImages();

// On click functions

function imageClick () {
    counter += parseInt($(this).attr("value"));
    $("#score").html(counter);
    if (counter === targetNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        alert("you have won!")
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        $("#losses").html("Losses: " + losses);
        totalReset();
        alert("try again")
    };

};
$(document).on("click",".crystal", imageClick);