function generateBoard(num) {
    let board = [];
    let number = num*num;

    for(let i=0; i<num; i++){
        board.push([])

        for(let j=1; j<=num; j++){
            board[i].push(number);
            number--
        }

        if(num % 2 === 0){
            if(i % 2 !== 0){
                board[i].reverse()
            }
        }else{
            if(i % 2 === 0){
                board[i].reverse()
            }
        }
        
    }


    return board
}


console.log(generateBoard(8));
console.log(generateBoard(15));