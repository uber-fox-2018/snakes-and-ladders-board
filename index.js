function generateBoard(num){
    let result = [];
    let angka = 1;
    let array = [];
    for(let i = 0; i<num; i++){
        let row =[];
        array.push(row)
        for(let j = 0; j<num; j++){
            row.push(angka);
            angka++
        }
    }
    
    // console.log(array)
    for(let i = array.length-1; i>=0; i--){
        if(i%2 !== 0){
            let revArr =[];
            for(let j = array[i].length-1; j>=0;j--){
                revArr.push(array[i][j])
            }
            result.push(revArr);
        }else{
            result.push(array[i])
        }
    }
    return result
}

console.log(generateBoard(10))