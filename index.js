const generateBoard = (num) => {
  let mainBoard = [];
  let row = [];
  for (let i = 1; i <= num * num; i++){
    row.push(i);
    if (row.length === num){
      if (mainBoard.length % 2 !== 0){
        let reverse = ownSort(row);
        mainBoard.push(reverse);
      } else {
        mainBoard.push(row);
      } 
      row = []; 
    }
  }
  
  let reverseBoard = [];
  for (let i = mainBoard.length - 1; i >= 0; i--){
    reverseBoard.push(mainBoard[i]);
  }
  return reverseBoard;
}

function ownSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < i; j++){
      let number = arr[i];
      if(arr[i] > arr[j]){
        arr[i] = arr [j];
        arr[j] = number;
      }
    }
  }
  return arr;
}

console.log(generateBoard(5))