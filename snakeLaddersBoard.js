function generateBoard(num){

	var result = []
	var multiply = num * num
	var count

	if (num % 2 == 0){
		count = 1	
	}else {
		count = 0
	}
	
	for (var i = multiply ; multiply > 0 ; i--){
		var tempArr=[]
		for (var j = 0 ; j < num ; j++){
			tempArr.push(multiply)
			multiply--	
		}
		if (count % 2 === 0){
			var evenTemp=[]
			for (var k = tempArr.length-1 ; k >= 0 ; k--){
				evenTemp.push(tempArr[k])
			}
			result.push(evenTemp)	
		}else {
			result.push(tempArr)
		}
		count++
	}
	return result
}

console.log(generateBoard(15))
console.log(generateBoard(8))
