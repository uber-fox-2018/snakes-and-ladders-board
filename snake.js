// //snake board
// function snake (){
// var hasil = []
// var x = 100
// for (var i=0 ; i < 10 ; i++){
//   var tampung = []
//   if (i%2 ==0){
//     for (var j=x ; j > x -10 ; j--){
//     tampung.push(j)
//     }
//     //console.log(j)
//   x = j-9
//   hasil.push(tampung)
//   }
//   else if (i%2 !==0){
//     for (var j=x ; j < x +10 ; j++){
//     tampung.push(j)
//     }
//     //console.log(j)
//   x = j-11
//   hasil.push(tampung)
//   }
// }
// return hasil
// }
// console.log(snake())

//dinamis
function snakex (param){
    var hasil = []
    
    
      if (param%2 ==0){
        var x = param*param
        for (var i=0 ; i < param ; i++){
          var tampung = []
          if (i%2 ==0){
            for (var j=x ; j > x -param ; j--){
            tampung.push(j)
            }
            //console.log(j)
          x = j-param+1
          hasil.push(tampung)
          }
          else if (i%2 !==0){
            for (var j=x ; j < x +param ; j++){
            tampung.push(j)
            }
            //console.log(j)
          x = j-param-1
          hasil.push(tampung)
          }
        }
        return hasil
      }
     else {
       var x = (param*param) - param +1
        for (var i=0 ; i < param ; i++){
          var tampung = []
          if (i%2 ==0){
            for (var j=x ; j < x +param ; j++){
            tampung.push(j)
            }
            //console.log(j)
          x = j-param-1
          hasil.push(tampung)
          }
          else if (i%2 !==0){
            for (var j=x ; j > x -param ; j--){
            tampung.push(j)
            }
            //console.log(j)
          x = j-param+1
          hasil.push(tampung)
          }
        }
        return hasil
     }
    
    }
    console.log(snakex(11))