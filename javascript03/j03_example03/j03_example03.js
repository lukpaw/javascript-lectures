const cells = [];
let currentPlayer = "X";
let gameOver = false;

// Function to create and display the game board
function createBoard() {
    const gameBoard = document.getElementById("game-board");
    const tbody = document.createElement("tbody");

    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.addEventListener("click", function () {
                makeMove(cell);
            });
            cells.push(cell);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    gameBoard.appendChild(tbody);
}

// Function to handle player moves
function makeMove(cell) {
    if (gameOver || cell.textContent !== "") {
        return;
    }

    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateMessage();
}

// Function to update the message displayed below the board
function updateMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message || (currentPlayer + "'s Turn");
}

// Call the createBoard function to initialize the game
createBoard();
updateMessage();
