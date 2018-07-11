function generateBoard(size) {
    let mainBoard = []
    let count = size*size

    for (let i = 0; i < size; i++) {
        let board = []
        for (let j = 0; j < size; j++) {
            board.push(count)
            count--
        }
        mainBoard.push(board)
    }

    if (mainBoard.length % 2 == 0) {
        for (let k in mainBoard) {
           if(k % 2 !== 0) {
             mainBoard[k] = reverse(mainBoard[k])
           }
        }
    } else if (mainBoard.length % 2 !== 0) {
        for (let k in mainBoard) {
            if (k % 2 === 0) {
                mainBoard[k] = reverse(mainBoard[k])
            }
        }
    }
    return mainBoard
}

function reverse(board) {
    let reverse_selected_board = []
    for(let i = board.length-1; i >= 0; i--) {
       reverse_selected_board.push(board[i])
    }
    return reverse_selected_board
}

console.log(generateBoard(10))
console.log(generateBoard(5))