const gameBoard = (function() {

    //Putting tiles in an array because the project specs demand it
    tiles = []

    //initialize board
    names = document.getElementById('names')
    win = document.getElementById('win')
    turn = document.getElementById('turn')
    turn.innerHTML = 'Player One'
    for (i=0; i < 9; i++) {
        let id = parseInt(i + 1)
        tile = document.getElementById(`${id}`)
        tiles.push(tile)
        tile.innerHTML = " ";
    }

    //Attach function to cells for taking turns
    cells = document.querySelectorAll('td')
    for (i = 0; i < cells.length; i++){
        cells[i].onclick = function() {
            if (this.innerHTML === ' ') {
                if (turn.innerHTML == 'Player One') {
                    this.innerHTML = 'x'
                    check_for_draw()
                    check_for_win('x')
                    turn.innerHTML = 'Player Two'
                }
                else {
                    this.innerHTML = 'o'
                    check_for_draw()
                    check_for_win('o')
                    turn.innerHTML = 'Player One'
                }
            }
        }
    }
    //function to check for win
    const check_for_win = function(marker) {
        if (tiles[0].innerHTML == marker && tiles[1].innerHTML == marker && tiles[2].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[3].innerHTML == marker && tiles[4].innerHTML == marker && tiles[5].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[6].innerHTML == marker && tiles[7].innerHTML == marker && tiles[8].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[0].innerHTML == marker && tiles[3].innerHTML == marker && tiles[6].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[1].innerHTML == marker && tiles[4].innerHTML == marker && tiles[7].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[2].innerHTML == marker && tiles[5].innerHTML == marker && tiles[8].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[0].innerHTML == marker && tiles[4].innerHTML == marker && tiles[8].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
        else if (tiles[2].innerHTML == marker && tiles[4].innerHTML == marker && tiles[6].innerHTML == marker) {
            win.innerHTML = turn.innerHTML + " wins!"
        }
    }

    const check_for_draw = function() {
        draw = true
        for (i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == ' ') {draw = false}
        }
        if (draw == true) {
            win.innerHTML = "It's a draw!"
        }
    }
})();