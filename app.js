var height = 6; //number of guesses
var width = 5; // number of letters in word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var word = 'MOUSE';

//when page loads call this function
window.onload = function() {
    initialize();
}

//creating boxes
function initialize () {
    //creating game board
    for (let i=0; i<height; i++){
        for (let c= 0; c<width; c++){
            //creating the span : <span id="0-0" class="tile">...</span>
            let tile= document.createElement("span");  //span doesnt end with a new line
            tile.id = i.toString() + "-" + c.toString();
            tile.classList.add("boxes");
            tile.innerText= "P"
            document.getElementById("container").appendChild(tile);
        }
    }
}