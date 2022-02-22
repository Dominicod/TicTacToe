// initializes varibles
const boardActive = document.querySelectorAll("p");
let memory = [];
const result = document.querySelector('.validation-text');
let counter = 0;
boardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let x = 0;
let o = 0;

function tictactoe(input, time) {
    if (input == 0) {
        clearBoard();
        random(input, time);
        console.log(memory)
    } else if (input == 1) {
        console.log("one")
    } else {
        console.log(time)
        clearBoard();
        random(input, time);
        console.log(memory)
    }
    return;
}


// Computer generates random X/O pattern with no logic
function random(input, time) {
    // Gets current status of board and pushes to memory
    let board = "";
    for (let i = 0; i < boardActive.length; i++) {
        board += boardActive[i].className;
    }
    memory.push(board);
    move = Math.floor(Math.random() * boardGrid.length);
    if (x > o) {
        boardActive[boardGrid[move]].innerHTML = "O";
        boardActive[boardGrid[move]].className = "o";
        o++;
        // Validates after 3 turns
        if (counter >= 2) {
            if (validate() == true) {
                result.innerHTML = "O Player Wins!";
                result.className = "o";
                return;
            }
        }
    } else {
        boardActive[boardGrid[move]].innerHTML = "X";
        boardActive[boardGrid[move]].className = "x";
        x++;
    }
    // Validates after 3 turns
    if (counter >= 2) {
        if (validate() == true) {
            result.innerHTML = "X Player Wins!";
            result.className = "x";
            return;
        }
    }
    // Removes the current space from boardGrid so the machine knows whats taken
    boardGrid.splice(move, 1);

    // Sets time it takes for function to run, runs max 8 turns
    if (counter == 8) {
        result.innerHTML = "No Winner";
        result.className = "";
        return;
    } else {
        counter++;
        setTimeout(() => {
            random(input, time);
        }, time);
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