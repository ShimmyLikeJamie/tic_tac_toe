const gameBoard = (function() {

    //Putting tiles in an array because the project specs demand it
    tiles = []

    //grab all the DOM elements
    names = document.getElementById('names')
    clear = document.getElementById('clear')
    win = document.getElementById('win')
    turn = document.getElementById('turn')

    //function to create player
    const createPlayer = function(name, turn, piece){
        return {
            name: name,
            turn: turn,
            piece: piece
        }
    }
    playerOne = createPlayer('Player One', true, 'x')
    playerTwo = createPlayer('Player Two', false, 'o')
    turn.innerHTML = playerOne.name

    //Initialize and capture tiles on board
    for (i=0; i < 9; i++) {
    let id = i + 1
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
                    this.innerHTML = playerOne.piece
                    if (check_for_win(playerOne.piece)) {
                        win.innerHTML = `${playerOne.name} wins!`
                    }
                    else if (check_for_draw()) {
                        win.innerHTML = 'It\'s a draw!'
                    }
                    turn.innerHTML = playerTwo.name
                }
                else {
                    this.innerHTML = playerTwo.piece
                    if (check_for_win(playerTwo.piece)) {
                        win.innerHTML = `${playerTwo.name} wins!`
                    }
                    else if (check_for_draw()) {
                        win.innerHTML = 'It\'s a draw!'
                    }
                    turn.innerHTML = playerOne.name
                }
                playerTwo.turn = !playerTwo.turn
                playerOne.turn = !playerOne.turn
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