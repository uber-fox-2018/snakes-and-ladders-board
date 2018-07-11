function generateBoard(board) {
    let size = board*board
    let output = []
    let midArr = []

   for (let i = size; i > 0; i--) {
       midArr.push(i)
       if (midArr.length === board) {
           output.push(midArr)
           midArr = []
       }
   }


   if (board % 2 === 0) {
      for (let i = 0; i < output.length; i++) {
        if (i % 2 === 1) {
        sorting(output[i]) 
        }
      }
   }else if (board % 2 === 1) {
      for (let i = 0; i < output.length; i++) {
          if (i % 2 === 0) {
              sorting(output[i])
          } 
      } 
   }
   return output
}

function sorting(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        for (let j = i+1; j < array.length; j++) {
          if (min > array[j]) {
            min = array[j]
            array[j] = array[i]
            array[i] = min
          }
        }
      }
    return array
}

console.log(generateBoard(15));
console.log(generateBoard(8));

