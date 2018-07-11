function generateBoard(num) {
    var max= num*num
    var naik= []
    var boardN= []
    var turun= []
    var boardT= []
    var result= []
    
    for (var i= 1; i<=max; i++) {
        naik.push(i)

        if (naik.length === num) {
          boardN.push(naik)
          var naik= []
        }
    }
      
    for (var j= max; j>0; j--) {
        turun.push(j)

        if (turun.length === num) {
            boardT.push(turun)
            var turun=[]
        }
    }

/*  console.log (boardN)
    console.log ('------------------------')
    console.log (boardT)  */
      
    // PREPARE RESULT //

    if (num%2 === 0) {                                       // JIKA NUM GENAP
        for (var i=0; i<boardN.length; i++) {
            if (i%2 === 0) {
                result.push(boardT[i])
            } else {
                result.push(boardN[boardN.length-1-i])
            }
        }
        return result
    } else
   
    if (num%2 !== 0) {                                       // JIKA NUM GANJIL
        for (var i=0; i<boardN.length; i++) {
            if (i%2 === 0) {
                result.push(boardN[boardN.length-1-i])
            } else {
                result.push(boardT[i])
            }
        }
       return result
    }
}

console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))