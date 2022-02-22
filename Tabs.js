
// Tab Selector
function tab(input) {
    tabs = document.getElementById('tabs');
    tabs.innerHTML = ``;
    if (input == 0) {
        tabs.innerHTML = `
        <button onclick="tab(1)" class="random">Random Machine</button>
        <button onclick="tab(2)" class="optimal">Optimal Machine</button>
        `
    }
    else if (input == 1) {
        tabs.innerHTML = `
        <button onClick="tab(0)">Go Back</button>
        <button onClick="tab(3)">Random: AI Vs AI</button>
        <button onClick="tab(3)">Random: AI Vs Human</button>
        `;
    } else if (input == 2) {
        tabs.innerHTML = `
        <button onClick="tab(0)">Go Back</button>
        <button onClick="tab(4)">Optimal: AI Vs AI</button>
        <button onClick="tab(4)">Optimal: AI Vs Human</button>
        `;
    } else if (input == 3) {
        tabs.innerHTML = `
        <button onClick="tab(0)">Go Back</button>
        <button onClick="clearBoard()">Clear Board</button>
        <button onClick="tictactoe(0, 0)">Quick Game</button>
        <button onClick="">Step-Through</button>
        <button onClick="tab(5)">Timed Game</button>
        `
    } else if (input == 4) {
        tabs.innerHTML = `
        <button onClick="tab(0)">Go Back</button>
        <button onClick="clearBoard()">Clear Board</button>
        <button onClick="">Quick Game</button>
        <button onClick="">Step-Through</button>
        <button onClick="">Timed Game</button>
        `
    }
    else if (input == 5) {
        tabs.innerHTML = `
        <button onClick="tab(0)">Go Back</button>
        `
    }
}