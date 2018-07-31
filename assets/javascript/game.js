// crystal values random between 1 and 12
// random number betwen 19 and 120
// variables
// brown value
// diamond value
// purple value
// red value
// target number
// total score
// wins
// losses

$(document).ready(function() {

var brownvalue = 0; // id brown
var diamondvalue = 0; // id diamond
var purplevalue = 0;  // id purple
var redvalue = 0;  // id red
var targetnum = 0;  // id target
var totalnum = 0; // id total
var numwins = 0; // id wins
var numlosses = 0; // id losses

// function for picking unique values for each gem
var pickingvalues = function pickingvalues() {

// random 1-12 for brown
brownvalue = Math.floor(Math.random() * 12) + 1;

// do random 1-12 for diamond while diamond === brown
do {
    diamondvalue = Math.floor(Math.random() * 12) + 1;
}
while (diamondvalue === brownvalue);

// do random 1-12 for purple while purp{le === brown or purple === diamond
do {
    purplevalue = Math.floor(Math.random() * 12) + 1;
}
while (purplevalue === brownvalue || purplevalue === diamondvalue);

// do random 1-12 for red while red === brown or red === diamond or red === purple
do {
    redvalue = Math.floor(Math.random() * 12) + 1;
}
while (redvalue === brownvalue || redvalue === diamondvalue || redvalue === purplevalue);
console.log(brownvalue);
console.log(diamondvalue);
console.log(purplevalue);
console.log(redvalue);
}

// function for new game
var newgame = function newgame() {

    // do random 19-120 for target
    targetnum = Math.floor(Math.random() * 102) + 19;
    // reset total
    totalnum = 0
    // pickingvalues
    pickingvalues();
    // overwrite target div with new target value
    $("#target").html(targetnum);
    // overwrite total div with 0
    $("#total").html(totalnum);
    // overwrite wins with numwins
    $("#wins").html(numwins);
    // overwrite losses with numlosses
    $("#losses").html(numlosses);
}

// win/loss check function 
var winloss = function winloss() {
    // if targetnum === totalnum, wins++, newgame
    if (targetnum === totalnum) {
        numwins++;
        newgame();
// else if targetnum < totalnum, losses++, newgame
    } else if (targetnum < totalnum) {
        numlosses++;
        newgame();
    }
}

// game function
var game = function game() {
    // reset values
    newgame();
// listen for click on brown
$("#brown").on("click", function() {
// on click, totalnum = totalnum + brownvalue
    totalnum = totalnum + brownvalue;
// overwrite total div with totalnum
    $("#total").html(totalnum);
// win/loss check
    winloss();
})

// listen for click on diamond
$("#diamond").on("click", function() {
    // on click, totalnum = totalnum + diamondvalue
        totalnum = totalnum + diamondvalue;
    // overwrite total div with totalnum
        $("#total").html(totalnum);
    // win/loss check
        winloss(); 
})

// listen for click on purple
$("#purple").on("click", function() {
    // on click, totalnum = totalnum + purplevalue
        totalnum = totalnum + purplevalue;
    // overwrite total div with totalnum
        $("#total").html(totalnum);
    // win/loss check
        winloss();
 })

// listen for click on red
$("#red").on("click", function() {
    // on click, totalnum = totalnum + redvalue
        totalnum = totalnum + redvalue;
    // overwrite total div with totalnum
        $("#total").html(totalnum);
    // win/loss check
        winloss();
    })
}        

game();
})
