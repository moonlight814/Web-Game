var height = 6; //number of guesses
var width = 5; // number of letters in word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;


let scoreCounter= document.getElementById('scoreCounter')
var score= 0;


var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

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
    keyboardAppend() //located in the keyboard.js file
}




//update function

function enter(){
    // let guess = "";
    // document.getElementById('answer').innetText ="";
    
    
    let correct= 0; // number of letters user gets correct
    let letterC={};//keeping track of number of times each letter appears in the word
    
    //itetaring through number of letters
    for(let i=0; i< word.length;i++){
        let letter= word[i]
        if (letterC[letter]){
            letterC[letter]+=1
        }else {
            letterC[letter]=1;
        }
    }
    
    //iterate through letters of the word that the user guessed
    
    //first iteration, checking for correct position
    for (let c =0; c< width; c++){
        let currentBox= document.getElementById(row.toString() + '-' + c.toString())
        
        let letter= currentBox.innerText
        
        //correct position? 
        if (word[c] == letter){
            currentBox.classList.add("correct");
            
            
            let keyBox= document.getElementById("Key"+letter)//it will match any instance where "Key(letter)"is, including keyboard 
            keyBox.classList.remove('inWord')
            keyBox.classList.add('correct')
            correct += 1;
            letterC[letter]-=1
        } 
        
            
            //updating gameOver (did the person guess the word correctly before the 6 tries?)
            if (correct == width){
                gameOver = true;
                console.log('win')
                updateScore();
                alert('You won!')
                
            }
        
    }
    
    
    //iterating again but for present but not correct spot
    for (let c =0; c< width; c++){
        let currentBox= document.getElementById(row.toString() + '-' + c.toString())
        
        let letter= currentBox.innerText
        
        //correct position? 
         if(!currentBox.classList.contains("correct"))   {
            if (word.includes(letter) && letterC[letter] > 0){
                currentBox.classList.add("inWord")
                let keyBox= document.getElementById("Key"+letter)
                keyBox.classList.remove('inWord')
                // to not add the inWord style class if it already has a correct style class
                if (!keyBox.classList.contains('correct')){
                keyBox.classList.add('inWord')
                }
                letterC[letter]
            }
            //wrong position
            else{
                currentBox.classList.add("wrong")
            }
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
            alert("Not enough letters!")  ////ADD animation for temporary textbox saying this instead of an alertnh
        }
    }
    
    if (row == height){
        gameOver= true;
        document.getElementById('answer').innerText= word
        alert("You lost!")
    }
})


//update score function

function updateScore(){
    scoreCounter +=1;
    score= scoreCounter
    document.getElementById('scoreCounter').innerText = score
    console.log('plus 1')
    console.log(score)
}
