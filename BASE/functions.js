// // fucntion
// function funcName() {
//     console.log("hello world")
// }

// let a = 1 
// function funcName (){
//     a =+  2
//     console.log("hello world")
//     console.log(a)
//     }
// funcName()
// funcName()
// funcName()
// console.log(a);

//params and agrs

// function sum (a, b, c = 100) {
//     console.log(a + b * c); 
//     return res;
// }

// let s = sum(5, 5, 100);
// console.log(s)


function fan(age){ 
    let d = 18; 
    let rty = d <= age; 
    return rty;
}

console.log(fan(15));
//  fan(19)
//  fan(14)


 
function min(a, b) {
   console.log(a < b ? a : b)
   return min
}

min(13, 16)
min(27, 15)


function max(a, b) {
    console.log(a > b ? a : b)
    return max
 }

 max(13, 14)
 max(15, 14)

 function pow(x, n) {
    console.log(Math.pow(x, n))
    return Math.pow
 }

 pow(3, 4)
 pow(2, 5)
 pow(4, 5)


// function fan(a, n) {

//     let pro = prompt("write") 

//         let rez = (a >= n)
    
//     // console.log(rez)

//     // return pro;

// }

// console.log(rez)
let write1 = prompt('Напишите1')
let write2 = prompt('Напишите2')

function  max (a,b){
   if (a>b){
      return true
   }else{
      return false
   }
} 
console.log(max(write1,write2))


//function diclaration and expression 

function sum1(a, b) {
   return a+b;
}

let max1 = (a, b) => (a > b ? a : b)

let s = max1(1, 2)
console.log(s)