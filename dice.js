var n=Math.random();
 n=n*6;
 n=Math.floor(n)+1;
console.log(n);
var randomimagesource="images/dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

var m=Math.random();
m=m*6;
m=Math.floor(m)+1;
console.log(m);
var randomimagesource2="images/dice"+m+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);
if (n>m) {
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";

} else if(n<m) {
  document.querySelector("h1").innerHTML="Play 2 Wins🚩 !";
}
else{document.querySelector("h1").innerHTML="Draw";
}
