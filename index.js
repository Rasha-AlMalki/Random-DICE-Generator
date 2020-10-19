
function getRandom(){
  var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
  var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

  var firstResult = document.querySelector('#result1').setAttribute("src", + RandomNumber1 + ".png");
  var secondResult = document.querySelector('#result2').setAttribute("src", + RandomNumber2 + ".png");

  var audio = new Audio('audio.mp3');

  if (RandomNumber1 > RandomNumber2){
    document.querySelector("h3").innerHTML=("Player 1 is the winner 👏🏻");
    audio.play();
} else if (RandomNumber1 < RandomNumber2){
    document.querySelector("h3").innerHTML=("Player 2 is the winner 👏🏻");
    audio.play();
} else {
    document.querySelector("h3").innerHTML=("The two players are equal.");
}
}
