document.addEventListener('DOMContentLoaded', () => {
    // Exercise 1
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName("div");

    // Loop through each one and add the CSS class 'square'
    for (let square of squares) {
        square.classList.add("square");
    }

    // Exercise 2 and 3
    let currentPlayer = "X";                            // Track whose turn it is
    const grid = ["", "", "", "", "", "", "", "", ""];  // Track state of the board

    for (let i = 0; i < squares.length; i++) {
        // Exercise 2
        squares[i].addEventListener("click", () => {
            // Only allow empty squares to be clicked
            if (squares[i].textContent === "") {
                squares[i].textContent = currentPlayer;
                squares[i].classList.add(currentPlayer);
                grid[i] = currentPlayer;

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
});
