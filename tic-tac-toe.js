document.addEventListener('DOMContentLoaded', () => {
    // Exercise 1
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName("div");
    const status = document.getElementById('status');   // Exercise 4, necessary for current "winner message" functionality

    // Loop through each one and add the CSS class 'square'
    for (let square of squares) {
        square.classList.add("square");
    }

    // Exercise 2, 3, 4
    let currentPlayer = "X";                            // Track whose turn it is
    const grid = ["", "", "", "", "", "", "", "", ""];  // Track state of the board
    let gameOver = false; // Exercise 4: prevents extra clicks after a win

    for (let i = 0; i < squares.length; i++) {
        // Exercise 2 and 4
        squares[i].addEventListener("click", () => {
            // Exercise 2: Only allow empty squares to be clicked
            if (squares[i].textContent === "" && !gameOver) {
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                grid[i] = currentPlayer;

                // Exercise 4: Check winner after each move
                if (checkWinner(currentPlayer)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameOver = true;
                    return; // stop the game
                }
                
                // Check for tie in case neither wins
                if (!grid.includes("") && !gameOver) {
                    status.textContent = "It's a tie! No winner this time.";
                    status.classList.remove('you-won'); // just to be safe
                    gameOver = true;
                    return;
                }

                // Switch turns
                currentPlayer = currentPlayer === "X" ? "O" : "X";

                console.log(grid);
            }
        });

        // Exercise 3
        squares[i].addEventListener('mouseover', () => {
            squares[i].classList.add('hover');
        });

        squares[i].addEventListener('mouseout', () => {
            squares[i].classList.remove('hover');
        });
    }

    // Helper function to check winner (Exercise 4) ---
    function checkWinner(player) {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        // Go through each possible winning combo
        for (let [a, b, c] of combos) {
            if (grid[a] === player && grid[b] === player && grid[c] === player) {
                return true;
            }
        }
        return false;
    }
});
