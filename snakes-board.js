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
            else result.push(reverseArray(tmp))
        }
    } else {
        for(let i = 1; i <= num; i++){
            let tmp = []
            for(let j = 0; j < num; j++){
                tmp.push(numTimes)
                numTimes--
            }
            if (i % 2 !== 0) result.push(tmp)
            else result.push(reverseArray(tmp))
        }
    }
    return result
}

function reverseArray(input){
  for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input.length; j++){
      if(input[j] > input[j+1]){
        let sorting = input[j]
        input[j] = input[j+1]
        input[j+1] = sorting
      }
    }
  }
  return input
}

console.log(generateBoard(15))
console.log(generateBoard(10))
console.log(generateBoard(2))
console.log(generateBoard(3))
