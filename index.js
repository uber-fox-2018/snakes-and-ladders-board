/**
 * 
 * @param {*} num default adalah 10
 * 
 */
function snakeNLaddersBoard(num = 10) {
    if(num <= 0 ) {
        return "Angka tidak boleh kurang dari samadengan Nol";
    }
    var count = 1;
    var arr = [];
    var inArr = [];
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            inArr.push(count);
            count++;
        }
        
        if(i % 2 === 0) {
            arr.push(inArr);
        } else {
            arr.push(inArr.reverse());
        }
        inArr = [];
    }
    return arr.reverse();
}

console.log(snakeNLaddersBoard(15))
console.log(snakeNLaddersBoard())
console.log(snakeNLaddersBoard(8))