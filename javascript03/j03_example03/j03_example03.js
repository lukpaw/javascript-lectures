const cells = document.querySelectorAll("td"); // Select all cells
let currentPlayer = "X";
let gameOver = false;

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

// Call the updateMessage function to display the starting message
updateMessage();
