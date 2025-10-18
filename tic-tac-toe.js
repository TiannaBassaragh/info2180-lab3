document.addEventListener('DOMContentLoaded', () => {
    // Exercise 1
    const board = document.getElementById('board').children;
    const squares = board.getElementsByTagName("div");

    // Loop through each one and add the CSS class 'square'
    for (let square of squares) {
        square.classList.add("square");
    }
});
