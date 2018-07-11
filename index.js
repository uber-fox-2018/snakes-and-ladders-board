function generateBoard(params) {
    var mainArr = []
    var childArr = []
    var count = Math.pow(params,2)
    for(var i = 0; i < params; i++){
        for(var j = 0; j < params;j++){
            childArr.push(count)
            count--
        }
        mainArr.push(childArr)
        childArr = []
    }

    // console.log(mainArr)

    for(var i = 0; i < mainArr.length;i++){
        for(var j = 0; j < mainArr[i].length;j++){
            for(var k = j+1; k < mainArr[i].length; k++){
                if ((params % 2 === 0 && i % 2 !== 0) || (params % 2 !== 0 && i % 2 === 0)) {
                    if(mainArr[i][j] > mainArr[i][k]){
                        var temp = mainArr[i][j]
                        mainArr[i][j] = mainArr[i][k]
                        mainArr[i][k] = temp
                    }
                } 
            } 
        } 
    }

    return mainArr

}

console.log(generateBoard(8));
console.log(generateBoard(15));
