//incriment 

// let num = 1
// num = num + 1
// ++num 
// console.log(num)


// //decrement 
// let num2 = 4
// num2 = num2 - 1
// num2 -= 1
// --num2 
// console.log(num2)



// while

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i += 1
// }


// let i = 0

// do {
//     console.log(i)
//     i++
// }
// while (i < 10)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     if (i === 3) {
//         continue
//     }
//     if (i === 3 ) {
//         break
//     }
//     console.log(i)
// }


let str = "hello"

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

let r = 0
for (let r = 0; r < 11; r++)
console.log(r)




var inputString = prompt("write");


var evenChars = "";


for (var i = 1; i < inputString.length; i += 2) {
    evenChars += inputString[i];
}


console.log( evenChars);



var originalWord = prompt("write");


var reversedWord = "";


for (var i = originalWord.length - 1; i >= 0; i--) {
    reversedWord += originalWord[i];
}


console.log( reversedWord);



