function generateBoard(num) {
    var result = [];

    let row;
    for (let i = num; i > 0; i--) {
        row = generateRow(num, i);
        result.push(row);
    }
    return result;
}

function generateRow(num, n) {
    let result = [];
    if (n % 2 !== 0) {
        n = (num * n) - num + 1;
        for (let i = 0; i < num; i++)
            result.push(n++)
    }
    else {
        n = num * n;
        for (let i = 0; i < num; i++)
            result.push(n--)
    }
    return result;
}

//Driver code
console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));