console.log(2 > 1)
console.log(2 < 1)
console.log(2 <= 2)
console.log(2 >= 1)
console.log(1 == 1)
console.log(1 != 1 )

console.log("2" > 1)
console.log(true == 1)
console.log(false == 0)

console.log("bbb" == "bbb")

console.log(null == false)
console.log(null == undefined)
console.log(false == "")

// строгая спавнение
console.log(false === "")
console.log(true === 1)
console.log(false === 0)
console.log(2 === "2")


//if
if (1 < 2) {
    console.log("2 bigger then 1")
}


if (!true) {
    console.log("hello")

}

console.log(!false)



const num = 1

if (num > 1) {
    console.log("num biger")
    
}
else if(num ===1) {
    console.log("eqmmd")
}
else if (num === -1) {
    console.log("num is -1")
}
else {
    console.log("num smaal")
}

//operator
// let n = null
//if  (num >= 0) {
//  n== "num is posititve"
// }
//  else {
//  n ="num is negative" 
//  }

const n = num >= 0 ? "num is positive" : "num is negative "
console.log(n)


// logic operators
// || -or 
console.log(true || true)
console.log(false ||true || false)
console.log(false || false)

//&& -end
console.log(true && true)
console.log(true && false && true)
console.log(true && true && true)  //true

// switch 

let rst = 2 + 2

switch (rst) {
    case 3:
        console.log("smal");
        break;
    case 4:
        console.log("conters");
        break;
    case 4:
        console.log("big ");
        break;
    default:
        console.log("wrong");
        break;

            
}
