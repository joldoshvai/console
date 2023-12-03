const person = {
    name: {
      last: "argem",
      first: "zholdoshvai"
    },
    agg: 18,
    sayhello: function () {
        
        return ( "hello ,my name is " + this.name.last + "i am" + this.agg + "yors old")        
    }

}
// dot notation
console.log(person.name);

// brucket notation
// const a = "name"
// console.log(person[a]);
// for (const key  in person) {
//     console.log(key)
// //     console.log(person[key]);
// // }
// console.log(person.sayhello());
// const arrr = {
//     count: 0,
//     increment: function () {
//         this.count+= 1
//     },
//     oulinclbent: function() {
//         this.count-= 1
//     }
// }
// console.log(arrr.increment());

// let art = prompt("")
// if ( art.length === 1) {
//     // alert ("#")
//     var rst = ""
//     for (let i = 0;i < 14;i++) {
//         if (i === 7){
//             rst += ""
//         }else {
//             rst += art
//         }
//         // rst += art
//     }

//         for (let j = 0; j < 3; j++) {
// //  let wert = alert(i) + art + j
//          alert (rst);
//     } 
// }  else {
//      alert("")
    // console.log(art);
// }\
// console.log();
// console.log(art);


const symbol = prompt("");

// let smileRow = "   prompt \n";

let rectangle = "";
for (let i = 0; i < 3; i++) {
    if (i === 1) {
        rectangle +="# " + symbol + " #"; 
    } else {
        for (let j = 0; j < symbol.length+4; j++) {
            rectangle += "#"
        }
    }
    rectangle += "\n"; 
}

console.log(rectangle);



let earr = +    prompt("")
// let qarr = 5;
var circil = {
    radius: 1,

    getaren: function () {
        return Math.PI * Math.pow(this.radius, 2)
    },
    getCircumference: function (){
        return 2 * Math.PI * this.radius;
    }

}   
circil.radius = earr
console.log(circil.getaren(), circil.getCircumference())