window.addEventListener('DOMContentLoaded', () => {
    const board = window.getElementById('board').children;
    const squares = board.getElementsByTagName("div");

    // Loop through each one and add the CSS class 'square'
    for (let square of squares) {
        square.classList.add("square");
    }
});
