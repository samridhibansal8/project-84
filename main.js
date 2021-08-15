

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");


window.addEventListener( "keydown", my_keydown)

if( (keyPressed >=97 && keyPressed <=122)|| (keyPressed >=65 && keyPressed <=90))
{
aplhabetkey();
document.getElementById("d1").innerHTML = " You Pressed Alphabet Key";
console.log("alphabet key");
}

function aplhabetkey(){
    img_image = "Alpkey.png";
    add();
}

function my_keydown(e){
    
keyPressed = e.keyCode; 
console.log(keyPressed);

if( (keyPressed >=97 && keyPressed <=122)|| (keyPressed >=65 && keyPressed <=90))
{
mnukey();
document.getElementById("d1").innerHTML = " You Pressed Number Key";
console.log("number key");
}

function mnukey(){
    img_image = "num.png";
    add();
}



if( (keyPressed >=97 && keyPressed <=122)|| (keyPressed >=65 && keyPressed <=90))
{
ohtkey();
document.getElementById("d1").innerHTML = " You Pressed Other Key";
console.log("other key");
}

function aplhabetkey(){
    img_image = "oth.png";
    add();
}

}
