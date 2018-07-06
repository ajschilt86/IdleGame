$(document).ready(function(){







var totalDollars = 0;
var totalHits = 0;
var refresh = 0;
var rank1 = 0;
var rank2 = 0;
var rank3 = 0;
var counter = 0;
var perSec;




$(".clickBtn").click(function(){
    refresh++;
    calc();
    $(".clickBtn").html("<button class='clickBtn'>Refresh</button>");
});

$(".rankOne").click(function(){
    rank1++;
    $(".rankOne").html("<button class='ranks rankOne'> Rank One: " + rank1 + "</h2>");
});

$(".rankTwo").click(function(){
    rank2++;
    $(".rankTwo").html("<button class='ranks rankTwo'> Rank Two: " + rank2 + "</h2>");
});

$(".rankThree").click(function(){
    rank3++;
    $(".rankThree").html("<button class='ranks rankThree'> Rank Three: " + rank3 + "</h2>");
});




function calc() {
    totalHits = refresh + rank1;


    $(".totalHits").html("<h2 class='totalHits'> Total Hits: " + totalHits + "</h2>");

}

function timer() {
    clearInterval(perSec)
    perSec = setInterval(increment, 1000);

    function increment(){
        if (counter >= 0) {
            counter++;
            var test = rank1 * counter;
            totalHits = refresh + test;
            $(".totalHits").html("<h2 class='totalHits'> Total Hits: " + totalHits + "</h2>");
        }
        $(".timer").html("<div>Timer: " + counter + "</div>");
    }
}



function renderHtml() {
    $(".clickBtn").html("<button class='clickBtn'>Refresh</button>");
    $(".rankOne").html("<button class=' ranks rankOne'> Rank One: " + rank1 + "</h2>");
    $(".rankTwo").html("<button class=' ranks rankTwo'> Rank Two: " + rank2 + "</h2>");
    $(".rankThree").html("<button class=' ranks rankThree'> Rank Three: " + rank3 + "</h2>");
}

renderHtml();
timer();




















});