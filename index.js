var ranNumber1 = Math.floor(6*(Math.random())+1);
var ranNumber2 = Math.floor(6*(Math.random())+1);
// switch(ranNumber1){
//   case 1:
//   document.querySelector("#player1img").src = "Images/dice1.png"
//     break;
//   case 2:
//   document.querySelector("#player1img").src = "Images/dice2.png"
//     break;
//   case 3:
//   document.querySelector("#player1img").src = "Images/dice3.png"
//     break;
//   case 4:
//   document.querySelector("#player1img").src = "Images/dice4.png"
//     break;
//   case 5:
//   document.querySelector("#player1img").src = "Images/dice5.png"
//     break;
//   case 6:
//   document.querySelector("#player1img").src = "Images/dice6.png"
//     break;
// }

// switch(ranNumber2){
//   case 1:
//   document.querySelector("#player2img").src = "Images/dice1.png"
//     break;
//   case 2:
//   document.querySelector("#player2img").src = "Images/dice2.png"
//     break;
//   case 3:
//   document.querySelector("#player2img").src = "Images/dice3.png"
//     break;
//   case 4:
//   document.querySelector("#player2img").src = "Images/dice4.png"
//     break;
//   case 5:
//   document.querySelector("#player2img").src = "Images/dice5.png"
//     break;
//   case 6:
//   document.querySelector("#player2img").src = "Images/dice6.png"
//     break;
// }

var randImage1 = "Images/dice"+ranNumber1+".png";
var image1 = document.querySelector("#player1img")
image1.setAttribute("src",randImage1);


var randImage2 = "Images/dice"+ranNumber2+".png";
var image2 = document.querySelector("#player2img")
image2.setAttribute("src",randImage2);
if(ranNumber1>ranNumber2)
{
    document.querySelector(".first").innerHTML = "Player 1 Wins 🚩";
}
else if (ranNumber1<ranNumber2) {
  document.querySelector(".first").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector(".first").innerHTML = "Math Tie 🚩";
}
