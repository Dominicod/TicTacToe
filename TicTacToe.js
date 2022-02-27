// initializes varibles
// boardActive: Returns a node list that edits the DOM to insert "X"/"O"
const boardActive = document.querySelectorAll("p");
// Memory: An array of strings to represent states of the board
let memory = [];
const result = document.querySelector('.validation-text');
let counter = 0;
// boardGrid: An array that represents the current spaces available on the board
boardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let x = 0;
let o = 0;

// Main game function
function tictactoe(input, time) {
    // Random AI Game
    if (input == 0) {
        clearBoard();
        random(input, time);
    // Random Step-Through Game
    } else if (input == 1) {
        clearBoard();
        random(input, time)
        console.log(memory)
    // Timed Game
    } else if (input == 5) {
        clearBoard();
        random(input, time);
    }
    return;
}


// Computer generates random X/O pattern with no logic
function random(input, time) {
    // Gets current status of board and pushes to memory
    let board = [];
    for (let i = 0; i < boardActive.length; i++) {
        board += boardActive[i].className;
    }
    memory.push(board);

    move = Math.floor(Math.random() * boardGrid.length);

    if (x > o) {
        // For step-through, as we want to log to memory, not push to board. All input != 1 cases are related.
        if (input != 1) {
            boardActive[boardGrid[move]].innerHTML = "O";
        }
        boardActive[boardGrid[move]].className = "o";
        o++;
        // Validates after 3 turns
        if (counter >= 2) {
            if (validate() == true) {
                if (input != 1) {
                    result.innerHTML = "O Player Wins!";
                }
                result.className = "o validation-text";
                return;
            }
        }
    } else {
        if (input != 1) {
            boardActive[boardGrid[move]].innerHTML = "X";
        }
        boardActive[boardGrid[move]].className = "x";
        x++;
    }
    // Validates after 3 turns
    if (counter >= 2) {
        if (validate() == true) {
            if (input != 1) {
                result.innerHTML = "X Player Wins!";
            }
            result.className = "x validation-text";
            return;
        }
    }
    // Removes the current space from boardGrid so the machine knows whats taken
    boardGrid.splice(move, 1);

    // Sets time it takes for function to run, runs max 8 turns
    if (counter == 8) {
        if (input != 1) {
            result.innerHTML = "No Winner";
        }
        result.className = "";
        return;
    } else {
        // Sets the speed of which the game will run with the value "time"
        counter++;
        setTimeout(() => {
            random(input, time);
        }, time);
    }
}

// Stepthrough function that uses two in puts to know if to go forward/backward
function stepthrough(input) {
    if (input == 1) {
        
    } else if (input == 2) {

    } else {
       // for (let i = 0; i < boardActive.length; i++) {
            
       // }
    }
}


// Determines a game winner
function validate() {
    // Checks horizontal pathing to look for similarities
    for (let i = 0; i <= 6; i += 3) {
        if (boardActive[i].innerHTML != "") {
            if (boardActive[i].innerHTML == boardActive[i + 1].innerHTML) {
                if (boardActive[i].innerHTML == boardActive[i + 2].innerHTML) {
                    return true;
                }
            }
        }
    }
    // Checks vertical pathing to look for similarities
    for (let i = 0; i < 3; i++) {
        if (boardActive[i].innerHTML != "") {
            if (boardActive[i].innerHTML == boardActive[i + 3].innerHTML) {
                if (boardActive[i].innerHTML == boardActive[i + 6].innerHTML) {
                    return true;
                }
            }
        }
    }
    // Checks diagonal pathing to look for similarities
    if (boardActive[4].innerHTML != "") {
        if (boardActive[0].innerHTML == boardActive[4].innerHTML) {
            if (boardActive[8].innerHTML == boardActive[4].innerHTML) {
                return true;
            }
        } else if (boardActive[6].innerHTML == boardActive[4].innerHTML) {
            if (boardActive[2].innerHTML == boardActive[4].innerHTML) {
                return true;
            }
        }
    }
    return false;
}

// Clears gameboard, memory, and counter
function clearBoard() {
    for (let i = 0; i < boardActive.length; i++) {
        boardActive[i].className = 0
        boardActive[i].innerHTML = "";
    }
    boardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    memory = [];
    result.innerHTML = "";
    counter = 0;
}