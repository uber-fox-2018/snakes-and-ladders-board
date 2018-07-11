function refactorCode (num) {
  let number = num * num;
  let result = [];
  for (let i = 1; i <= num; i++) {
    let container = [];
    for (let j = 1; j <= num; j++) {
      if (i % 2 !== 0) {
        container.push(number);
        number -= 1;
      } else {
        container.push(number);
        number -= 1;
      }
    }
    if (i % 2 === 0) {
      for(let l = 0; l < container.length; l++) {
         for(let m = l; m < container.length; m++) {
           let tmp = null;
           if(container[l] > container[m]) {
             tmp = container[l];
             container[l] = container[m]
             container[m] = tmp
           }
         }
       }
    }
    result.push(container);
  }
  return result;
}

console.log(refactorCode(9));
