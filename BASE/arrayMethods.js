//  array
const arr = [1, 2, 3, 4]

delete arr[0]

//splice 
arr.splice (2, 3, 63, 56, 80)
console.log(arr);


//slice

const newarr = arr.splice(0, 2);
console.log(newarr);
console.log(arr);


// indexof   страканы алдынан эсептейт
console.log(arr.indexOf(2));

// lastindexof стаканы артынан эсептеп берет
console.log(arr.lastIndexOf(2));
// includes  барюы / жокпу 
console.log(arr.includes(4));
// reverse массивти наборот эсептейт

console.log(arr.reverse());

//split стракага болот

let str = "heAllo my forld my"

const strarr = str.split(" ")
console.log(strarr);

//join массивди кошот

console.log(strarr.join(" "));

//isarray массивди \ массив эмес
console.log(Array.isArray(arr));

// concat / бир катарга тургузат

const joininsdArr = arr.concat(arr.strarr);
console.log(joininsdArr);

//forEach
strarr.forEach((element, ind, arr) => {
    console.log(ind, element, arr)
});


// fion  
 const findrd = strarr.find((el) => el === "my")
 console.log(findrd);

 // filter 

 const findedarr = strarr.filter((el) => el === "my")
 console.log(findedarr);

 //map 

 const mappedarr = strarr.map((el, inx, arr) => {
    return  "A" + el   
 })
 console.log(mappedarr);

 //sort // иреттейт
 console.log(arr);
 const sortedarr = arr.sort((a, b) => a - b)
 console.log(mappedarr);

 //reduce 
 const summ = arr.reduce((acc, el, idx, arr) =>{
    return acc + el;
 }, 0)
 console.log(summ);


 let myrarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 const maphw = myrarr.map((el ) => {
     return  el * 2
    });
 console.log(maphw)

 const youarr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,]
 let wearr = youarr.filter((el, idx, myrarr) => {
    return el % 2 === 0;
 })
 console.log(wearr);



let aarr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,]
const starr = aarr.reduce((acc, el, ind, aarr) => {
    return acc + el
}, 0)
console.log(starr)


const aearr = aarr.reduce((el, cur) =>{
    return (el < cur) ? el : cur
}) 

console.log(aearr)

const maarr = aarr.map((el) => {
    return el.toString()
})

console.log(maarr)