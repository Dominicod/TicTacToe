// initializes varibles
const boardActive = document.querySelectorAll("p");
const result = document.querySelector('.validation-text')

// Computer generates random X/O pattern with no logic
function random() {
    clearBoard();
    let boardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let x = 0;
    let o = 0;
    // For loop sets the amount of turns allowed, which is dynamic mattering how many spaces allowed
    for (let i = 0; i < boardActive.length; i++) {
        randomNum = Math.floor(Math.random() * boardGrid.length);
        if (x > o) {
            boardActive[boardGrid[randomNum]].innerHTML = "O";
            boardActive[boardGrid[randomNum]].className = "o";
            o++;
            // Validates after 3 turns
            if (i >= 2) {
                if (validate() == true) {
                    result.innerHTML = "O Player Wins!";
                    result.className = "o"
                    return;
                }
            }
        } else {
            boardActive[boardGrid[randomNum]].innerHTML = "X";
            boardActive[boardGrid[randomNum]].className = "x";
            x++;
            // Validates after 3 turns
            if (i >= 2) {
                if (validate() == true) {
                    result.innerHTML = "X Player Wins!";
                    result.className = "x"
                    return;
                }
            }
        }
        boardGrid.splice(randomNum, 1)
        // If board filled and "x" or "o" has not returned, function will declare no winner
        if (i == 8) {
            validate()
            result.innerHTML = "No Winner";
            result.className = "";
        }
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

// Clears gameboard
function clearBoard() {
    for (let i = 0; i < boardActive.length; i++) {
        boardActive[i].innerHTML = "";
        result.innerHTML = "";
    }
}