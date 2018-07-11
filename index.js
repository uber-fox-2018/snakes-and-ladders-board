function snakeAndLaddersBoard(dimension) {
    let res = []
    let counter = 1
    let swapper = false

    for (let i = 0; i < dimension; i++) {
        let temp = []
        for (let j = 0; j < dimension; j++) {
            temp.unshift(counter)
            counter++
        }
        if (swapper) {
            res.unshift(temp)
            swapper = false
        } else {
            res.unshift(temp.reverse())
            swapper = true
        }
    }
    return res
}
console.log(snakeAndLaddersBoard(15))
console.log(snakeAndLaddersBoard(8))