function snakesAndLadders(rows, cols) {
  const output = [];
  let count = rows * cols;
  for(let i = 0; i < rows; i++) {
    let arrNum = [];
    for(let j = 1; j <= cols; j++) {
      arrNum.push(count);
      count--;
    }   
    output.push(arrNum);    
  }

  if(output.length % 2 !== 0) {
    for(let i = 0; i < output.length; i++) {
      if(i % 2 === 0) {
        for(let j = 0; j < output[i].length-1; j++) {
          if(output[i][j] > output[i][j+1]){
            let tmp = output[i][j];
            output[i][j] = output[i][j+1];
            output[i][j+1] = tmp;
            j = -1;
          }
        }
      }
    }
  } 

  for(let i = 0; i < output.length; i++) {
    if(i % 2 !== 0) {
      for(let j = 0; j < output[i].length-1; j++) {
        if(output[i][j] > output[i][j+1]) {
          let tmp = output[i][j];
          output[i][j] = output[i][j+1];
          output[i][j+1] = tmp;
          j = -1;
        }
      }
    }        
  }

  return output;

}

console.log(snakesAndLadders(10,10));
console.log(snakesAndLadders(15,15));
console.log(snakesAndLadders(8,8));