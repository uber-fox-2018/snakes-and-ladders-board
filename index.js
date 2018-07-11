function snakeAndLadder(num) {
    let count = Math.pow(num, 2)
    let resultArr = []
    for (let i = 0; i < num; i++) {
      let subArr = []
      for(let j = 0; j < num; j++) {
        if(i % 2 === 0) {
          subArr.push(count)
        } else {
          subArr.unshift(count)
        }
        count--
      }
      resultArr.push(subArr)
    }
    return resultArr
  }
  
  
  console.log(snakeAndLadder(10));
  