// const args = process.argv.slice(2)
// var sum = 0;
// args.forEach((val, index) => {
//     sum = sum + Number(val);
// })
// console.log(sum)

'use strict'

let result = 0;

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)