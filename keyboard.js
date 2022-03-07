function keyboardAppend() {

let keyboard = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L", "␈"],
    ["ENTER", "Z","X","C","V","B","N","M",""]
]

for( let x=0; x<keyboard.length; x++){
    let currentRow= keyboard[x];
    let keyboardRow= document.createElement("div");
    keyboardRow.classList.add("keyboard-hr");
    
    
    //Looping through the keys inside the row, creating a tile for each key and placing within keyboard row
  for (let i=0; i<currentRow.length; i++){
      let keyBox= document.createElement("div")
      
      let key= currentRow[i];
      console.log(key)
      keyBox.innerText = key;
      if (key == "ENTER"){
          keyBox.id= "Enter";
      }else if (key == "␈"){
          keyBox.id= "Backspace"
          
      }else if ("A" <= key && key <= "Z"){
          keyBox.id= "Key"+ key
          console.log(keyBox)
      }
          
      keyBox.addEventListener("click", processKey);
     
      if (key == "ENTER" ){
          keyBox.classList.add("keyboard-enter");
          
      }else {keyBox.classList.add("keyboard-box")}
      keyboardRow.appendChild(keyBox);
        
    }
        document.body.appendChild(keyboardRow)
          
      
}
}

// event for id
function processKey(){
    let e= {"code" :this.id}
    inputKey(e)
}



function inputKey(e){
    if (gameOver)return;
    
    
    // alert(e.key);
    
    //check to see which key was pressed by user
    
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        if(col<width){
            let currentBox= document.getElementById(row.toString() + '-' + col.toString())
           
            console.log(currentBox)
            if(currentBox.innerText == ``) {
                currentBox.innerText= e.key
                
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
        document.getElementById('answer').innerText= word;
    }
}


//score tracking
