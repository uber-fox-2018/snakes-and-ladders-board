function generateBoard(num) {
    var snek = num * num
    var ladder = num
    var arr = []
    for (i = snek; i >= num; i-=num){
      var arr1 = []
      if (ladder%2===0){
        for (j = i; j > i-num; j-- ){
          arr1.push(j)
        }
        arr.push(arr1)
        ladder--
      } else {
        for (j = i-(num-1); j <= i; j++){
          arr1.push(j)
        }
        arr.push(arr1)
        ladder--
      }
    }
    return arr
  }

  console.log(generateBoard(15))