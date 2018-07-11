const snakesLadders = (height) => {
  let num = 1 
  let board = []

  for (let i = 0; i < height; i++) {
    var isiBoard = []
    for (let j = 0; j < height; j++) {
      if (i % 2 === 0) {
        isiBoard.push(num)
      } else {
        isiBoard.unshift(num)
      }
      num++
    }
    board.push(isiBoard)
  }
  console.log(board);
  
}

snakesLadders(15)