function generateBoard(num) {
    let output = [];
    let numbers = num * num;
    let innerArr = [];

    for (let i = numbers; i > 0; i--) {
        innerArr.push(i);
        if(innerArr.length === num) {
            output.push(innerArr);
            innerArr = [];
        }
        // console.log(output);
    }
    if (num % 2 === 0) {
        for (let i = 0; i < output.length; i++) {
            if (i % 2 === 1) {
                sortNums(output[i]);
            }
        }
    } else if (num % 2 === 1) {
        for (let i = 0; i < output.length; i++) {
            if (i % 2 === 0) {
                sortNums(output[i]);
            }
        }
    }
    return output
}

function sortNums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    return arr
}

// console.log(generateBoard(10));
console.log(generateBoard(8));
console.log(generateBoard(15));