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
        for (let c= 0; c < width; c++){
            //creating the span : <span id="0-0" class="tile">...</span>
            let tile= document.createElement("span");  //span doesnt end with a new line
            tile.id = i.toString() + "-" + c.toString();
            tile.classList.add("boxes");
            tile.innerText= "";
            document.getElementById("container").appendChild(tile);
        }
    }
}




//update function

function enter(){
    let correct= 0;
    for (let c =0; c< width; c++){
        let currentBox= document.getElementById(row.toString() + '-' + c.toString())
        let letter= currentBox.innerText
        
        //correct position?
        if (word[c] == letter){
            currentBox.classList.add("correct");
            correct += 1;
        } //in word but incorrect position?
        else if (word.includes(letter)){
            currentBox.classList.add("inWord")
        }
        else {
            currentBox.classList.add("wrong")}
            
            if (correct == width){
                gameOver = true;
            }
        
    }
}

//Event listener for keyup because then only one letter will be inputted even if the key is held for a long time


document.addEventListener("keyup", (e)=> { //e = key event
    if (gameOver)return;
    
    
    // alert(e.key);
    
    //check to see which key was pressed by user
    
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        if(col<width){
            let currentBox= document.getElementById(row.toString() + '-' + col.toString())
            console.log(currentBox)
            // console.log(currentBox)
            if(currentBox.innerText == ``) {
                currentBox.innerText= e.key.toUpperCase()
                
                col += 1;
            }
        }
    }
    
    else if (e.code === 'Backspace'){
        if ( 0 < col && col <= width){
            col -=1;
        }
       
        let currentBox= document.getElementById(row.toString() + '-' + col.toString());
        currentBox.innerText = ``;
    }
    
    else if (e.code === 'Enter'){
        if (col>=width) //only if all the boxes are filled in
        {
        enter()
        row+= 1; //new row when enter is pressed
        col = 0 //start at column 0 again
        }else {
            alert("Not enough letters!")  ////ADD animation for temporary textbox saying this instead of an alert
        }
    }
    
    if (row == height){
        gameOver= true;
        document.getElementById('answer').innerText= word;
    }
})