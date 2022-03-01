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
            tile.innerText= "";
            document.getElementById("container").appendChild(tile);
        }
    }
}


//Event listener for keyup because then only one letter will be inputted even if the key is held for a long time


document.addEventListener("keyup", (e)=> { //e = key event
    if (gameOver)return;
    
    
    alert(e.key);
    
    //check to see which key was pressed by user
    
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        if(col<width){
            let currentBox= document.getElementById(row.toString() + '-' + col.toString())
            // console.log(currentBox)
            if(currentBox.innerText == ``) {
                currentBox.innerText= e.key.toUpperCase()
                
                col += 1;
            }
        }
    }else if (e.code === 'Backspace'){
        if ( 0 < col && col <= width){
            col -=1;
        }
       
        let currentBox= document.getElementById(row.toString() + '-' + col.toString());
        currentBox.innerText = ``;
    }
})