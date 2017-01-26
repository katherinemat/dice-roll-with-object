//Business Logic
function Players(diceRoll, currentRoll, rollBtn, holdBtn, score, winString) {
  this.htmlDiceRoll = diceRoll;
  this.htmlCurrentRoll = currentRoll;
  this.htmlRollBtn = rollBtn;
  this.htmlHoldBtn = holdBtn;
  this.htmlScore = score;
  this.overallScore = 0;
  this.currentScore = 0;
  this.winString = winString;
};

var player1 = new Players("#p1-dice-roll", "#p1-current-roll", ".roll1", ".hold1", "#p1-score", "Player 1 Wins!");
var player2 = new Players("#p2-dice-roll", "#p2-current-roll", ".roll2", ".hold2", "#p2-score", "Player 2 Wins!");

var rollDice = function() {
  return Math.floor(Math.random()*6)+1;
}
var playersArray = [player1, player2];


//User Interface
$(document).ready(function() {
  var x = [0,1];
  $(".roll").click(function() {
    var roll = rollDice();
    console.log(playersArray[x[0]].htmlRollBtn);
    console.log(playersArray[x[1]].htmlRollBtn);
    $(playersArray[x[0]].htmlDiceRoll).empty().append(roll);
    console.log(playersArray[x[1]].htmlDiceRoll);
    playersArray[x[0]].currentScore += roll;
    if(roll === 1) {
      playersArray[x[0]].currentRoll = 0;
      $(".p1Turn, .p2Turn").toggle();
      playersArray[x[0]].currentScore = 0;
      $(playersArray[x[1]].htmlCurrentRoll).empty().append(playersArray[x[0]].currentScore);
      $(playersArray[x[1]].htmlDiceRoll).empty().append("");
    }
    $(playersArray[x[0]].htmlCurrentRoll).empty().append(playersArray[x[0]].currentScore);
  });

  $(".hold").click(function() {
    $(".p1Turn, .p2Turn").toggle();
    playersArray[x[0]].overallScore += playersArray[x[0]].currentScore;
    $(playersArray[x[0]].htmlScore).empty().append(playersArray[x[0]].overallScore);
    playersArray[x[0]].currentScore = 0;
    if(playersArray[x[0]].overallScore >= 100) {
      $("#results").show();
      $(".winner").append(playersArray[x[0]].winString);
    }
    $(playersArray[x[1]].htmlCurrentRoll).empty().append(playersArray[x[1]].currentScore);
    $(playersArray[x[1]].htmlDiceRoll).empty().append("");
    x.reverse();
    console.log(playersArray);
  });
});
