var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var css=document.querySelector("h3");
var body=document.getElementById("gradient");
var button=document.getElementById("randomClick");

function gradientE(){
    body.style.background="linear-gradient( to right,"+ color1.value + "," +color2.value +")";
    css.textContent=body.style.background + ";"
 }

 function randomclicking(){
     color1.value="#"+ Math.floor(Math.random()*16777215).toString(16);
     color2.value="#"+ Math.floor(Math.random()*16777215).toString(16);
     gradientE();
 }



color1.addEventListener("input",gradientE);
color2.addEventListener("input",gradientE);
button.addEventListener("click",randomclicking);