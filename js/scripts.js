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

//User Interface
$(document).ready(function() {
  $(player1.htmlRollBtn).click(function() {
    var roll = rollDice();
    $(player1.htmlDiceRoll).empty().append(roll);
    player1.currentScore += roll;
    if(roll === 1) {
      player1.currentRoll = 0;
      $(".p1Turn, .p2Turn").toggle();
      $(player2.htmlCurrentRoll).empty().append(player1.currentScore);
      $(player2.htmlDiceRoll).empty().append("");
    }
    $(player1.htmlCurrentRoll).empty().append(player1.currentScore);
  });

  $(player1.htmlHoldBtn).click(function() {
    $(".p1Turn, .p2Turn").toggle();
    player1.overallScore += player1.currentScore;
    $(player1.htmlScore).empty().append(player1.overallScore);
    player1.currentScore = 0;
    if(player1.overallScore >= 10) {
      $("#results").show();
      $(".winner").append(player1.winString);
    }
    $(player2.htmlCurrentRoll).empty().append(player2.currentScore);
    $(player2.htmlDiceRoll).empty().append("");
  });
});
//   $(".roll2").click(function() {
//     var roll = rollDice();
//     $("#p2-dice-roll").empty().append(roll);
//     diceGame.p2CurrentRoll += roll;
//     if(roll === 1) {
//       diceGame.p2CurrentRoll = 0;
//       $(".p1Turn, .p2Turn").toggle();
//       $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
//       $("#p1-dice-roll").empty().append("");
//     }
//     $("#p2-current-roll").empty().append(diceGame.p2CurrentRoll);
//   });
//
//   $(".hold2").click(function() {
//     $(".p1Turn, .p2Turn").toggle();
//     diceGame.p2Score += diceGame.p2CurrentRoll;
//     $("#p2-score").empty().append(diceGame.p2Score);
//     diceGame.p2CurrentRoll = 0;
//     if(diceGame.p2Score >= 100) {
//       $("#results").show();
//       $(".winner").append("PLAYER 2");
//     }
//     $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
//     $("#p1-dice-roll").empty().append("");
//   });
// });
