// variable randomNumber1 for generating random numbers between 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6)+1;

//Creating a variable for name of image.
//var imageName1 = "dice"+randomNumber1+".png";

//Creating a variable for path of image.
var pathImage1 = "images/dice"+randomNumber1+".png";

//Using setAttribute method for having a random number dice image.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", pathImage1);

//Performing same steps as pervious for second image.
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var pathImage2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", pathImage2);

//Announcement of Winner and Draw between Player1 and Player2
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
