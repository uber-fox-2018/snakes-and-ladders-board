function snake(num){

    let hasil = [];
    let param = num*num

    for(let i = 0; i<num; i++){
        hasil.push([])
        // console.log(hasil)
        for(let j = 0; j < num ; j++){
                hasil[i].push(param)
                // console.log(hasil[i])
                param--
        }
        if(num % 2 === 0){
            if(i % 2 !== 0){
                hasil[i] = balikAngka(hasil[i]) // function balikAngka --> untuk reverse
            }
        }else{
            if(i % 2 === 0){
                hasil[i] = balikAngka(hasil[i])
            }
        }

    }

return hasil
}
function balikAngka(num){
    let hasil = []
  
    for (var i = num.length - 1 ; i >= 0 ; i--) {
      hasil.push(num[i])
    }
    return hasil
  }

console.log(snake(8))
console.log(snake(15))


