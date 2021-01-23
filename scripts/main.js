const gameBoard = (function() {

    //Putting tiles in an array because the project specs demand it
    tiles = []

    //grab all the DOM elements
    names = document.getElementById('names')
    clear = document.getElementById('clear')
    win = document.getElementById('win')
    turn = document.getElementById('turn')

    //function to create player
    const createPlayer = function(name, turn){
        return {
            name: name,
            turn: turn
        }
    }
    playerOne = createPlayer('Player One', true)
    playerTwo = createPlayer('Player Two', false)
    turn.innerHTML = playerOne.name

    //Initialize and capture tiles on board
    for (i=0; i < 9; i++) {
    let id = parseInt(i + 1)
    tile = document.getElementById(`${id}`)
    tiles.push(tile)
    tile.innerHTML = " ";
    }
    
    //Create and attach function to change names button
    names.onclick = function () {
        playerOne.name = prompt('Enter a new name for player one');
        playerTwo.name = prompt('Enter a new name for player two');
        (playerOne.turn === true) ? turn.innerHTML = playerOne.name : turn.innerHTML = playerTwo.name
    }

    //Attach clear function to clear button
    clear.onclick = function() {
        for (i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = " "
        }
    }

    //Attach function to cells for taking turns
    cells = document.querySelectorAll('td')
    for (i = 0; i < cells.length; i++){
        cells[i].onclick = function() {
            if (this.innerHTML === ' ') {
                if (playerOne.turn) {
                    this.innerHTML = 'x'
                    if (check_for_win('x')) {
                        win.innerHTML = `${playerOne.name} wins!`
                    }
                    else if (check_for_draw()) {
                        win.innerHTML = 'It\'s a draw!'
                    }
                    turn.innerHTML = playerTwo.name
                    playerOne.turn = false
                    playerTwo.turn = true
                }
                else {
                    this.innerHTML = 'o'
                    if (check_for_win('o')) {
                        win.innerHTML = `${playerTwo.name} wins!`
                    }
                    else if (check_for_draw()) {
                        win.innerHTML = 'It\'s a draw!'
                    }
                    turn.innerHTML = playerOne.name
                    playerTwo.turn = false
                    playerOne.turn = true
                }
            }
        }
    }
    //function to check for win
    const check_for_win = function(marker) {
        if ((tiles[0].innerHTML == marker && tiles[1].innerHTML == marker && tiles[2].innerHTML == marker) ||
            (tiles[3].innerHTML == marker && tiles[4].innerHTML == marker && tiles[5].innerHTML == marker) || 
            (tiles[6].innerHTML == marker && tiles[7].innerHTML == marker && tiles[8].innerHTML == marker) ||
            (tiles[0].innerHTML == marker && tiles[3].innerHTML == marker && tiles[6].innerHTML == marker) ||
            (tiles[1].innerHTML == marker && tiles[4].innerHTML == marker && tiles[7].innerHTML == marker) ||
            (tiles[2].innerHTML == marker && tiles[5].innerHTML == marker && tiles[8].innerHTML == marker) ||
            (tiles[0].innerHTML == marker && tiles[4].innerHTML == marker && tiles[8].innerHTML == marker) ||
            (tiles[2].innerHTML == marker && tiles[4].innerHTML == marker && tiles[6].innerHTML == marker)) {
            return true
        }
        return false
    }

    //function to check for draw
    const check_for_draw = function() {
        draw = true
        for (i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == ' ') {return false}
        }
        return true
    }
})();