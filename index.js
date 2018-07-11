function generateBoard(num){
    var generator = num * num
    var result = []

    for(var i = 0 ; i < num ; i++){
        var newArr = []
        for(var j = 0 ; j < num ; j++){
                newArr.push(generator)
                generator--
        }
        result.push(newArr)
    }
    if(num % 2 === 1){
        for(var i = result.length-1 ; i >= 0 ; i--){
            if(i % 2 === 0){
                result[i].reverse()
            }
        }
    }else{
        for(var i = result.length-1 ; i >= 0 ; i--){
            if(i % 2 === 1){
                result[i].reverse()
            }
        }
    }

    
    return result

}
console.log(generateBoard(8))