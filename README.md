# Web-Game
### Main Concept 
To create a web-game in which the player has to guess a 4 letter word in 6 tries or less with no hints, except that if they guess a right letter in the word entered, they get hinted if the letter is in the correct word.

### Project Requirements
- Solo project
- This game cannot be a game or assignment we've already done in class
- This game must run in a web browser
- This game must be tracked in Github, with a minimum on 10 commits
- Ideally, put your empty project up on Github on day one of development and aim for multiple commits per day
- This game must be deployed on Github Pages or another location
- Game Requirements
- This game can be designed for 2 or more players (PvP) or 1 player (PvE)
- The second player in a PvP game can be a person or an AI
- For multi-player games, turns should switch appropriately between players
- This game should be winnable or it should keep score (whichever makes more sense)
- When a player wins or loses, the game status and/or score should display visually to the player in a way that does not rely on console.logs or alerts
- If there is a valid draw (tie) condition in your chosen game, that should be implemented
- HTML, CSS, and JavaScript should live in separate files
- Effort must be spent on styling and appearance
- The HTML code should use sematic tags
- The game should have a Readme.md file in the Github repository that describes the inspiration for the game, explains the controls and how to play the game, lists the technologies used to build the game, and addresses any outstanding bugs or unfinished functionality

## Functional Pieces
- User needs to input an existing 4 letter word relating to (existing= in the dictionary)
- #### If a letter is guessed: 
** letters are always white

  => Right:
     - Make the box green if it is in the right spot
     - Make the box yellow if it is in the wrong spot (still in the word)

  => Wrong:
    - Make box grey

- #### Make keyboard:
  -Also does the same functions as the boxed letters:
    - Right:
      - Make the keyboard letter green if it is in the right spot
      - Make the keyboard letter yellow if it is in the wrong spot (but still in the word)

   - Wrong:
     - Make keyboard letter grey
 - Have delete button and enter button

- Make each letter go into the individual boxes and display the userSelected letter into each box container 
- 


## Style Ideas
- Color pallete ideal to the eye: maybe a dark grey background -  white letters theme because it is easy for the eye
- Box containers for each of the letters
- Show rewarding gif for guessing it right: These vary from guessing right on first try to 6th try. 
- Show motivational gif for not guessing right after 6 tries

## HTML

