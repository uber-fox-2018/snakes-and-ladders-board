function generateBoard(num){
    let numTimes = num*num
    let result = []

    if(num % 2 !== 0 ){
        for(let i = 1; i <= num; i++){
            let tmp = []
            for(let j = 0; j < num; j++){
                tmp.push(numTimes)
                numTimes--
            }
            if (i % 2 == 0) result.push(tmp)
            else result.push(tmp.reverse())
        }
    } else {
        for(let i = 1; i <= num; i++){
            let tmp = []
            for(let j = 0; j < num; j++){
                tmp.push(numTimes)
                numTimes--
            }
            if (i % 2 !== 0) result.push(tmp)
            else result.push(tmp.reverse())
        }
    }
    return result
}

console.log(generateBoard(15))
console.log(generateBoard(10))
console.log(generateBoard(2))
console.log(generateBoard(3))