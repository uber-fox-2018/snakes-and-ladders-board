let generateBoard = function (board) {

    const tabel = board * board
    let temporary = []
    let temp = []
    for (let j = tabel; j >= 0; j--) {

        temp.push(j)
        if (temp.length == board) {
            temporary.push(temp)
            temp = []
        }
    }
    let result = []
    for (let i = 0; i < temporary.length; i++) {
        if (i % 2 == 1) result.push(reverse_Manual(temporary[i]));
        else result.push(temporary[i])
    }
    return result
}

function reverse_Manual(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}


console.log(generateBoard(10))
console.log(generateBoard(8))
console.log(generateBoard(6))